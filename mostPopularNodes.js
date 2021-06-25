const fs = require("fs");
const fsPromises = fs.promises;

async function run(community) {
  try {
    // Open the nodes and edges fills
    const nodesRaw = await fs.readFileSync(
      `./content/${community}/data/nodes.json`,
      "utf8"
    );
    const nodes = JSON.parse(nodesRaw);

    const edgesRaw = await fs.readFileSync(
      `./content/${community}/data/edges.json`,
      "utf8"
    );
    const edges = JSON.parse(edgesRaw);

    const tids = edges.edges
      .map(item => item.tid)
      .reduce((a, c) => {
        const tids = a;
        a[c] = a[c] ? a[c] + 1 : 1;
        return tids;
      }, {});

    let mostPopular = 0;

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
      .slice(0, 5)
      .map(item => getSkillName(nodes, item.skill));

    await fs.writeFileSync(
      `./content/${community}/data/popular.json`,
      '{ "skills": ' + JSON.stringify(skills) + "}",
      err => {
        if (err) return console.error(err);
      }
    );
  } catch (error) {
    console.log(error);
  }
}

function getSkillName(nodes, skill) {
  const skillNode = nodes.nodes.filter(node => node.id === parseInt(skill));
  return skillNode[0].name;
}

run("coee");
