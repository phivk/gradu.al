<template>
  <div>
    <social-head
      title="Storytellers United - Here to learn"
      description=""
    />
    <div class="text-center pa2 pa3-m pa4-l">
      <section class="mb5">
        <div class="mv4">
          <a href="https://storytellers.link/" target="_blank">
            <img
              class="dib w3 w4-ns"
              src="https://storytellers.link/img/logo-storytellersunited-200px.png"
              alt="Storytellers United Logo"
            />
          </a>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold">What would you like to learn or share?</h1>
        <nuxt-link
          append
          to="join"
          class="dib mb4 text-3xl br3 ph3 pv2 no-underline grow shadow-hover white bg-su-dark-orange"
        >
          Let us know!
        </nuxt-link>
        <div class="db">
          <a
            href="https://storytellers.link/invite/"
            class="su-dark-orange underline hover:no-underline"
            target="_blank"
            >join Storytellers United</a
          >
        </div>
      </section>
      <section class="mb5">
        <div class="center">
          <h2 class="text-2xl md:text-3xl font-bold measure center mv2">
            Hi 👋 <br />
            Welcome to Storytellers United on Gradual!
          </h2>
          <div class="measure center">
            <p class="mb3 f4 lh-copy">
              This is a space to express things you’d like to learn and share
              with others in the community. Keep an eye on the
              <a
                href="https://app.slack.com/client/T14SUV8BA/C016WE6ADA9"
                target="_blank"
                class="su-dark-orange underline hover:no-underline"
                >#skillsharing channel</a
              >
              for updates.
            </p>
          </div>
        </div>
      </section>
      <SessionsSection
        v-if="sessionsUpcoming.length"
        :sessions="sessionsUpcoming"
      >
        <h2 class="text-2xl md:text-3xl font-bold mb3">Upcoming Sessions</h2>
        <CalendarReferral />
      </SessionsSection>
      <SessionsSection
        v-if="sessionsPast.length"
        :sessions="sessionsPast"
      >
        <h2 class="text-2xl md:text-3xl font-bold mb3">Things we've learned so far</h2>
        <p class="f4 lh-copy">
          Select a session below for a recording and more details.
        </p>
        <CalendarReferral v-if="!sessionsUpcoming.length" />
      </SessionsSection>
      <GraphSection memberTitlePlural="SU members">
        <GraphCommonsEmbed :graphCommonsSrc="graphCommonsSrc" />
      </GraphSection>
    </div>
  </div>
</template>

<script>
import SessionCardPreview from "~/components/SessionCardPreview.vue";
import GraphCommonsEmbed from "~/components/GraphCommonsEmbed.vue";
import CalendarReferral from "~/components/CalendarReferral.vue";
import SessionsSection from "~/components/SessionsSection.vue";
import GraphSection from "~/components/GraphSection.vue";
import SocialHead from "~/components/SocialHead.vue";
import { hasHappened, hasNotHappened } from "~/util/date";

export default {
  layout: "storytellersUnited",
  head() {
    return {
      title: "Storytellers United - Here to learn",
    };
  },
  components: {
    SessionCardPreview,
    GraphCommonsEmbed,
    CalendarReferral,
    SessionsSection,
    GraphSection,
    SocialHead
  },
  data() {
    return {
      graphCommonsSrc:
        "https://graphcommons.com/graphs/762414fc-f7f9-40aa-86b8-10f8686f10e0/embed?topbar=false",
    };
  },
  async asyncData({ $content }) {
    const sessions = await $content("storytellersunited/sessions")
      .sortBy("dateTime", "asc")
      .fetch()

    return { sessions };
  },
  computed: {
    sessionsUpcoming() {
      return this.sessions.filter(s => {
        let sessionDate = new Date(s.dateTime);
        return hasNotHappened(sessionDate);
      });
    },
    sessionsPast() {
      return this.sessions.filter(s => {
        let sessionDate = new Date(s.dateTime);
        return hasHappened(sessionDate);
      });
    },
  },
  /* enables auth middleware (also see pages/login.vue and `auth` object in nuxt.config.js)
     after successful login, the boolean flag `this.$auth.loggedIn` indicates that user is authenticated
     for more info see https://auth.nuxtjs.org/api/auth/ */
  // middleware: 'auth'
};
</script>
