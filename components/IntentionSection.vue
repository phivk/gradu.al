<template>
  <section
    v-if="nodes && edges && popular"
  >
    <h2 class="text-3xl md:text-4xl font-bold mb3">Community learning intentions</h2>
    <p class="text-lg lh-copy mb-8">
      Something here for you?
      <NuxtLink append to="join" class="color-accent underline hover:no-underline">
        Let us know!
      </NuxtLink>
    </p>
    <NavigationTabs 
      :names="['Graph', 'List']"
      :icons="['project-diagram', 'list']"
    >
      <template v-slot:tab-0>
        <GraphManualKey class="text-left" />
        <GraphManual :nodes="nodes.nodes" :edges="edges.edges" />
      </template>
      <template v-slot:tab-1>
        <MostPopularSkillsSection
          v-if="popular"
          :skills="popular.skills"
          class="text-left"
        >
          <p class="mb-4">Top skills of the moment</p>
        </MostPopularSkillsSection>
      </template>
    </NavigationTabs>
  </section>
</template>
<script>
import GraphManual from "~/components/GraphManual.vue";
import GraphManualKey from "~/components/GraphManualKey.vue";
import MostPopularSkillsSection from "~/components/MostPopularSkillsSection.vue";
import NavigationTabs from "~/components/NavigationTabs.vue";
export default {
  props: {
    nodes: { type: Object, default: () => {} },
    edges: { type: Object, default: () => {} },
    popular: { type: Object, default: () => {} },
  },
  components: {
    GraphManual,
    GraphManualKey,
    MostPopularSkillsSection,
    NavigationTabs,
  },
};
</script>
