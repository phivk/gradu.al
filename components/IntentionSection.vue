<template>
  <section>
    <h2 class="text-3xl md:text-4xl font-bold mb3">
      Community learning intentions
    </h2>
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
          class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base md:text-lg rounded-md text-white bg-secondary hover:opacity-80"
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
          class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base md:text-lg rounded-md text-primary bg-white hover:bg-primary-washed"
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
          class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base md:text-lg font-medium rounded-md text-white bg-secondary hover:opacity-80"
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
        <GraphManual :nodes="nodes.nodes" :edges="edges.edges" />
      </template>
      <template v-slot:tab-1>
        <MostPopularSkillsSection v-if="skills" :skills="skills.skills">
        </MostPopularSkillsSection>
      </template>
    </NavigationTabs>
  </section>
</template>
<script>
export default {
  props: {
    nodes: { type: Object, default: () => {} },
    edges: { type: Object, default: () => {} },
    skills: { type: Object, default: () => {} },
    typeformIdLearn: { type: String, default: null, required: false },
    typeformIdShare: { type: String, default: null, required: false },
    typeformIdFull: { type: String, default: null, required: false },
  },
};
</script>
