<template>
  <div class="theme-coee text-white">
    <div class="bg-color-bg min-vh-100">
      <TheNavBar
        class="bg-color-primary"
        backLinkText="CoEE"
        backLinkSlug="coee"
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
  --color-coee-red: #CC0914;
  --color-coee-red-washed: #CC091455;
  --color-coee-green: #137752;
  --color-coee-green-washed: #13775255;
  --color-coee-black: #000;
  --color-coee-white: #fff;
}

.theme-coee .color-primary { color: var(--color-coee-red); }
.theme-coee .color-primary-washed { color: var(--color-coee-red-washed); }
.theme-coee .color-accent { color: var(--color-coee-red); }
.theme-coee .color-accent-washed { color: var(--color-coee-red-washed); }
.theme-coee .color-bg { color: var(--color-coee-black); }
.theme-coee .bg-color-primary { background-color: var(--color-coee-black); }
.theme-coee .bg-color-primary-washed { background-color: var(--color-coee-red-washed); }
.theme-coee .bg-color-accent { background-color: var(--color-coee-red); }
.theme-coee .bg-color-accent-washed { background-color: var(--color-coee-red-washed); }
.theme-coee .bg-color-bg { background-color: var(--color-coee-black); }
</style>
