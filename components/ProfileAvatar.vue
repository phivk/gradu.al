<template>
  <span 
    class="circle shadow-outline cursor-default f5 fw3 white"
    :style="styleObject"
    :title="profileName"
  >{{initial}}</span>
</template>
<script>
export default {
  props: {
    profileName: { type: String, default: "User Name" },
    borderColor: { type: String, default: "transparent" },
    backgroundColor: { type: String, default: "orange" },
  },
  computed: {
    initial() {
      return this.profileName
        .replace('@', '')[0]
        .toUpperCase();
    },
    styleObject() {
      return {
        'box-shadow': '0 0 0 0.3rem ' + this.borderColor,
        'background-color': this.backgroundColor,
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
.shadow-outline {
  box-shadow: 0 0 0 0.5rem yellow;
  background-color: 
}
.cursor-default {
  cursor: default;
}

</style>