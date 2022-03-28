<template>
  <div>
    <div class="flex flex-row justify-between items-center mb-4">
      <h3 v-if="title" class="text-xl md:text-2xl mt-0">{{ title }}</h3>
      <AppLink
        v-if="compact && spillover"
        :to="dir"
        class="underline hover:no-underline flex-shrink-0"
      >
        Show all
        <span class="hidden sm:inline">({{ sessions.length }})</span>
      </AppLink>
    </div>
    <ul class="flex flex-wrap justify-start -mx-2">
      <li
        v-for="session in sessionsCompacted"
        :key="session.title"
        class="w-1/2 sm:w-1/3 md:w-1/4 max-w-lg p-2"
      >
        <SessionCard :session="session" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      compactMax: 4,
    };
  },
  props: {
    sessions: { type: Array, default: () => [] },
    compact: { type: Boolean, default: false },
    title: { type: String, default: undefined },
    dir: { type: String, default: "#" },
  },
  computed: {
    sessionsFeaturedFirst() {
      return this.sessions.sort((a, b) => {
        return a.featured ? true : false - b.featured ? true : false;
      });
    },
    sessionsCompacted() {
      return this.compact
        ? this.sessionsFeaturedFirst.slice(0, this.compactMax)
        : this.sessionsFeaturedFirst;
    },
    spillover() {
      return this.sessions.length > this.compactMax;
    },
  },
};
</script>
