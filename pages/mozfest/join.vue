<template>
  <TypeFormEmbed :typeFormSrc="typeFormSrc" />
</template>

<script>
import TypeFormEmbed from "~/components/TypeFormEmbed.vue";
export default {
  head() {
    return {
      title: "MozFest - Here to learn",
    };
  },
  components: {
    TypeFormEmbed,
  },
  data() {
    return {
      typeFormSrc: "https://form.typeform.com/to/LOvcS47Y",
    };
  },
};
</script>
