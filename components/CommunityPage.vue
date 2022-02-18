<template>
  <div class="text-center">
    <SocialHead :title="`${indexPage.communityName} - Here to learn`" />
    <h2 v-if="indexPage.pageHeading" class="text-3xl md:text-4xl mb-6">
      {{ indexPage.pageHeading }}
    </h2>
    <h3 v-if="indexPage.pageSubHeading" class="text-xl md:text-2xl font-normal">
      {{ indexPage.pageSubHeading }}
    </h3>
    <CTASection
      :logoSrc="indexPage.logoSrc"
      :communityName="indexPage.communityName"
      :ctaHeading="indexPage.ctaHeading"
      :ctaButtonText="indexPage.ctaButtonText"
      :subLink="indexPage.subLink"
    />
    <ProcessSection :indexPage="indexPage" />
    <SessionsSection
      v-if="sessions.length"
      :sessions="sessions"
      :calendarLink="indexPage.calendarLink"
    />
    <AmbassadorsSection
      v-if="ambassadors.length"
      :ambassadors="ambassadors"
      :ambassadorsIndex="ambassadorsIndex"
    />
    <IntentionSection
      v-if="nodes && edges && popular"
      :nodes="nodes"
      :edges="edges"
      :popular="popular"
    />
  </div>
</template>
<script>
import SocialHead from "~/components/SocialHead.vue";
import CTASection from "~/components/CTASection.vue";
import ProcessSection from "~/components/ProcessSection.vue";
import SessionsSection from "~/components/SessionsSection.vue";
import AmbassadorsSection from "~/components/AmbassadorsSection.vue";
import IntentionSection from "~/components/IntentionSection.vue";
export default {
  components: {
    SocialHead,
    CTASection,
    ProcessSection,
    SessionsSection,
    AmbassadorsSection,
    IntentionSection,
  },
  props: {
    indexPage: { type: Object, default: () => {} },
    sessions: { type: Array, default: () => [] },
    ambassadors: { type: Array, default: () => [] },
    ambassadorsIndex: { type: Object, default: () => {} },
    nodes: { type: Object, default: () => {} },
    edges: { type: Object, default: () => {} },
    popular: { type: Object, default: () => {} },
  },
};
</script>
