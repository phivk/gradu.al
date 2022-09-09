<template>
  <div>
    <p class="text-lg sm:text-xl md:text-2xl" v-html="introduction"></p>
    <p
      v-if="followup"
      class="text-base sm:text-lg md:text-xl opacity-70"
      v-html="followup"
    ></p>
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
