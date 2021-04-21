<template>
  <TypeFormEmbed :typeFormSrc="typeFormSrc" />
</template>

<script>
import TypeFormEmbed from "~/components/TypeFormEmbed.vue";
export default {
  head() {
    return {
      title: "Get a Demo | Gradual",
    };
  },
  components: {
    TypeFormEmbed,
  },
  data() {
    return {
      typeFormSrc: "https://form.typeform.com/to/RYlpjYHI",
    };
  },
};
</script>
