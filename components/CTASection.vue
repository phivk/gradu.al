<template>
  <section class="mb-16">
    <div v-if="logoSrc" class="my-6">
      <img class="dib w4 w5-ns" :src="logoSrc" :alt="`${communityName} Logo`" />
    </div>
    <h1 v-if="ctaHeading" class="text-4xl md:text-5xl mb-6">
      {{ ctaHeading }}
    </h1>
    <div class="flex justify-center my-6">
      <div v-if="ctaButtonPrimary" class="inline-flex rounded-md shadow">
        <AppLink :to="ctaButtonPrimary.href" class="button-secondary">
          {{ ctaButtonPrimary.text }}
        </AppLink>
      </div>
      <div v-if="ctaButtonSecondary" class="ml-3 inline-flex rounded-md shadow">
        <AppLink :to="ctaButtonSecondary.href" class="button-secondary-inverse">
          {{ ctaButtonSecondary.text }}
        </AppLink>
      </div>
    </div>
    <div v-if="subLink" class="block">
      <a
        :href="subLink.href"
        class="text-text underline hover:no-underline"
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
    ctaButtonPrimary: {
      type: Object,
      required: true,
      default: () => ({ text: "Take part", href: "/take-part" }),
    },
    ctaButtonSecondary: {
      type: Object,
      required: false,
      default: null,
    },
    subLink: { type: Object, default: () => {} },
  },
};
</script>
