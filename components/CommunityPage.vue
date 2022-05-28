<template>
  <div class="text-center max-w-7xl mx-auto">
    <SocialHead
      :title="
        indexPage.pageTitle || `${indexPage.communityName} · Here to learn`
      "
    />
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
      :ctaButtonPrimary="indexPage.ctaButtonPrimary"
      :ctaButtonSecondary="indexPage.ctaButtonSecondary"
      :subLink="indexPage.subLink"
    />
    <IndexSection :indexPage="indexPage" />
    <InfoBar
      v-for="(infoBar, index) in indexPage.infoBars"
      :key="index"
      :infoBarObject="infoBar"
      class="mx-auto"
    />
    <IntentionSection
      v-if="nodes && edges && skills"
      :nodes="nodes"
      :edges="edges"
      :skills="skills"
      :typeformIdLearn="indexPage.typeformIdLearn"
      :typeformIdShare="indexPage.typeformIdShare"
      :typeformIdFull="indexPage.typeformIdFull"
      class="full-width px-2 sm:px-4 lg:px-8"
    />
    <div v-for="season in seasons">
      <SessionsSection
        v-if="sessionsPerSeason[season].length"
        :sessions="sessionsPerSeason[season]"
        :calendarLink="indexPage.calendarLink"
        :index="sessionsIndexPerSeason[season]"
        :compact="sessionsIndexPerSeason[season].isPast"
      />
    </div>
    <AmbassadorsSection
      v-if="ambassadors.length"
      :ambassadors="ambassadors"
      :ambassadorsIndex="ambassadorsIndex"
    />
  </div>
</template>
<script>
export default {
  props: {
    indexPage: { type: Object, default: () => {} },
    sessions: { type: Array, default: () => [] },
    sessionsIndexes: { type: Array, default: () => {} },
    ambassadors: { type: Array, default: () => [] },
    ambassadorsIndex: { type: Object, default: () => {} },
    nodes: { type: Object, default: () => {} },
    edges: { type: Object, default: () => {} },
    skills: { type: Object, default: () => {} },
  },
  computed: {
    sessionsPerSeason() {
      // split sessions per season based on content sub dir
      return this.sessions.reduce(function (prev, cur) {
        if (!prev[cur["dir"]]) {
          prev[cur["dir"]] = [];
        }
        prev[cur["dir"]].push(cur);
        return prev;
      }, {});
    },
    sessionsIndexPerSeason() {
      // split sessionsIndexes per season based on content sub dir
      return this.sessionsIndexes.reduce(function (prev, cur) {
        if (!prev[cur["dir"]]) {
          prev[cur["dir"]] = cur;
        }
        return prev;
      }, {});
    },
    seasons() {
      // return dir name for seasons that have sessions
      return Object.keys(this.sessionsPerSeason)
    },
  },
};
</script>
