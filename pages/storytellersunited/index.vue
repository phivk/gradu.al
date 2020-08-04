<template>
  <div class="vh-100 white bg-gradient">
    <div class="tc pa4">
      <nuxt-link to="/">
        <logo class="w-50 mw4 mt3 mt4-ns mb4 mb5-ns" />
      </nuxt-link>

      <h1 class="mb5 f3">👋 Welcome to Storytellers United!</h1>
      <div class="mb5">
        <h2 class="mb3 f2">Ready to add your skills to the mix?</h2>
        <nuxt-link
          to="/storytellersunited/join"
          class="f4 link grow br3 ph3 pv2 mb2 dib white bg-dark-green"
        >
          Join this group
        </nuxt-link>
      </div>
      <div class="mb4 measure">
        <h3 class="mb3">
          Already joined & curious to see what others would like to learn and share?
        </h3>
        <nuxt-link
          to="/storytellersunited/map"
          class="f5 link grow br3 ph3 pv2 mb2 dib white bg-dark-green"
        >
          See group skills
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
  head() {
    return {
      title: "Storytellers United - Here to learn",
    };
  },
  components: {
    Logo,
  },
};
</script>

<style>
.bg-gradient {
  background: linear-gradient(237.35deg, #ffc700 9.93%, #ca3d00 76.63%);
}
</style>
