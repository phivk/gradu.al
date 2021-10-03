<template>
  <section class="mb-16">
    <div v-if="logoSrc" class="my-6">
      <img class="dib w4 w5-ns" :src="logoSrc" :alt="`${communityName} Logo`" />
    </div>
    <h1 v-if="ctaHeading" class="text-4xl md:text-5xl mb-6">
      {{ ctaHeading }}
    </h1>
    <NuxtLink
      v-if="ctaButtonText"
      append
      to="join"
      class="inline-block mb-8 text-3xl rounded px-4 py-2 no-underline grow shadow-hover white bg-color-accent"
    >
      {{ ctaButtonText }}
    </NuxtLink>
    <div v-if="subLink" class="block">
      <a
        :href="subLink.href"
        class="color-accent underline hover:no-underline"
        target="_blank"
        >{{ subLink.text }}</a
      >
    </div>
  </section>
</template>
<script>
export default {
  props: {
    logoSrc: { type: String, default: "" },
    communityName: { type: String, default: "" },
    ctaHeading: { type: String, default: "" },
    ctaButtonText: { type: String, default: "" },
    subLink: { type: Object, default: () => {} },
  },
};
</script>
