<template>
  <div>
    <social-head
     title="MozFest - Here to learn"
     description=""
    />
    <div class="text-center">
      <section class="mb-16">
        <div class="mv4">
          <a href="https://www.mozillafestival.org/" target="_blank">
            <img
              class="dib w4 w5-ns"
              src="https://assets.mofoprod.net/static/_images/mozfest/logo.364cf5df72b2.svg"
              alt="MozFest Logo"
            />
          </a>
        </div>
      </section>
      <section class="mb-16">
        <div class="center">
          <h2 class="text-2xl md:text-3xl font-bold measure center mv2">
            Hi 👋 <br />
            Welcome to the MozFest Wranglers skill sharing hub!
          </h2>
          <div class="center">
            <p class="center measure mb-4 f4 lh-copy">
              This is a space to learn and share with others in the community. Talk to Zannah if you'd like to host a session.
            </p>
            <div class="db mb-4">
              <a
                href="https://www.mozillafestival.org/slack/"
                class="color-accent underline hover:no-underline"
                target="_blank"
                >join the MozFest Slack</a
              >
            </div>
            <p class="measure center mb-8 lh-copy">
              <strong>Skill sharing sessions take any format</strong> that best fits the
              facilitator and the skill they are sharing, for example
              <TagPill
                v-for="sessionType in sessionTypes"
                :key="sessionType"
                class="m-1"
              >
                {{ sessionType }}
              </TagPill>
            </p>
          </div>
        </div>
      </section>
      <SessionsSection
        id="section-upcoming"
        v-if="sessionsUpcoming.length"
        :sessions="sessionsUpcoming"
      >
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Upcoming Sessions</h2>
      </SessionsSection>
      <SessionsSection
        id="section-past"
        v-if="sessionsPast.length"
        :sessions="sessionsPast"
      >
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Things we've learned so far</h2>
        <p class="f4 lh-copy">
          Select a session below for a recording and more details.
        </p>
      </SessionsSection>
    </div>
  </div>
</template>

<script>
import SessionsSection from "~/components/SessionsSection.vue";
import TagPill from "~/components/TagPill.vue";
import SocialHead from "~/components/SocialHead.vue";
import { getSessionsUpcoming, getSessionsPast } from "~/util/session";

export default {
  layout: "mozFestWranglers",
  head() {
    return {
      title: "MozFest - Here to learn",
    };
  },
  components: {
    SessionsSection,
    TagPill,
    SocialHead,
  },
  data() {
    return {
      sessionTypes: [
        "peer share",
        "salon",
        "conversation",
        "workshop",
        "lunch & learn",
        "talk",
        "one-on-one",
        "brainstorm",
        "activity",
        "AMA",
      ],
    };
  },
  async asyncData({ $content }) {
    const sessions = await $content("mozfestwranglers/sessions")
      .sortBy("dateTime", "asc")
      .fetch()

    return { sessions };
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
