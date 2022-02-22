<template>
  <div class="text-center mw9 mx-auto">
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
    <div v-for="season in seasons">
      <SessionsSection
        v-if="sessionsPerSeason[season].length"
        :sessions="sessionsPerSeason[season]"
        :calendarLink="indexPage.calendarLink"
        :index="sessionsIndexPerSeason[season]"
        :compact="sessionsIndexPerSeason[season].isPast"
        :pastTitle="sessionsIndexPerSeason[season].title"
      />
    </div>
    <IntentionSection
      v-if="nodes && edges && popular"
      :nodes="nodes"
      :edges="edges"
      :popular="popular"
    />
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
    popular: { type: Object, default: () => {} },
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
      // expects sessionsIndexes to already be ordered on sortOrder
      return this.sessionsIndexes.reduce(function (prev, cur) {
        prev.push(cur.dir);
        return prev;
      }, []);
    },
  },
};
</script>
