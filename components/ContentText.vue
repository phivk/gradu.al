<template>
  <span>{{ text }}</span>
</template>
<script>
export default {
  props: {
    text: { type: String, default: "text", required: true },
  },
};
</script>
