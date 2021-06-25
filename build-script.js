const communities = require("./communities");
const { DataFetching } = require("./fetchData");

{
  communities.map(async community => {
    const communityDataFetching = new DataFetching({ community });
    await communityDataFetching.run();
  });
}
