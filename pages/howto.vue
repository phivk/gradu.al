<template>
  <ArticlePage :page="howtoPage" />
</template>

<script>
export default {
  middleware: ["password-protect"],
  async asyncData({ $content }) {
    const indexPage = await $content("index").fetch();
    const howtoPage = await $content("howto").fetch();

    return {
      howtoPage: {
        ...howtoPage,
        communityName: indexPage.communityName,
        adminURL: indexPage.adminURL,
      },
    };
  },
};
</script>
