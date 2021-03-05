<template>
  <div>
    <div class="tc pa2 pa3-m pa4-l">
      <section class="mb5">
        <div class="mv4">
          <a href="https://www.mozillafestival.org/" target="_blank">
            <img
              class="w4 w5-ns"
              src="https://assets.mofoprod.net/static/_images/mozfest/logo.364cf5df72b2.svg"
              alt="MozFest Logo"
            />
          </a>
        </div>
        <h1 class="f2 f1-ns">What would you like to learn or share?</h1>
        <nuxt-link
          append
          to="join"
          class="dib mb3 mb4-ns f3 f2-ns br3 ph3 pv2 no-underline grow shadow-hover white bg-moz-berry"
        >
          Let us know!
        </nuxt-link>
        <div class="db">
          <a
            href="https://www.mozillafestival.org/slack/"
            class="moz-berry hover-no-underline"
            target="_blank"
            >join the MozFest Slack</a
          >
        </div>
      </section>
      <section class="mb5">
        <div class="center">
          <h2 class="measure center mv2">
            Hi 👋 <br />
            Welcome to MozFest on Gradual!
          </h2>
          <div class="measure center">
            <p class="mb3 f4 lh-copy">
              This is a space to express things you’d like to learn and share
              with others in the community. Keep an eye on the
              <a
                href="https://app.slack.com/client/T170JCUN6/C01PXSJ9AH0"
                target="_blank"
                class="moz-berry hover-no-underline"
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
        :members="members"
      >
        <h2 class="mb3">Upcoming Sessions</h2>
        <CalendarReferral />
      </SessionsSection>
      <SessionsSection
        v-if="sessionsPast.length"
        :sessions="sessionsPast"
        :members="members"
      >
        <h2 class="mb3">Things we've learned so far</h2>
        <p class="f4 lh-copy">
          Select a session below for a recording and more details.
        </p>
        <CalendarReferral v-if="!sessionsUpcoming.length" />
      </SessionsSection>
      <GraphSection
        v-if="this.graphCommonsSrc"
        memberTitlePlural="MozFest participants"
      >
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
import GraphManual from "~/components/GraphManual.vue"
export default {
  layout: "mozFest",
  head() {
    return {
      title: "MozFest - Here to learn",
    };
  },
  components: {
    SessionCardPreview,
    GraphCommonsEmbed,
    CalendarReferral,
    SessionsSection,
    GraphSection,
    GraphManual
  },
  data() {
    return {
      graphCommonsSrc: undefined,
    };
  },
  async asyncData({ $content }) {
    let now = new Date();
    now.setDate(now.getDate() - 1); // include today in upcoming
    // NB this uses UTC time, causing inaccuracies for non UTC timezones
    let nowString = now.toISOString().slice(0, 10);

    const sessionsUpcoming = await $content("mozfest/sessions")
      .sortBy("date", "asc")
      .where({
        date: { $gte: nowString },
      })
      .fetch();

    const sessionsPast = await $content("mozfest/sessions")
      .sortBy("date", "desc")
      .where({
        date: { $lt: nowString },
      })
      .fetch();

    const nodes = await $content('mozfest/data', 'nodes').fetch()

    const edges = await $content('mozfest/data', 'edges').fetch()

    return { sessionsUpcoming, sessionsPast, nodes, edges };
  },
};
</script>
