<template>
  <div class="bg-su-washed-orange min-vh-100">
    <TheNavBar
      class="bg-su-light-orange"
      backLinkText="Storytellers United"
      backLinkSlug="storytellersunited"
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
  --color-su-washed-orange: #fdecce;
  --color-su-light-orange: #f4a726;
  --color-su-dark-orange: #ff5a17;
  --color-su-light-blue: #c3ecf7;
  --color-su-dark-blue: #02ace3;
}
.su-washed-orange { color: var(--color-su-washed-orange); }
.su-light-orange { color: var(--color-su-light-orange); }
.su-dark-orange { color: var(--color-su-dark-orange); }
.bg-su-washed-orange { background-color: var(--color-su-washed-orange); }
.bg-su-light-orange { background-color: var(--color-su-light-orange); }
.bg-su-dark-orange { background-color: var(--color-su-dark-orange); }
.bg-su-light-blue { background-color: var(--color-su-light-blue); }
.bg-su-dark-blue { background-color: var(--color-su-dark-blue); }
</style>
