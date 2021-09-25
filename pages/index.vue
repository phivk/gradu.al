<template>
  <div class="text-center">
    <social-head title="MozFest - Here to learn" />
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
  layout: "mozFest",
  head() {
    return {
      title: "MozFest - Here to learn",
    };
  },
  components: {
    SocialHead,
    CTASection,
    ProcessSection,
    SessionsSection,
    IntentionSection,
  },
  async asyncData({ $content }) {
    const sessions = await $content("sessions")
      .sortBy("dateTime", "asc")
      .fetch();

    const indexPage = await $content("index").fetch();

    let nodes, edges, popular;

    try {
      nodes = await $content("data", "nodes").fetch();
      edges = await $content("data", "edges").fetch();
      popular = await $content("data", "popular").fetch();
    } catch (error) {
      console.log(error);
      console.log("nodes and edges failed to load");
    }

    return { sessions, indexPage, nodes, edges, popular };
  },
};
</script>
