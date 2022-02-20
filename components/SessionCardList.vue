<template>
  <ul class="flex flex-wrap justify-start -mx-2">
    <li
      v-for="session in sessionsCompacted"
      :key="session.title"
      class="w-1/2 sm:w-1/3 md:w-1/4 max-w-lg p-2"
    >
      <SessionCard :session="session" />
    </li>
  </ul>
</template>
<script>
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
