let nodes = require("./content/data/nodes.json").nodes;
let edges = require("./content/data/edges.json").edges;
let skills = require("./content/data/skills.json").skills;

let file_path_members_csv = "./content/data/table_members.csv";
let file_path_members_json = "./content/data/supabase_members.json";
let file_path_topics_csv = "./content/data/table_topics.csv";
let file_path_topics_json = "./content/data/supabase_topics.json";
let file_path_members_topics_csv = "./content/data/table_members_topics.csv";
let file_path_members_topics_json =
  "./content/data/supabase_members_topics.json";

var fs = require("fs");
const { stringify } = require("csv-stringify");

function writeCSV(arrayOfRows, columns, filePath) {
  const writableStream = fs.createWriteStream(filePath);
  const stringifier = stringify({ header: true, columns: columns });
  arrayOfRows.map((m) => stringifier.write(m));
  stringifier.pipe(writableStream);
  console.log("Written data to", filePath);
}

function writeJSON(data, filePath) {
  let dataString = JSON.stringify(data, null, 2);
  fs.writeFile(filePath, dataString, (err) => {
    if (err) throw err;
    console.log("Written data to", filePath);
  });
}

/* Members */
var members = nodes
  .filter((n) => n["_cssClass"] == "Member")
  .map((n) => {
    // return [n.id, n.submittedAt, n.name, null, null];
    return {
      id: n.id,
      created_at: n.submittedAt,
      username: n.name,
      email: null,
      comment: null,
    };
  });
writeCSV(
  members,
  ["id", "created_at", "username", "email", "comment"],
  file_path_members_csv
);
writeJSON(members, file_path_members_json);

/* Topics */
var topics = nodes
  .filter((n) => n["_cssClass"] == "Skill")
  .map((n) => {
    return {
      id: n.id,
      created_at: n.firstSubmittedOn,
      name: n.name,
    };
  });
writeCSV(topics, ["id", "created_at", "name"], file_path_topics_csv);
writeJSON(topics, file_path_topics_json);

/* Members-Topics */
var m_t_id = 0;
members_topics = edges.map((edge) => {
  m_t_id++;
  let learner = edge.type === "learn" ? edge.sid : null;
  let topic = edge.tid;
  let sharer = edge.type === "share" ? edge.sid : null;
  let created_at = members.find((member) => member.id === edge.sid).created_at;
  return {
    id: m_t_id,
    created_at,
    learner,
    topic,
    sharer,
  };
});
writeCSV(
  members_topics,
  ["id", "created_at", "learner", "topic", "sharer"],
  file_path_members_topics_csv
);
writeJSON(members_topics, file_path_members_topics_json);
