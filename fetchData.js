const fs = require("fs");
const { google } = require("googleapis");

if (!process.env.GOOGLE_AUTH_JSON_OBJECT) {
  require("dotenv").config();
}

class DataFetching {
  constructor({ community }) {
    this.NODES_PATH = `./content/data/nodes.json`;
    this.EDGES_PATH = `./content/data/edges.json`;
    this.SPREADSHEET_ID = community.spreadsheetId;
    this.community = community;
    this.nodes = [];
    this.edges = [];
    this.nodeId = 1;
  }

  getNewId() {
    return this.nodeId++;
  }

  normaliseName(name) {
    if (!name) {
      return;
    }
    return name.toLowerCase().split("@").join("");
  }

  async authAndGetSheets() {
    // Load the key
    const key = JSON.parse(process.env.GOOGLE_AUTH_JSON_OBJECT);

    // Auth using the key
    const auth = await google.auth.fromJSON(key);

    // Add read / write spreadsheets scope to our auth client
    auth.scopes = ["https://www.googleapis.com/auth/spreadsheets"];

    // Create an instance of sheets to a scoped variable
    const sheets = await google.sheets({ version: "v4", auth });
    console.log("Authed with google and instantiated google sheets");
    return sheets;
  }

  async run() {
    try {
      this.sheets = await this.authAndGetSheets();
      if (!fs.existsSync(`./content/data/`)) {
        fs.mkdirSync(`./content/data/`);
      }
      console.log(`Gathering data for ${this.community.name}.`);
      const res = await this.sheets.spreadsheets.get({
        spreadsheetId: this.SPREADSHEET_ID,
        includeGridData: true,
      });

      const sheets = res.data.sheets;

      await sheets.forEach((sheet) => this.processSheet(sheet));

      await fs.writeFile(
        this.EDGES_PATH,
        '{ "edges": ' + JSON.stringify(this.edges) + "}",
        (err) => {
          if (err) return console.error(err);
        }
      );

      await fs.writeFile(
        this.NODES_PATH,
        '{ "nodes": ' + JSON.stringify(this.nodes) + "}",
        (err) => {
          if (err) return console.error(err);
        }
      );

      await this.generateMostPopular();
    } catch (error) {
      console.log(error);
    }
  }

  async processSheet(sheet) {
    try {
      const rows = sheet?.data[0]?.rowData?.map((data) => data.values);

      if (!rows) {
        return;
      }

      const headers = rows[0]
        .filter((data) => data.formattedValue)
        .map((data) => data.formattedValue);

      console.log(
        `Processing the spreadsheet rows for ${this.community.name} in sheet ${sheet.properties.title}`
      );

      await rows.forEach(async (row, idx) => {
        if (idx === 0) return;
        const preparedRow = row.map((data) => data.formattedValue);
        await this.processRow({ headers, row: preparedRow });
      });
    } catch (error) {
      console.log(error);
    }
  }

  processRow({ headers, row }) {
    const dateIndex = headers.findIndex((item) => item === "Submitted At");

    const datetime = row[dateIndex].split(" ");
    const date = datetime[0].split("/");
    const time = datetime[1].split(":");

    const rowDate = new Date(
      date[2],
      date[0],
      date[1],
      time[0],
      time[1],
      time[2]
    ).toISOString();

    let member = this.createMemberNode({ headers, row, rowDate });

    headers.forEach((label, idx) => {
      if (label.includes("*like to learn*") && row[idx]) {
        // this is the multi-select question
        row[idx].split(",").forEach((skill) => {
          if (skill.trim() === "") return;
          const skillNode = this.getOrCreateSkill(skill.trim());
          skillNode.learnerCount += 1;
          this.createLearningEdge(member, skillNode);
        });
      }

      if (label.includes("*you could share*") && row[idx]) {
        // this is the multi-select question
        row[idx].split(",").forEach((skill) => {
          if (skill.trim() === "") return;
          const skillNode = this.getOrCreateSkill(skill.trim());
          skillNode.sharerCount += 1;
          this.createSharingEdge(member, skillNode);
        });
      }
      if (label.includes("*learn*") && row[idx]) {
        if (row[idx].trim() === "") return;
        // this is a string value - custom input (freeform)
        const skillNode = this.getOrCreateSkill(row[idx].trim());
        skillNode.learnerCount += 1;

        if (!skillNode.submittedBy) {
          skillNode.submittedBy = member.name;
        }

        if (!skillNode.firstSubmittedOn) {
          skillNode.firstSubmittedOn = rowDate;
        }

        this.createLearningEdge(member, skillNode);
      }
      if (label.includes("*share*") && row[idx]) {
        if (row[idx].trim() === "") return;
        // this is a string value - custom input (freeform)
        const skillNode = this.getOrCreateSkill(row[idx].trim());
        skillNode.sharerCount += 1;

        if (!skillNode.submittedBy) {
          skillNode.submittedBy = member.name;
        }

        if (!skillNode.firstSubmittedOn) {
          skillNode.firstSubmittedOn = rowDate;
        }

        this.createSharingEdge(member, skillNode);
      }
    });
    return this.nodes;
  }

  createMemberNode({ headers, row, rowDate }) {
    const nameIndex = headers.findIndex(
      (label) =>
        label.includes("user name") ||
        label.includes("@UserName") ||
        label.includes("your name") ||
        label === "What's your full name?"
    );

    let member;

    const normalisedName = this.normaliseName(row[nameIndex]);
    // check if member node already exists
    if (
      this.nodes
        .map((item) => this.normaliseName(item.name))
        .includes(normalisedName)
    ) {
      member = this.nodes.filter(
        (item) => this.normaliseName(item.name) === normalisedName
      )[0];
    } else {
      // otherwise create member node
      member = {
        _cssClass: "Member",
        _labelClass: "memberLabel",
        name: row[nameIndex],
        id: this.getNewId(),
        submittedAt: rowDate,
      };

      this.nodes.push(member);
    }
    return member;
  }

  getOrCreateSkill(skill) {
    const filteredNodes = this.nodes.filter((node) => node.name === skill);

    if (filteredNodes.length === 1) {
      return filteredNodes[0];
    }

    const skillNode = {
      _cssClass: "Skill",
      _labelClass: "skillLabel",
      name: skill,
      id: this.getNewId(),
      sharerCount: 0,
      learnerCount: 0,
    };

    this.nodes.push(skillNode);
    return skillNode;
  }

  createLearningEdge(member, skill) {
    const newEdge = {
      type: "learn",
      _color: "#f1955b",
      sid: member.id,
      tid: skill.id,
      _svgAttrs: { "stroke-width": "2", opacity: 0.5 },
    };
    this.edges.push(newEdge);
  }

  createSharingEdge(member, skill) {
    const newEdge = {
      type: "share",
      _color: "#9f78e4",
      sid: member.id,
      tid: skill.id,
      _svgAttrs: { "stroke-width": "2", opacity: 0.5 },
    };
    this.edges.push(newEdge);
  }

  async generateSkillsList() {
    console.log(`Generating skills for ${this.community.name}.`);
    try {
      const allowed = [
        "name",
        "id",
        "sharerCount",
        "learnerCount",
        "submittedBy",
        "firstSubmittedOn",
        "totalCount",
        "learnerNames",
        "sharerNames",
      ];

      const skills = this.nodes
        .filter((node) => node._cssClass === "Skill")
        .map((node) => {
          node.totalCount = node.learnerCount + node.sharerCount;
          node.learnerNames = this.getMembersForSkillNode(node, "learn");
          node.sharerNames = this.getMembersForSkillNode(node, "share");
          let nodeFiltered = Object.keys(node)
            .filter((key) => allowed.includes(key))
            .reduce((obj, key) => {
              return {
                ...obj,
                [key]: node[key],
              };
            }, {});
          return nodeFiltered;
        })
        .sort((a, b) => b.totalCount - a.totalCount);

      await fs.writeFileSync(
        `./content/data/skills.json`,
        '{ "skills": ' + JSON.stringify(skills) + "}",
        (err) => {
          if (err) return console.error(err);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  getMembersForSkillNode(skillNode, type) {
    return this.edges
      .filter((edge) => edge.tid === skillNode.id && edge.type === type)
      .map((edge) => {
        return this.nodes.find((node) => node.id === edge.sid).name;
      });
  }

  getSkillName(skill) {
    const skillNode = this.nodes.filter((node) => node.id === parseInt(skill));
    return skillNode[0].name;
  }
}

module.exports = { DataFetching };
