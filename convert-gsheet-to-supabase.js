let nodes = require("./content/data/nodes.json").nodes;
let edges = require("./content/data/edges.json").edges;
let skills = require("./content/data/skills.json").skills;

var fs = require("fs");
const { stringify } = require("csv-stringify");

function writeCSV(arrayOfRows, columns, filePath) {
  const writableStream = fs.createWriteStream(filePath);
  const stringifier = stringify({ header: true, columns: columns });
  arrayOfRows.map((m) => stringifier.write(m));
  stringifier.pipe(writableStream);
  console.log("Finished writing data to", filePath);
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
  "./content/data/table_members.csv"
);

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
writeCSV(
  topics,
  ["id", "created_at", "name"],
  "./content/data/table_topics.csv"
);

/* Members-Topics */
var m_t_id = 0;
members_topics = edges.map((edge) => {
  m_t_id++;
  let learner = edge.type === "learn" ? edge.sid : null;
  let topic = edge.tid;
  let sharer = edge.type === "share" ? edge.sid : null;
  return {
    id: m_t_id,
    created_at: null,
    learner: learner,
    topic: topic,
    sharer: sharer,
  };
});
writeCSV(
  members_topics,
  ["id", "created_at", "learner", "topic", "sharer"],
  "./content/data/table_members_topics.csv"
);
