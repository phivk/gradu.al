<template>
  <div>
    <SocialHead
      :title="`${indexPage.communityName} - Here to learn`"
      description=""
    />
    <TypeformEmbed :typeformId="indexPage.typeformIdFull" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const indexPage = await $content("index").fetch();
    return { indexPage };
  },
};
</script>
