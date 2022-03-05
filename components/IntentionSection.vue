<template>
  <section>
    <h2 class="text-3xl md:text-4xl font-bold mb3">
      Community learning intentions
    </h2>
    <p class="text-lg lh-copy mb-8">
      Something here for you?
      <NuxtLink
        append
        to="join"
        class="text-secondary underline hover:no-underline"
      >
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
          v-if="skills"
          :skills="skills.skills"
          class="text-left"
        >
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
  },
};
</script>
