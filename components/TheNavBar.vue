<template>
  <nav>
    <div class="p-4 ph4-m ph5-l mw9 mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center no-underline">
        <logo class="w2-5" />
        <span class="ml-2 text-white text-2xl font-bold dn di-ns">gradual</span>
      </NuxtLink>
      <NuxtLink 
        v-if="showBackLink"
        to="/" 
        class="no-underline text-lg text-white br-pill px-4 py-2 bg-animate hover-bg-white-20 cursor-pointer"
      >
        ← {{backLinkText}}
      </NuxtLink>
    </div>
  </nav>
</template>
<script>
import Logo from "~/components/Logo.vue";
export default {
  components: {
    Logo
  },
  props: {
    backLinkText: {type: String, default: "back"},
  },
  computed: {
    showBackLink() {
      return this.$route.path !== '/'
    },
  },
}
</script>