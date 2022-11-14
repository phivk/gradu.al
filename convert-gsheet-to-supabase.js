let nodes = require("./content/data/nodes.json").nodes;
let edges = require("./content/data/edges.json").edges;
let skills = require("./content/data/skills.json").skills;

var fs = require("fs");

var members = nodes
  .filter((n) => n["_cssClass"] == "Member")
  .map((n) => {
    return [n.id, n.name, n.submittedAt];
  });

let csv = members.join("\n");

fs.writeFile("./table-members.csv", csv, "utf8", function (err) {
  if (err) {
    console.log(
      "Some error occured - file either not saved or corrupted file saved."
    );
  } else {
    console.log("It's saved!");
  }
});
