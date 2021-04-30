<template>
  <div class="graph-container mb-8" 
    @click="graphClicked = true"
    @mouseleave="graphClicked = false"
  >
    <iframe
      :class="{clicked: graphClicked}"
      class="br3"
      :src="graphCommonsSrc"
      frameborder="0"
      style="overflow:hidden;border:1px solid #DDDDDD;width:1px;min-width:100%;height:600px;min-height:600px;"
      width="100%"
      height="600"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      graphClicked: false,
    }
  },
  props: {
    graphCommonsSrc: { type: String, default: "" },
  },
  watch: {
    graphClicked(newValue) {
      if (newValue) {
        document.getElementsByTagName('html')[0].classList.add('overflow-y-hidden')
      } else {
        document.getElementsByTagName('html')[0].classList.remove('overflow-y-hidden')
      }
    }
  },
};
</script>
<style scoped>
/*
 * disable zooming on embedded iframe graph 
 * inspired by https://codepen.io/status201/pen/wKowKz
 */
.graph-container iframe{
  pointer-events: none;
}
.graph-container iframe.clicked{
  pointer-events: auto;
  border-color: black !important;
}
</style>
