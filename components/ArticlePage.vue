<template>
  <div class="max-w-3xl m-auto mt-16">
    <SocialHead :title="`${page.title}`" />
    <nuxt-content :document="page" />
  </div>
</template>
<script>
export default {
  props: {
    page: { type: Object, default: () => {} },
  },
};
</script>
