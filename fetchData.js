const fs = require('fs');
const { google } = require('googleapis');

// This will be handled with Github secrets in production.
if (!process.env.GOOGLE_AUTH_JSON_OBJECT) {
  require('dotenv').config();
}

const communities = require("./communities")

let NODES_PATH, EDGES_PATH, SPREADSHEET_ID;



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
      NODES_PATH = `./content/${community.name}/data/nodes.js`;
      EDGES_PATH = `./content/${community.name}/data/edges.js`;
      SPREADSHEET_ID = community.spreadsheetId;

      // Ensure the target directory exists.
      if (!fs.existsSync(`./content/${community.name}/data/`)) {
        fs.mkdirSync(`./content/${community.name}/data/`);
      }
      console.log(`Gathering data for ${community.name}.`)

      // Fetch the data.
      await getNodesAndEdges(sheets);
    })
    console.log("All done.")
  } catch (error) {
    console.log(error)
  }
}

run()

/**
 * Gets and formats nodes.
 */
function getNodesAndEdges(sheets) {
  let result
  sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Nodes!A2:C',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      result = rows.map((row) => {
        return {
          _cssClass: row[2],
          _labelClass: `${row[2].toLowerCase()}Label`,
          name: row[0],
          id: row[1]
        }
      });
      fs.writeFile(NODES_PATH, '{ "nodes": ' + JSON.stringify(result) + "}", (err) => {
        if (err) return console.error(err);
      });
      getEdges(result, sheets)
    } else {
      console.log('No data found.');
    }
  });
}

/**
 * Gets and formats edges.
 */
function getEdges(nodes, sheets) {
  let result
  sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Edges!A2:D',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      result = rows.map((row) => {
        return {
          _color: row[2] === "likes to learn" ? "#f1955b" : "#9f78e4",
          sid: getNodeId(row[0], nodes),
          tid: getNodeId(row[1], nodes),
          _svgAttrs: {
            "stroke-width": row[3],
            opacity: 0.5
          }

        }
      });
      fs.writeFile(EDGES_PATH, '{ "edges": ' + JSON.stringify(result) + "}", (err) => {
        if (err) return console.error(err);
      });
    } else {
      console.log('No data found.');
    }
  });
}


function getNodeId(item, nodes) {
  return nodes.filter(node => node.name === item)[0].id
}
