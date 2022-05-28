<template>
  <CommunityPage :indexPage="indexPage" :sessions="sessions" :sessionsIndexes="sessionsIndexes"
    :ambassadorsIndex="ambassadorsIndex" :ambassadors="ambassadors" />
</template>
<script>
import { mapActions } from 'vuex';

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
      .sortBy("sortOrder", "asc")
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

    return {
      sessions,
      sessionsIndexes,
      ambassadors,
      ambassadorsIndex,
      indexPage,
    };
  },
  methods: {
    ...mapActions("supabase", ['fetchData'])
  },
  mounted() {
    this.fetchData()
  },
};
</script>
