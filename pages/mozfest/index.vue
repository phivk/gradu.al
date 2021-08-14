<template>
  <redirect-page :newURL="newURL" />
</template>

<script>
import RedirectPage from "~/components/RedirectPage.vue";
export default {
  layout: "mozFest",
  head() {
    return {
      title: "MozFest - Here to learn",
    };
  },
  components: { RedirectPage },
  data() {
    return {
      newURL: 'https://mozfest.gradu.al'
    };
  },
};
</script>
