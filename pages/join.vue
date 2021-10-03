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
  components: {
    TypeFormEmbed,
    SocialHead,
  },
  data() {
    return {
      typeFormSrc: "",
    };
  },
};
</script>
