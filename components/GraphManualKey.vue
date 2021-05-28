<template>
  <p class="mb-4">
    <span class="b dark-green">●Skills</span> that 
    <span class="b dark-blue">●{{ memberTitlePlural }}</span> want to 
    <span class="b orange">↗︎learn</span> and
    <span class="b purple">↗︎share</span>
  </p>
</template>
<script>
export default {
  props: {
    memberTitlePlural: { type: String, default: "people" },
  },
};
</script>
