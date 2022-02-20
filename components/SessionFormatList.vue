<template>
  <p class="max-w-prose mx-auto mb-8 lh-copy">
    <strong>Sessions take any format</strong> that best fits the facilitator and
    the skill they are sharing, for example
    <TagPill v-for="sessionType in sessionTypes" :key="sessionType" class="m-1">
      {{ sessionType }}
    </TagPill>
  </p>
</template>
<script>
import TagPill from "~/components/TagPill.vue";

export default {
  props: {
    sessionTypes: { type: Array, default: () => [] },
  },
  components: { TagPill },
};
</script>
