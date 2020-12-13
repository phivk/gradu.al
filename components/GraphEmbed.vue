<template>
  <div class="graph-container mb4" 
    @click="graphClicked = true"
    @mouseleave="graphClicked = false"
  >
    <iframe
      :class="{clicked: graphClicked}"
      class="br3"
      src="https://graphcommons.com/graphs/762414fc-f7f9-40aa-86b8-10f8686f10e0/embed?topbar=false"
      frameborder="0"
      style="overflow:hidden;border:1px solid #DDDDDD;width:1px;min-width:100%;height:600px;min-height:600px;"
      width="100%"
      height="600"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script>
import ProfilePic from "~/components/ProfilePic.vue";
export default {
  data() {
    return {
      graphClicked: false,
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
