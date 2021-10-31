<template>
  <div>
    <SocialHead :title="`${indexPage.communityName} - Here to learn`" description="" />
    <TypeformEmbed :typeformSrc="indexPage.typeformSrc" />
  </div>
</template>

<script>
import TypeformEmbed from "~/components/TypeformEmbed.vue";
import SocialHead from "~/components/SocialHead";
export default {
  components: {
    TypeformEmbed,
    SocialHead,
  },
  async asyncData({ $content }) {
    const indexPage = await $content("index").fetch();
    return { indexPage };
  },
};
</script>
