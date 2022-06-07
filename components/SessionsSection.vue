<template>
  <section class="text-left">
    <h2 v-if="index.title" class="text-2xl md:text-3xl mb-6">
      {{ index.title }}
    </h2>
    <NuxtContent :document="index" class="text-lg" />
    <div v-if="sessionsUpcoming.length && !index.isPast" class="my-8">
      <InfoBar
        v-if="calendarLink"
        :infoBarObject="{
          icon: '📅',
          link: {
            text: 'Subscribe to the Skill Sharing calendar to stay posted',
            href: calendarLink,
          },
        }"
      />
      <SessionCardList
        :title="titleUpcoming"
        :sessions="sessionsUpcoming"
        :compact="compact"
        :dir="index.dir"
      />
    </div>
    <div v-if="sessionsPast.length" class="my-8">
      <SessionCardList
        :title="titlePast"
        :sessions="sessionsPast"
        :compact="compact"
        :dir="index.dir"
      />
    </div>
  </section>
</template>
<script>
import { getSessionsUpcoming, getSessionsPast } from "~/util/session";

export default {
  props: {
    index: { type: Object, default: () => {} },
    sessions: { type: Array, default: () => [] },
    calendarLink: { type: String, default: undefined },
    compact: { type: Boolean, default: false },
    titleUpcoming: { type: String, default: "Upcoming" },
    titlePast: { type: String, default: "Previously" },
  },
  computed: {
    sessionsUpcoming() {
      return getSessionsUpcoming(this.sessions);
    },
    sessionsPast() {
      return getSessionsPast(this.sessions);
    },
  },
};
</script>
