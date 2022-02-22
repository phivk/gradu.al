<template>
  <div>
    <h2 v-if="sessionsIndex.title" class="text-2xl md:text-3xl mb-4">
      {{ sessionsIndex.title }}
    </h2>
    <NuxtContent :document="sessionsIndex" class="text-lg" />
    <SessionsSection
      v-if="sessions.length"
      :sessions="sessions"
      :index="sessionsIndex"
      pastTitle=""
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    console.log("params", params);
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
