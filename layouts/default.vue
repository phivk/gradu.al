<template>
  <div
    class="font-inter antialiased bg-background text-text tracking-tight min-vh-100"
  >
    <TheNavBar
      class="bg-primary"
      backLinkTarget="/"
      :backLinkText="communityName"
      :logoIsBlack="logoIsBlack"
    />
    <div class="p-2 sm:p-4 lg:p-8">
      <nuxt />
    </div>
    <TheFooter />
  </div>
</template>
<script>
import themeConfig from "~/theme.config.js";
export default {
  middleware: themeConfig.passwordProtect ? ["password-protect"] : [],
  head() {
    return {
      link: [{ rel: "stylesheet", href: "/css/tachyons.min.css" }],
    };
  },
  data: () => {
    return {
      communityName: themeConfig.communityName,
      logoIsBlack: themeConfig.logoIsBlack,
    };
  },
};
</script>
