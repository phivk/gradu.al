<template>
  <div class="bg-su-washed-orange min-vh-100">
    <nav class="bg-su-light-orange">
      <div class="pa3 ph4-m ph5-l mw9 center flex items-center justify-between">
        <nuxt-link to="/" class="flex items-center no-underline">
          <logo class="w2-5" />
          <span class="ml2 white f3 fw6 dn di-ns">gradual</span>
        </nuxt-link>
        <nuxt-link 
          v-if="$route.path.replace(/\//g,'') !== 'storytellersunited'"
          to="/storytellersunited/" 
          class="no-underline f4 fw4 white br-pill ph3 pv2 bg-animate hover-bg-white-20"
        >
          ← Storytellers United
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
  --color-su-washed-orange: #fdecce;
  --color-su-light-orange: #f4a726;
  --color-su-dark-orange: #ff5a17;
  --color-su-light-blue: #c3ecf7;
  --color-su-dark-blue: #02ace3;
}
.su-washed-orange { color: var(--color-su-washed-orange); }
.su-light-orange { color: var(--color-su-light-orange); }
.su-dark-orange { color: var(--color-su-dark-orange); }
.bg-su-light-orange { background-color: var(--color-su-light-orange); }
.bg-su-dark-orange { background-color: var(--color-su-dark-orange); }
.bg-su-washed-orange { background-color: var(--color-su-washed-orange); }
.bg-su-light-blue { background-color: var(--color-su-light-blue); }
.bg-su-dark-blue { background-color: var(--color-su-dark-blue); }
</style>
