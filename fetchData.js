const fs = require('fs');
const { google } = require('googleapis');

// This will be handled with Github secrets in production.
if (!process.env.GOOGLE_AUTH_JSON_OBJECT) {
  require('dotenv').config();
}

const communities = require("./communities")

let NODES_PATH, EDGES_PATH, SPREADSHEET_ID;

let nodes = []
let edges = []

let id = 1

function getNewId() {
  return id++
}


async function auth() {
  // Load the key
  const key = JSON.parse(process.env.GOOGLE_AUTH_JSON_OBJECT);
  // Auth using the key
  const auth = await google.auth.fromJSON(key);
  // Add read / write spreadsheets scope to our auth client
  auth.scopes = ["https://www.googleapis.com/auth/spreadsheets"];
  // Create an instance of sheets to a scoped variable
  const sheets = await google.sheets({ version: "v4", auth });
  console.log("Authed with google and instantiated google sheets");
  return sheets
}

async function run() {
  try {
    const sheets = await auth();
    await communities.forEach(async (community) => {
      // Set up the variables
      NODES_PATH = `./content/${community.name}/data/nodes.json`;
      EDGES_PATH = `./content/${community.name}/data/edges.json`;
      SPREADSHEET_ID = community.spreadsheetId;

      // Ensure the target directory exists.
      if (!fs.existsSync(`./content/${community.name}/data/`)) {
        fs.mkdirSync(`./content/${community.name}/data/`);
      }
      console.log(`Gathering data for ${community.name}.`)

      await processSheet(sheets, NODES_PATH, EDGES_PATH)
    })
    console.log("All done.")
  } catch (error) {
    console.log(error)
  }
}

run()

/**
 * Get header row
 * @param {sheets} sheets
 */
async function processSheet(sheets, NODES_PATH, EDGES_PATH) {

  return await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'A1:ZZ',
  }, async (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    const headers = rows[0];

    await rows.forEach(async (row, idx) => {
      if (idx === 0) return;
      await processRow({ headers, row })
    })


    fs.writeFile(EDGES_PATH, '{ "edges": ' + JSON.stringify(edges) + "}", (err) => {
      if (err) return console.error(err);
    })
    fs.writeFile(NODES_PATH, '{ "nodes": ' + JSON.stringify(nodes) + "}", (err) => {
      if (err) return console.error(err);
    })
  }
  );
}



function processRow({ headers, row }) {
  let member
  headers.forEach((label, idx) => {
    if (label.includes("@UserName")) {
      // create member node
      member = { "_cssClass": "Member", "_labelClass": "memberLabel", "name": row[idx], id: getNewId() }
      nodes.push(member)
      return
    }

    if (label.includes("*like to learn*")) {
      // this is the multi-select question
      row[idx].split(",").forEach(skill => {
        const skillNode = getOrCreateSkill(skill.trim())
        createLearningEdge(member, skillNode)
      })
    }

    if (label.includes("*you could share*")) {
      // this is the multi-select question
      row[idx].split(",").forEach(skill => {
        const skillNode = getOrCreateSkill(skill.trim())
        createSharingEdge(member, skillNode)
      })
    }
    if (label.includes("*learn*")) {
      // this is the multi-select question
      const skillNode = getOrCreateSkill(row[idx].trim())
      createLearningEdge(member, skillNode)
    }
    if (label.includes("*share*")) {
      // this is the multi-select question
      const skillNode = getOrCreateSkill(row[idx].trim())
      createSharingEdge(member, skillNode)
    }


  })
  return
}

function getOrCreateSkill(skill) {
  const filteredNodes = nodes.filter(node => node.name === skill)

  if (filteredNodes.length === 1) {
    return filteredNodes[0]
  }

  const skillNode = {
    "_cssClass": "Skill",
    "_labelClass": "skillLabel",
    "name": skill,
    "id": getNewId()
  }

  nodes.push(skillNode)
  return skillNode
}

function createLearningEdge(member, skill) {
  const newEdge = {
    "_color": "#f1955b",
    "sid": member.id,
    "tid": skill.id,
    "_svgAttrs": { "stroke-width": "2", "opacity": 0.5 }
  }
  edges.push(newEdge)
}

function createSharingEdge(member, skill) {
  const newEdge = {
    "_color": "#9f78e4",
    "sid": member.id,
    "tid": skill.id,
    "_svgAttrs": { "stroke-width": "2", "opacity": 0.5 }
  }
  edges.push(newEdge)
}

function getNodeId(item, nodes) {
  return nodes.filter(node => node.name === item)[0].id
}
