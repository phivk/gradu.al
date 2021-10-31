<template>
  <div class="bg-background text-text min-vh-100">
    <TheNavBar class="bg-primary" backLinkTarget="/" :backLinkText="communityName" />
    <div class="p-2 sm:p-4 lg:p-8">
      <nuxt />
    </div>
  </div>
</template>
<script>
import themeConfig from "~/theme.config.js";
import TheNavBar from "~/components/TheNavBar.vue";
export default {
  middleware: themeConfig.passwordProtect ? ["password-protect"] : [],
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/tachyons.min.css' }
      ]
    }
  },
  components: {
    TheNavBar,
  },
  data: () => {
    return {
      communityName: themeConfig.communityName
    }
  }
};
</script>
<style>
html {
  font-family: "Avenir", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
