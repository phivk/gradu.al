<template>
  <div class="text-center">
    <SocialHead :title="`${indexPage.communityName} - Here to learn`" />
    <CTASection
      :logoSrc="indexPage.logoSrc"
      :communityName="indexPage.communityName"
      :ctaHeading="indexPage.ctaHeading"
      :ctaButtonText="indexPage.ctaButtonText"
      :subLink="indexPage.subLink"
    />
    <ProcessSection :indexPage="indexPage" />
    <SessionsSection
      :sessions="sessions"
      :calendarLink="indexPage.calendarLink"
    />
    <IntentionSection :nodes="nodes" :edges="edges" :popular="popular" />
  </div>
</template>
<script>
import SocialHead from "~/components/SocialHead.vue";
import CTASection from "~/components/CTASection.vue";
import ProcessSection from "~/components/ProcessSection.vue";
import SessionsSection from "~/components/SessionsSection.vue";
import IntentionSection from "~/components/IntentionSection.vue";

export default {
  components: {
    SocialHead,
    CTASection,
    ProcessSection,
    SessionsSection,
    IntentionSection,
  },
  props: {
    indexPage: { type: Object, default: () => {} },
    sessions: { type: Array, default: () => [] },
    nodes: { type: Object, default: () => {} },
    edges: { type: Object, default: () => {} },
    popular: { type: Object, default: () => {} },
  },
};
</script>