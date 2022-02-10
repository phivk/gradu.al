<template>
  <CommunityPage
    :indexPage="indexPage"
    :sessions="sessions"
    :ambassadorsIndex="ambassadorsIndex"
    :ambassadors="ambassadors"
    :nodes="nodes"
    :edges="edges"
    :popular="popular"
  />
</template>

<script>
import CommunityPage from "~/components/CommunityPage.vue";

export default {
  middleware: ["password-protect"],
  components: {
    CommunityPage,
  },
  async asyncData({ $content }) {
    const sessions = await $content("sessions")
      .sortBy("dateTime", "asc")
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

    return { sessions, ambassadors, ambassadorsIndex, indexPage, nodes, edges, popular };
  },
};
</script>
