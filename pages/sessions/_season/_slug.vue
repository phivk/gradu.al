<template>
  <SessionPage :session="session" />
</template>

<script>
import SessionPage from "~/components/SessionPage.vue";

export default {
  components: { SessionPage },
  data() {
    return {
      bgColor: "#f4f4f4",
    };
  },
  async asyncData({ $content, params }) {
    const session = await $content(
      `sessions/${params.season}`,
      params.slug
    ).fetch();
    return { session };
  },
};
</script>
