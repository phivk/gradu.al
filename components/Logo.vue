<template>
  <img v-if="withText" src="~/assets/logo-gradual-white-text.svg">
  <img v-else src="~/assets/logo-gradual-white.svg">
</template>
<script>
export default {
  props: {
    withText: {type: Boolean, default: false}
  }
}
</script>