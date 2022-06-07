<template>
  <CircleCharacter
    :character="initial"
    :backgroundColor="backgroundColor"
    :title="profileName"
    class="font-light"
  />
</template>
<script>
export default {
  props: {
    profileName: { type: String, default: "@User Name" },
    backgroundColor: { type: String, default: "#96CCFF" },
  },
  computed: {
    initial() {
      return this.profileName ? this.profileName.replace("@", "")[0].toUpperCase() : "U"
    },
  },
};
</script>
