<template>
  <TypeFormEmbed :typeFormSrc="typeFormSrc" />
</template>

<script>
import TypeFormEmbed from "~/components/TypeFormEmbed.vue";
export default {
  head() {
    return {
      title: "Contact | Gradual",
    };
  },
  components: {
    TypeFormEmbed,
  },
  data() {
    return {
      typeFormSrc: "https://form.typeform.com/to/ylCq3p8E",
    };
  },
};
</script>
