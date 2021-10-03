<template>
  <CommunityPage
    :indexPage="indexPage"
    :sessions="sessions"
    :ambassadors="ambassadors"
    :nodes="nodes"
    :edges="edges"
    :popular="popular"
  />
</template>

<script>
import CommunityPage from "~/components/CommunityPage.vue";

export default {
  layout: "coee",
  middleware: ["password-protect"],
  head() {
    return {
      title: "CoEE - Here to learn",
    };
  },
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

    const ambassadors = await $content("ambassadors")
      .sortBy("dateTime", "asc")
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

    return { sessions, ambassadors, indexPage, nodes, edges, popular };
  },
};
</script>
