const communities = require("./communities");
const { run: fetchData } = require("./fetchData");
const { run: mostPopular } = require("./mostPopularNodes");

{
  communities.map(async community => {
    await fetchData({ community });
    await setTimeout(() => mostPopular(community.name), 2000);
  });
}
