<template>
  <CommunityPage
    :indexPage="indexPage"
    :sessions="sessions"
    :nodes="nodes"
    :edges="edges"
    :popular="popular"
  />
</template>

<script>
import CommunityPage from "~/components/CommunityPage.vue";

export default {
  layout: "mozFestWranglers",
  components: {
    CommunityPage,
  },
  async asyncData({ $content }) {
    const sessions = await $content("sessions")
      .sortBy("dateTime", "asc")
      .fetch();

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

    return { sessions, indexPage, nodes, edges, popular };
  },
};
</script>
