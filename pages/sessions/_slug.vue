<template>
  <SessionPage :session="session" :bgColor="bgColor" />
</template>

<script>
import SessionPage from "~/components/SessionPage.vue";

export default {
  layout: "mozFest",
  head() {
    return {
      title: "MozFest - Here to learn",
    };
  },
  components: { SessionPage },
  data() {
    return {
      bgColor: "#f4f4f4",
    };
  },
  async asyncData({ $content, params }) {
    const session = await $content("sessions", params.slug).fetch();
    return { session };
  },
};
</script>
<style>
.nuxt-content p {
  margin-bottom: 1rem;
}
</style>
