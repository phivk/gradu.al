<template>
  <section class="mb-16 mx-auto">
    <NuxtContent :document="indexPage" class="max-w-3xl mx-auto text-lg" />
  </section>
</template>
<script>
export default {
  props: {
    indexPage: { type: Object, default: () => {} },
  },
};
</script>
