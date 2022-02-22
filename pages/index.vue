<template>
  <CommunityPage
    :indexPage="indexPage"
    :sessions="sessions"
    :sessionsIndexes="sessionsIndexes"
    :ambassadorsIndex="ambassadorsIndex"
    :ambassadors="ambassadors"
    :nodes="nodes"
    :edges="edges"
    :popular="popular"
  />
</template>
<script>
export default {
  async asyncData({ $content }) {
    const sessions = await $content("sessions", { deep: true })
      .where({ slug: { $ne: "index" } })
      .sortBy("dateTime", "asc")
      .fetch()
      .catch((error) => {
        console.log(error);
      });
    const sessionsIndexes = await $content("sessions", { deep: true })
      .where({ slug: { $eq: "index" } })
      .fetch()
      .catch((error) => {
        console.log(error);
      });

    const ambassadorsIndex = await $content("ambassadors/index")
      .fetch()
      .catch((error) => {
        console.log(error);
      });
    const ambassadors = await $content("ambassadors")
      .where({ slug: { $ne: "index" } })
      .sortBy("sortOrder", "asc")
      .fetch()
      .catch((error) => {
        console.log(error);
      });

    const indexPage = await $content("index").fetch();

    let nodes, edges, popular;

    try {
      nodes = await $content("data", "nodes").fetch();
      edges = await $content("data", "edges").fetch();
      popular = await $content("data", "popular").fetch();
    } catch (error) {
      console.log(error);
      console.log("nodes and edges failed to load");
    }

    return {
      sessions,
      sessionsIndexes,
      ambassadors,
      ambassadorsIndex,
      indexPage,
      nodes,
      edges,
      popular,
    };
  },
};
</script>
