<template>
  <div>
    <SocialHead title="MozFest - Here to learn" description="" />
    <TypeFormEmbed :typeFormSrc="typeFormSrc" />
  </div>
</template>

<script>
import TypeFormEmbed from "~/components/TypeFormEmbed.vue";
import SocialHead from "~/components/SocialHead";
export default {
  head() {
    return {
      title: "CoEE - Here to learn",
    };
  },
  components: {
    TypeFormEmbed,
    SocialHead,
  },
  data() {
    return {
      typeFormSrc: "https://form.typeform.com/to/fFQLUWym",
    };
  },
};
</script>
