<template>
  <div>
    <social-head
      title="Propose a session | Storytellers United"
      description=""
    />
    <TypeFormEmbed
      :typeFormSrc="typeFormSrc"
    />
  </div>
</template>

<script>
import TypeFormEmbed from "~/components/TypeFormEmbed.vue";
import SocialHead from "~/components/SocialHead.vue";
export default {
  head() {
    return {
      title: "Propose a session | Storytellers United",
    };
  },
  components: {
    TypeFormEmbed,
    SocialHead
  },
  data() {
    return {
      typeFormSrc: "https://form.typeform.com/to/B88bQ5hJ",
    };
  },
};
</script>

