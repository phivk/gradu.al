<template>
  <div>
    <social-head title="CoEE - Here to learn" description="" />
    <TypeformEmbed :typeFormSrc="typeFormSrc" />
  </div>
</template>

<script>
import TypeformEmbed from "~/components/TypeformEmbed.vue";
import SocialHead from "~/components/SocialHead";
export default {
  head() {
    return {
      title: "CoEE - Here to learn",
    };
  },
  components: {
    TypeformEmbed,
    SocialHead,
  },
  data() {
    return {
      typeFormSrc: "https://form.typeform.com/to/dYFc9ZMd",
    };
  },
};
</script>
