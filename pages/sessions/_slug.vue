<template>
  <SessionPage :session="session" :bgColor="bgColor" />
</template>

<script>
import TagPill from "~/components/TagPill.vue";
import ProfilePicList from "~/components/ProfilePicList.vue";
import SessionPage from "~/components/SessionPage.vue";

export default {
  layout: "storytellersUnited",
  components: { TagPill, ProfilePicList, SessionPage },
  head() {
    return {
      title: "Storytellers United - Here to learn",
    };
  },
  data() {
    return {
      bgColor: "#fdecce",
    };
  },
  async asyncData({ $content, params }) {
    const session = await $content(
      "sessions",
      params.slug
    ).fetch();
    const members = await fetch(
      "https://storytellers.link/api/members.json"
    ).then((res) => res.json());
    return { session, members };
  },
};
</script>
<style>
.nuxt-content p {
  margin-bottom: 1rem;
}
</style>
