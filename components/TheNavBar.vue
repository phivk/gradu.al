<template>
  <nav>
    <div class="p-4 ph4-m ph5-l mw9 center flex items-center justify-between">
      <nuxt-link to="/" class="flex items-center no-underline">
        <logo class="w2-5" />
        <span class="ml-2 text-white f3 font-bold dn di-ns">gradual</span>
      </nuxt-link>
      <div v-if="showBackLink">
        <a 
          v-if="isBackLinkExternal"
          :href="backLinkTarget" 
          class="no-underline f4 fw4 text-white br-pill ph3 pv2 bg-animate hover-bg-white-20 cursor-pointer"
        >
          ← {{backLinkText}}
        </a>
        <nuxt-link 
          v-else
          :to="backLinkTarget" 
          class="no-underline f4 fw4 text-white br-pill ph3 pv2 bg-animate hover-bg-white-20 cursor-pointer"
        >
          ← {{backLinkText}}
        </nuxt-link>
      </div>
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
    backLinkTarget: {type: String, default: "/"},
  },
  computed: {
    showBackLink() {
      return this.$route.path !== '/'
    },
    isBackLinkExternal() {
      return this.backLinkTarget.includes('https://')
    },
  },
}
</script>