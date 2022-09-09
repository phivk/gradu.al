<template>
  <section>
    <h2 class="text-3xl md:text-4xl font-bold mb3">Community interests</h2>
    <p class="text-lg lh-copy mb-6">
      Into one of the ideas below? Go ahead and add your name to the topics of
      your choice.
    </p>
    <div v-if="typeformIdLearn || typeformIdShare" class="mb-6">
      <div class="inline-flex rounded-md shadow m-1">
        <button
          :data-tf-popup="typeformIdLearn"
          data-tf-size="80"
          data-tf-iframe-props="title=High five an existing topic to learn"
          data-tf-medium="snippet"
          class="button-secondary"
        >
          I'd like to <span class="font-black mx-1">learn</span> about...
        </button>
      </div>
      <div class="inline-flex rounded-md shadow m-1">
        <button
          :data-tf-popup="typeformIdShare"
          data-tf-size="80"
          data-tf-iframe-props="title=High five an existing topic to share"
          data-tf-medium="snippet"
          class="button-secondary-inverse"
        >
          I'd like to <span class="font-black mx-1">share</span> about...
        </button>
      </div>
      <script src="//embed.typeform.com/next/embed.js"></script>
    </div>
    <div v-else>
      <div class="inline-flex rounded-md shadow m-1">
        <button
          :data-tf-popup="typeformIdFull"
          data-tf-size="80"
          data-tf-iframe-props="title=What you are most interested in?"
          data-tf-medium="snippet"
          class="button-secondary"
        >
          Let's do this
        </button>
        <script src="//embed.typeform.com/next/embed.js"></script>
      </div>
    </div>
    <NavigationTabs
      :names="['Graph', 'List']"
      :icons="['project-diagram', 'list']"
    >
      <template v-slot:tab-0>
        <GraphManualKey class="text-left" />
        <GraphManual :nodes="nodes" :edges="edges" />
      </template>
      <template v-slot:tab-1>
        <MostPopularSkillsSection :skills="skills"> </MostPopularSkillsSection>
      </template>
    </NavigationTabs>
  </section>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: {
    typeformIdLearn: { type: String, default: null, required: false },
    typeformIdShare: { type: String, default: null, required: false },
    typeformIdFull: { type: String, default: null, required: false },
  },
  computed: {
    nodes() {
      // turn Vuex reactive objects into plain JS objects,
      // by cloning each object (item) in the array
      return [...this.$store.state.supabase.nodes].map((item) => ({ ...item }));
    },
    edges() {
      // turn Vuex reactive objects into plain JS objects,
      // by cloning each object (item) in the array
      return [...this.$store.state.supabase.edges].map((item) => ({ ...item }));
    },
    skills() {
      return this.nodes
        .filter((item) => item["_cssClass"] === "Skill")
        .sort((a, b) => {
          const aTotal =
            (a.learnerCount ? a.learnerCount : 0) +
            (a.sharerCount ? a.sharerCount : 0);
          const bTotal =
            (b.learnerCount ? b.learnerCount : 0) +
            (b.sharerCount ? b.sharerCount : 0);
          if (aTotal > bTotal) {
            return -1;
          } else if (aTotal < bTotal) {
            return 1;
          } else {
            return 0;
          }
        });
    },
  },
};
</script>
