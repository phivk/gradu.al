<template>
  <TypeformEmbed :typeFormSrc="typeFormSrc" />
</template>

<script>
import TypeformEmbed from "~/components/TypeformEmbed.vue";
export default {
  head() {
    return {
      title: "Contact | Gradual",
    };
  },
  components: {
    TypeformEmbed,
  },
  data() {
    return {
      typeFormSrc: "https://form.typeform.com/to/ylCq3p8E",
    };
  },
};
</script>
