<template>
  <img :src="srcPath">
</template>
<script>
export default {
  props: {
    isBlack: {type: Boolean, default: false}
  },
  computed: {
    srcPath() {
      return this.isBlack 
        ? require("~/assets/logo-gradual-black.png")
        : require("~/assets/logo-gradual-white.png")
    },
  }
}
</script>