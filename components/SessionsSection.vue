<template>
  <section class="text-left">
    <div v-if="sessionsUpcoming.length" class="my-8">
      <h3 class="text-xl md:text-2xl mb-4">{{ upcomingTitle }}</h3>
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
      <SessionCardList :sessions="sessionsUpcoming" :compact="compact" />
    </div>
    <div v-if="sessionsPast.length" class="my-8">
      <div class="flex flex-row justify-between items-center mb-4">
        <h3 class="text-xl md:text-2xl mt-0">{{ pastTitle }}</h3>
        <AppLink
          v-if="compact"
          :to="index.dir"
          class="underline hover:no-underline"
        >
          Show all ({{ sessions.length }})
        </AppLink>
      </div>
      <SessionCardList :sessions="sessionsPast" :compact="compact" />
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
    upcomingTitle: { type: String, default: "Upcoming Sessions" },
    pastTitle: { type: String, default: "Things we've learned so far" },
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
