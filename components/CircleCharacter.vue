<template>
  <span 
    class="circle cursor-default"
    :style="styleObject"
  >{{initial}}</span>
</template>
<script>
export default {
  props: {
    character: { type: String, default: "1" },
    borderColor: { type: String, default: "transparent" },
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
        'box-shadow': '0 0 0 0.3rem ' + this.borderColor,
        'background-color': this.backgroundColor,
        'color': this.textColor,
      } 
    },
  }
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