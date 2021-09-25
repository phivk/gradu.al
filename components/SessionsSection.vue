<template>
  <section v-if="sessions.length">
    <div v-if="sessionsUpcoming.length" class="my-8">
      <h2 class="text-2xl md:text-3xl mb-4">Upcoming Sessions</h2>
      <InfoBar v-if="calendarLink" :infoBarObject="{
        'icon': '📅',
        'link': {
          'text': 'Subscribe to the Skill Sharing calendar to stay posted',
          'href': calendarLink
        }
      }"/>
      <SessionCardList :sessions="sessionsUpcoming"/>
    </div>
    <div v-if="sessionsUpcoming.length" class="my-8">
      <h2 class="text-2xl md:text-3xl mb-4">Things we've learned so far</h2>
      <p class="text-lg">
        Select a session below for a recording and more details.
      </p>
      <SessionCardList :sessions="sessionsPast"/>
    </div>
  </section>
</template>
<script>
import SessionCardList from "~/components/SessionCardList.vue";
import InfoBar from "~/components/InfoBar.vue";
import { getSessionsUpcoming, getSessionsPast } from "~/util/session";

export default {
  components: {
    SessionCardList,
    InfoBar,
  },
  props: {
    sessions: { type: Array, default: () => [] },
    calendarLink: { type: String, default: () => '' },
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
