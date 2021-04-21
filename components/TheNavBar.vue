<template>
  <nav>
    <div class="pa3 ph4-m ph5-l mw9 center flex items-center justify-between">
      <nuxt-link to="/" class="flex items-center no-underline">
        <logo class="w2-5" />
        <span class="ml2 white f3 font-bold dn di-ns">gradual</span>
      </nuxt-link>
      <nuxt-link 
        v-if="showBackLink"
        :to="backLinkPath" 
        class="no-underline f4 fw4 white br-pill ph3 pv2 bg-animate hover-bg-white-20"
      >
        ← {{backLinkText}}
      </nuxt-link>
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
    backLinkText: {type: String, default: ""},
    backLinkSlug: {type: String, default: ""},
  },
  computed: {
    backLinkPath() {
      return `/${this.backLinkSlug}/`
    },
    showBackLink() {
      return this.$route.path.replace(/\//g,'') !== this.backLinkSlug
    },
  },
}
</script>