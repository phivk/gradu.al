<template>
  <div>
    <social-head
      title="Storytellers United - Here to learn"
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
      title: "Storytellers United - Here to learn",
    };
  },
  components: {
    TypeFormEmbed,
    SocialHead
  },
  data() {
    return {
      typeFormSrc: "https://form.typeform.com/to/nqEQHQ",
    };
  },
};
</script>

