<template>
  <SessionPage :session="session" :bgColor="bgColor" />
</template>

<script>
import SessionPage from "~/components/SessionPage.vue";

export default {
  middleware: ["password-protect"],
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