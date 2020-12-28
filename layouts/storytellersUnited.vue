<template>
  <div>
    <nav class="bg-su-light-orange">
      <div class="pa3 ph4-m ph5-l mw9 center flex items-center justify-between">
        <nuxt-link to="/" class="flex items-center no-underline">
          <logo class="w2-5" />
          <span class="ml2 white f3 fw6">gradual</span>
        </nuxt-link>
        <nuxt-link 
          v-if="$route.path !== '/storytellersunited/'"
          to="/storytellersunited/" 
          class="no-underline f3 fw4 white br-pill ph3 pv2 bg-animate hover-bg-white-20"
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
:root {
  --color-su-washed-orange: #fdecce;
  --color-su-light-orange: #f4a726;
  --color-su-dark-orange: #ff5a17;
  --color-su-light-blue: #c3ecf7;
  --color-su-dark-blue: #02ace3;
}
.su-washed-orange {
  color: var(--color-su-washed-orange);
}
.su-light-orange {
  color: var(--color-su-light-orange);
}
.su-dark-orange {
  color: var(--color-su-dark-orange);
}
.bg-su-light-orange {
  background-color: var(--color-su-light-orange);
}
.bg-su-dark-orange {
  background-color: var(--color-su-dark-orange);
}
.bg-su-washed-orange {
  background-color: var(--color-su-washed-orange);
}
.bg-su-light-blue {
  background-color: var(--color-su-light-blue);
}
.bg-su-dark-blue {
  background-color: var(--color-su-dark-blue);
}
html {
  background-color: var(--color-su-washed-orange);
}
.hover-no-underline:hover {
  text-decoration: none;
}
.ml-1 {
  margin-left: -0.25rem;
}
.ml-2 {
  margin-left: -0.5rem;
}
.w2-5 {
  width: 3rem;
}
</style>
