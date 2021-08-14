<template>
  <redirect-page :newURL="newURL" />
</template>

<script>
import RedirectPage from "~/components/RedirectPage.vue";
export default {
  layout: "storytellersUnited",
  head() {
    return {
      title: "Storytellers United - Here to learn",
    };
  },
  components: { RedirectPage },
  data() {
    return {
      newURL: 'https://storytellersunited.gradu.al'
    };
  },
};
</script>
