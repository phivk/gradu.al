<template>
  <div class="bg-background text-text min-h-screen">
    <nuxt />
  </div>
</template>
<script>
import themeConfig from "~/theme.config.js";  
export default {
  middleware: themeConfig.passwordProtect ? ["password-protect"] : [],
}
</script>