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
      await this.processSheet();
    } catch (error) {
      console.log(error);
    }
  }

  async processSheet() {
    await this.sheets.spreadsheets.values.get(
      {
        spreadsheetId: this.SPREADSHEET_ID,
        range: "A1:ZZ",
      },
      async (err, res) => {
        if (err) return console.log("The API returned an error: " + err);
        const rows = res.data.values;
        const headers = rows[0];

        console.log(
          `Processing the spreadsheet rows for ${this.community.name}`
        );
        await rows.forEach(async (row, idx) => {
          if (idx === 0) return;
          await this.processRow({ headers, row });
        });

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
      }
    );
    return;
  }

  processRow({ headers, row }) {
    let member;

    headers.forEach((label, idx) => {
      if (
        label.includes("user name") ||
        label.includes("@UserName") ||
        label.includes("your name") ||
        label === "What's your full name?"
      ) {
        const normalisedName = this.normaliseName(row[idx]);
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
            name: row[idx],
            id: this.getNewId(),
          };

          this.nodes.push(member);
        }
        return;
      }

      if (label.includes("*like to learn*")) {
        // this is the multi-select question
        row[idx].split(",").forEach((skill) => {
          if (skill.trim() === "") return;
          const skillNode = this.getOrCreateSkill(skill.trim());
          skillNode.learners += 1;
          this.createLearningEdge(member, skillNode);
        });
      }

      if (label.includes("*you could share*")) {
        // this is the multi-select question
        row[idx].split(",").forEach((skill) => {
          if (skill.trim() === "") return;
          const skillNode = this.getOrCreateSkill(skill.trim());
          skillNode.sharers += 1;
          this.createSharingEdge(member, skillNode);
        });
      }
      if (label.includes("*learn*")) {
        if (row[idx].trim() === "") return;
        // this is a string value - custom input (freeform)
        const skillNode = this.getOrCreateSkill(row[idx].trim());
        skillNode.learners += 1;
        this.createLearningEdge(member, skillNode);
      }
      if (label.includes("*share*")) {
        if (row[idx].trim() === "") return;
        // this is a string value - custom input (freeform)
        const skillNode = this.getOrCreateSkill(row[idx].trim());
        skillNode.sharers += 1;
        this.createSharingEdge(member, skillNode);
      }

      if (label === "Submitted At") {
        const datetime = row[idx].split(" ");
        const date = datetime[0].split("/");
        const time = datetime[1].split(":");

        member.submittedAt = new Date(
          date[2],
          date[0],
          date[1],
          time[0],
          time[1],
          time[2]
        ).toISOString();
      }
    });
    return this.nodes;
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
      sharers: 0,
      learners: 0,
    };

    this.nodes.push(skillNode);
    return skillNode;
  }

  createLearningEdge(member, skill) {
    const newEdge = {
      _color: "#f1955b",
      sid: member.id,
      tid: skill.id,
      _svgAttrs: { "stroke-width": "2", opacity: 0.5 },
    };
    this.edges.push(newEdge);
  }

  createSharingEdge(member, skill) {
    const newEdge = {
      _color: "#9f78e4",
      sid: member.id,
      tid: skill.id,
      _svgAttrs: { "stroke-width": "2", opacity: 0.5 },
    };
    this.edges.push(newEdge);
  }

  async generateMostPopular() {
    console.log(`Generating skills for ${this.community.name}.`);
    try {
      const tids = this.edges
        .map((item) => item.tid)
        .reduce((a, c) => {
          const tids = a;
          a[c] = a[c] ? a[c] + 1 : 1;
          return tids;
        }, {});
      const tidArray = [];

      for (const [skill, numbers] of Object.entries(tids)) {
        tidArray.push({ skill, numbers });
      }

      const skills = tidArray
        .sort((a, b) => {
          const x = a.numbers;
          const y = b.numbers;
          return x < y ? 1 : x > y ? -1 : 0;
        })
        .map((item) => {
          return {
            name: this.getSkillName(item.skill),
            numbers: item.numbers,
          };
        });

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

  getSkillName(skill) {
    const skillNode = this.nodes.filter((node) => node.id === parseInt(skill));
    return skillNode[0].name;
  }
}

module.exports = { DataFetching };
