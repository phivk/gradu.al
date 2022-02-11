<template>
  <span class="circle cursor-default" :style="styleObject">{{ initial }}</span>
</template>
<script>
export default {
  props: {
    character: { type: String, default: "1" },
    backgroundColor: { type: String, default: "#96CCFF" },
    textColor: { type: String, default: "#00449e" },
  },
  computed: {
    initial() {
      // ensure single character
      return this.character[0].toUpperCase();
    },
    styleObject() {
      return {
        "background-color": this.backgroundColor,
        color: this.textColor,
      };
    },
  },
};
</script>
<style scoped>
.circle {
  display: inline-block;
  width: 2em;
  height: 2em;
  line-height: 2em;
  text-align: center;
  border-radius: 50%;
}
.cursor-default {
  cursor: default;
}
</style>
