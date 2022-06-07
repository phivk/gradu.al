<template>
  <div>
    <SocialHead
      :title="`${indexPage.communityName} - Propose a Session`"
      description="Propose a new session to share skills with the community!"
    />
    <TypeformEmbed :typeformId="indexPage.typeformIdPropose" />
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
