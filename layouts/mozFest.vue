<template>
  <div class="bg-moz-light-gray min-vh-100">
    <TheNavBar
      class="bg-moz-purple"
      backLinkText="MozFest"
      backLinkSlug="mozfest"
    />
    <nuxt />
  </div>
</template>
<script>
import TheNavBar from "~/components/TheNavBar.vue";
export default {
  components: {
    TheNavBar,
  },
};
</script>
<style>
:root {
  --color-moz-purple: #6703bf;
  --color-moz-berry: #b7007e;
  --color-moz-light-gray: #f4f4f4;
}
.moz-purple { color: var(--color-moz-purple); }
.moz-berry { color: var(--color-moz-berry); }
.moz-light-gray { color: var(--color-moz-light-gray); }
.bg-moz-purple { background-color: var(--color-moz-purple); }
.bg-moz-berry { background-color: var(--color-moz-berry); }
.bg-moz-light-gray { background-color: var(--color-moz-light-gray); }
</style>
