<template>
  <CircleCharacter 
    :character="initial"
    :borderColor="borderColor"
    :backgroundColor="backgroundColor"
    :title="profileName"
  />
</template>
<script>
import CircleCharacter from "~/components/CircleCharacter.vue";
export default {
  components: {
    CircleCharacter,
  },
  props: {
    profileName: { type: String, default: "@User Name" },
    borderColor: { type: String, default: "transparent" },
    backgroundColor: { type: String, default: "#96CCFF" },
  },
  computed: {
    initial() {
      return this.profileName
        .replace('@', '')[0]
        .toUpperCase();
    },
  }
};
</script>
