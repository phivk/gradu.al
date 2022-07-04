<template>
  <div>
    <SessionsSection
      v-if="sessions.length"
      :sessions="sessions"
      :index="sessionsIndex"
    />
  </div>
</template>

<script>
export default {
  middleware: ["password-protect"],
  async asyncData({ $content, params }) {
    const sessions = await $content(`sessions/${params.season}`, params.slug)
      .where({ slug: { $ne: "index" } })
      .sortBy("dateTime", "asc")
      .fetch()
      .catch((error) => {
        console.log(error);
      });
    const sessionsIndex = await $content(`sessions/${params.season}`, "index")
      .fetch()
      .catch((error) => {
        console.log(error);
      });
    return {
      sessions,
      sessionsIndex,
    };
  },
};
</script>
