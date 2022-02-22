<template>
  <section class="mb-16 mx-auto">
    <NuxtContent :document="indexPage" class="max-w-2xl mx-auto text-lg" />
    <ProcessCardList />
    <SessionFormatList :sessionTypes="indexPage.sessionTypes" />
    <InfoBar
      v-for="(infoBar, index) in indexPage.infoBars"
      :key="index"
      :infoBarObject="infoBar"
    />
  </section>
</template>
<script>
export default {
  props: {
    indexPage: { type: Object, default: () => {} },
  },
};
</script>
