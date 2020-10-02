<template>
  <div class="bg-su-washed-orange">
    <nav class="bg-su-dark-orange pa3">
      <nuxt-link to="/">
        <logo class="w3" />
      </nuxt-link>
    </nav>
    <div class="tc pa4">
      <img class="w4 mv4" src="https://storytellers.link/img/logo-storytellersunited-200px.png" alt="Storytellers United Logo">
      <div>
        <h1 class="measure center">
          Hi 👋 <br>
           Welcome to Storytellers United on Gradual!
        </h1>
        <p class="f4 measure center">This is a space to express intentions for things you’d like to learn and share with others in the community.</p>
      </div>
      <div class="mv5">
        <h2 class="mb3">Ready to start learning together?</h2>
        <nuxt-link
          to="/storytellersunited/join"
          class="f4 link grow br3 ph3 pv2 mb2 dib white bg-dark-green"
        >
          Join the group
        </nuxt-link>
      </div>
      <div class="mb4 measure center">
        <h3 class="mb3 f4">
          Already joined & curious to see what others would like to learn and share?
        </h3>
        <nuxt-link
          to="/storytellersunited/map"
          class="f4 dark-green"
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
:root {
  --color-su-washed-orange: #FDECCE;
  --color-su-light-orange: #F4A726;
  --color-su-dark-orange: #FF5A17;
  --color-su-light-blue: #C3ECF7;
  --color-su-dark-blue: #02ACE3;
}
.su-light-orange {     color:            var(--color-su-light-orange);}
.su-dark-orange {      color:            var(--color-su-dark-orange);}
.bg-su-light-orange {  background-color: var(--color-su-light-orange);}
.bg-su-dark-orange {   background-color: var(--color-su-dark-orange);}
.bg-su-washed-orange { background-color: var(--color-su-washed-orange);}
.bg-su-light-blue {    background-color: var(--color-su-light-blue);}
.bg-su-dark-blue {     background-color: var(--color-su-dark-blue);}
html { background-color: var(--color-su-washed-orange);}
</style>
