<template>
  <div
    class="font-inter antialiased bg-background text-text tracking-tight min-h-screen"
  >
    <nuxt />
  </div>
</template>
<script>
import themeConfig from "~/theme.config.js";
export default {
  middleware: themeConfig.passwordProtect ? ["password-protect"] : [],
};
</script>
