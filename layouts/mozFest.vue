<template>
  <div class="theme-mozfest">
    <div class="bg-color-bg min-vh-100">
      <TheNavBar
        class="bg-color-primary"
        backLinkText="MozFest"
        backLinkSlug="mozfest"
      />
      <div class="p-2 sm:p-4 lg:p-8">
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import TheNavBar from "~/components/TheNavBar.vue";
export default {
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
};
</script>
<style>
:root {
  --color-moz-purple: #6703bf;
  --color-moz-purple-washed: #6703bf22;
  --color-moz-berry: #b7007e;
  --color-moz-berry-washed: #b7007e22;
  --color-moz-light-gray: #f4f4f4;
}
.moz-purple { color: var(--color-moz-purple); }
.moz-berry { color: var(--color-moz-berry); }
.moz-light-gray { color: var(--color-moz-light-gray); }
.bg-moz-purple { background-color: var(--color-moz-purple); }
.bg-moz-berry { background-color: var(--color-moz-berry); }
.bg-moz-light-gray { background-color: var(--color-moz-light-gray); }

.theme-mozfest .color-primary { color: var(--color-moz-purple); }
.theme-mozfest .color-primary-washed { color: var(--color-moz-purple-washed); }
.theme-mozfest .color-accent { color: var(--color-moz-berry); }
.theme-mozfest .color-accent-washed { color: var(--color-moz-berry-washed); }
.theme-mozfest .color-bg { color: var(--color-moz-light-gray); }
.theme-mozfest .bg-color-primary { background-color: var(--color-moz-purple); }
.theme-mozfest .bg-color-primary-washed { background-color: var(--color-moz-purple-washed); }
.theme-mozfest .bg-color-accent { background-color: var(--color-moz-berry); }
.theme-mozfest .bg-color-accent-washed { background-color: var(--color-moz-berry-washed); }
.theme-mozfest .bg-color-bg { background-color: var(--color-moz-light-gray); }
</style>
