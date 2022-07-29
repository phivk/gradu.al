<template>
  <p class="mb-4">
    <span class="b text-green-700">●Skills</span> that
    <span class="b text-blue-700">●{{ memberTitlePlural }}</span> want to
    <span class="b text-yellow-700">↗︎learn</span> and
    <span class="b text-purple-700">↗︎share</span>
  </p>
</template>
<script>
export default {
  props: {
    memberTitlePlural: { type: String, default: "people" },
  },
};
</script>
