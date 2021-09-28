<template>
  <span
    class="border-4 f5 bg-light-green dark-green px-2 py-1 inline-block rounded-full"
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
