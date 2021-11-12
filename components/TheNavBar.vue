<template>
  <nav>
    <div class="p-4 ph4-m ph5-l mw9 mx-auto flex justify-between">
      <NuxtLink to="/" class="flex items-center no-underline">
        <logo class="w2-5" />
        <span class="ml-2 text-white f3 font-bold dn di-ns">gradual</span>
      </NuxtLink>
      <div class="flex items-center justify-end">
        <a href="/admin" class="no-underline f4 fw4 text-white br-pill ph3 pv2 bg-animate hover-bg-white-20 cursor-pointer">CMS</a>
        <AppLink v-if="howtoLink" :to="howtoLink" class="no-underline f4 fw4 text-white br-pill ph3 pv2 bg-animate hover-bg-white-20 cursor-pointer">
          how to
        </AppLink>
        <div v-if="showBackLink">
          <AppLink :to="backLinkTarget" class="no-underline f4 fw4 text-white br-pill ph3 pv2 bg-animate hover-bg-white-20 cursor-pointer">
            ← {{backLinkText}}
          </AppLink>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import themeConfig from "~/theme.config.js";
import Logo from "~/components/Logo.vue";
import AppLink from "~/components/AppLink.vue";
export default {
  components: {
    Logo,
    AppLink,
  },
  props: {
    backLinkText: {type: String, default: "back"},
    backLinkTarget: {type: String, default: "/"},
  },
  data: () => {
    return {
      howtoLink: themeConfig.howtoLink
    }
  },
  computed: {
    showBackLink() {
      return this.$route.path !== '/'
    },
  },
}
</script>