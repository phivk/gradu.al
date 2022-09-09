<template>
  <div>
    <p class="text-2xl" v-html="introduction"></p>
    <p v-if="followup" class="text-xl opacity-70" v-html="followup"></p>
  </div>
</template>
<script>
export default {
  props: {
    introduction: String,
    followup: String,
  },
};
</script>
