<template>
  <redirect-page :newURL="newURL" />
</template>

<script>
import RedirectPage from "~/components/RedirectPage.vue";
export default {
  layout: "coee",
  head() {
    return {
      title: "CoEE - Here to learn",
    };
  },
  components: { RedirectPage },
  computed: {
    newURL() {
      return `https://coee.gradu.al/sessions/${this.$route.params.slug}`
    },
  },
};
</script>
