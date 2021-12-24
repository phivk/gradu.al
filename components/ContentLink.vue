<template>
  <a :href="href">{{text}}</a>
</template>
<script>
export default {
  props: {
    href: { type: String, default: "#", required: true },
    text: { type: String, default: "link text", required: true },
  },
};
</script>
