<template>
  <div class="theme-storytellerunited">
    <div class="bg-color-bg min-vh-100">
      <TheNavBar class="bg-color-primary" backLinkText="Storytellers United" />
      <div class="p-2 sm:p-4 lg:p-8">
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import TheNavBar from "~/components/TheNavBar.vue";
export default {
  head() {
    return {
      link: [{ rel: "stylesheet", href: "/css/tachyons.min.css" }],
    };
  },
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

.theme-storytellerunited .color-bg { color: var(--color-su-washed-orange); }
.theme-storytellerunited .color-primary { color: var(--color-su-light-orange); }
.theme-storytellerunited .color-primary-washed { color: var(--color-su-washed-orange); }
.theme-storytellerunited .color-accent { color: var(--color-su-dark-orange); }
.theme-storytellerunited .color-accent-washed { color: var(--color-su-washed-orange); }
.theme-storytellerunited .bg-color-bg { background-color: var(--color-su-washed-orange); }
.theme-storytellerunited .bg-color-primary { background-color: var(--color-su-light-orange); }
.theme-storytellerunited .bg-color-primary-washed { background-color: var(--color-su-washed-orange); }
.theme-storytellerunited .bg-color-accent { background-color: var(--color-su-dark-orange); }
.theme-storytellerunited .bg-color-accent-washed { background-color: var(--color-su-washed-orange); }
</style>
