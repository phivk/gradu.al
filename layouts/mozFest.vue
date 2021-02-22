<template>
  <div>
    <nav class="bg-moz-purple">
      <div class="pa3 ph4-m ph5-l mw9 center flex items-center justify-between">
        <nuxt-link to="/" class="flex items-center no-underline">
          <logo class="w2-5" />
          <span class="ml2 white f3 fw6 dn di-ns">gradual</span>
        </nuxt-link>
        <nuxt-link 
          v-if="$route.path.replace(/\//g,'') !== 'mozfest'"
          to="/mozfest/" 
          class="no-underline f4 fw4 white br-pill ph3 pv2 bg-animate hover-bg-white-20"
        >
          ← MozFest
        </nuxt-link>
      </div>
    </nav>
    <nuxt />
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
export default {
  components: {
    Logo,
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
<style scoped>
html { background-color: var(--color-moz-light-gray); }
</style>
