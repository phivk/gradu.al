<template>
  <nav>
    <div class="p-4 ph4-m ph5-l mw9 mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center no-underline">
        <logo :isBlack="logoIsBlack" class="w2-5" />
        <span class="ml-2 text-on-primary f3 font-bold dn di-ns">gradual</span>
      </NuxtLink>
      <AppLink
        v-if="showHowtoLink"
        to="/howto"
        class="no-underline f4 fw4 text-on-primary br-pill ph3 pv2 bg-animate hover-bg-white-20 cursor-pointer"
      >
        how to
      </AppLink>
      <div v-if="showBackLink">
        <AppLink
          :to="backLinkTarget"
          class="no-underline f4 fw4 text-on-primary br-pill ph3 pv2 bg-animate hover-bg-white-20 cursor-pointer"
        >
          ← {{ backLinkText }}
        </AppLink>
      </div>
    </div>
  </nav>
</template>
<script>
import Logo from "~/components/Logo.vue";
import AppLink from "~/components/AppLink.vue";
export default {
  components: {
    Logo,
    AppLink,
  },
  props: {
    backLinkText: { type: String, default: "back" },
    backLinkTarget: { type: String, default: "/" },
    logoIsBlack: { type: Boolean, default: false },
  },
  computed: {
    showBackLink() {
      return this.$route.path !== "/";
    },
    showHowtoLink() {
      return this.$route.path !== "/howto";
    },
  },
};
</script>
