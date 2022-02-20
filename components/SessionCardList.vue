<template>
  <ul class="flex flex-wrap justify-start">
    <li
      v-for="session in sessionsCompacted"
      :key="session.title"
      class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-lg p-4"
    >
      <SessionCard :session="session" />
    </li>
  </ul>
</template>
<script>
import SessionCard from "~/components/SessionCard.vue";

export default {
  data() {
    return {
      compactSize: 4,
    };
  },
  props: {
    sessions: { type: Array, default: () => [] },
    compact: { type: Boolean, default: false },
  },
  components: { SessionCard },
  computed: {
    sessionsFeaturedFirst() {
      return this.sessions.sort((a, b) => {
        return a.featured ? true : false - b.featured ? true : false;
      });
    },
    sessionsCompacted() {
      return this.compact
        ? this.sessionsFeaturedFirst.slice(0, this.compactSize)
        : this.sessionsFeaturedFirst;
    },
  },
};
</script>
