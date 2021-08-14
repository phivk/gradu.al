<template>
  <redirect-page :newURL="newURL" />
</template>

<script>
import RedirectPage from "~/components/RedirectPage.vue";
export default {
  layout: "mozFestWranglers",
  head() {
    return {
      title: "MozFest Wranglers - Here to learn",
    };
  },
  components: { RedirectPage },
  computed: {
    newURL() {
      return `https://mozfestwranglers.gradu.al/sessions/${this.$route.params.slug}`
    },
  },
};
</script>
