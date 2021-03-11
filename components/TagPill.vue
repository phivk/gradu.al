<template>
  <span
    class="ba bw2 f5 bg-light-green dark-green ph2 pv1 dib br-pill"
    :class="borderColourClass"
    :style="styleObject"
  >
    <slot></slot>
  </span>
</template>
<script>
export default {
  props: {
    borderColour: { type: String, default: "transparent" },
    borderColourClass: { type: String, default: "" },
  },
  computed: {
    styleObject() {
      return { "border-color": this.borderColour };
    },
  },
};
</script>
