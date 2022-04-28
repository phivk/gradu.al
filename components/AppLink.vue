<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>
  <NuxtLink v-else v-bind="$attrs" :to="to" :append="append">
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    to: {
      type: String,
      required: true,
      default: null,
    },
    append: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    isExternalLink() {
      return typeof this.to === "string" && this.to.startsWith("http");
    },
  },
};
</script>
