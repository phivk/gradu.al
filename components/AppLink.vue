<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>
  <nuxt-link v-else v-bind="$attrs" :to="to">
    <slot />
  </nuxt-link>
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
  },

  computed: {
    isExternalLink() {
      return typeof this.to === "string" && this.to.startsWith("http");
    },
  },
};
</script>
