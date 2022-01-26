<template>
  <TypeformEmbed :typeFormSrc="typeFormSrc" />
</template>

<script>
import TypeformEmbed from "~/components/TypeformEmbed.vue";
export default {
  head() {
    return {
      title: "Get a Demo | Gradual",
    };
  },
  components: {
    TypeformEmbed,
  },
  data() {
    return {
      typeFormSrc: "https://form.typeform.com/to/RYlpjYHI",
    };
  },
};
</script>
