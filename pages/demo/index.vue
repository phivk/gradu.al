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
          class="dib mb3 mb4-ns f3 f2-ns br3 ph3 pv2 no-underline grow shadow-hover white bg-color-accent"
        >
          Let us know!
        </nuxt-link>
        <div class="db">
          <a
            href="https://www.mozillafestival.org/slack/"
            class="color-accent hover-no-underline"
            target="_blank"
            >join the Demo Slack</a
          >
        </div>
      </section>
      <section class="mb5">
        <div class="center">
          <h2 class="measure center mv2">
            Hi 👋 <br />
            Welcome to Demo on Gradual!
          </h2>
          <div class="measure center">
            <p class="mb3 f4 lh-copy">
              This is a space to express things you’d like to learn and share
              with others in the community. Keep an eye on the
              <a
                href="https://app.slack.com/client/T170JCUN6/C01PXSJ9AH0"
                target="_blank"
                class="color-accent hover-no-underline"
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
        <h2 class="mb3">Upcoming Sessions</h2>
      </SessionsSection>
      <SessionsSection
        v-if="sessionsPast.length"
        :sessions="sessionsPast"
      >
        <h2 class="mb3">Things we've learned so far</h2>
        <p class="f4 lh-copy">
          Select a session below for a recording and more details.
        </p>
      </SessionsSection>
      <GraphSection v-if="nodes && edges" memberTitlePlural="participants" class="dn db-ns">
        <GraphManual :nodes="nodes.nodes" :edges="edges.edges" />
      </GraphSection>
    </div>
  </div>
</template>

<script>
import SessionCardPreview from "~/components/SessionCardPreview.vue";
import GraphCommonsEmbed from "~/components/GraphCommonsEmbed.vue";
import SessionsSection from "~/components/SessionsSection.vue";
import GraphSection from "~/components/GraphSection.vue";
import GraphManual from "~/components/GraphManual.vue"
export default {
  layout: "demo",
  head() {
    return {
      title: "Demo - Here to learn",
    };
  },
  components: {
    SessionCardPreview,
    GraphCommonsEmbed,
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

    const sessionsUpcoming = await $content("demo/sessions")
      .sortBy("date", "asc")
      .where({
        date: { $gte: nowString },
      })
      .fetch();

    const sessionsPast = await $content("demo/sessions")
      .sortBy("date", "desc")
      .where({
        date: { $lt: nowString },
      })
      .fetch();

    let nodes, edges

    try {
      nodes = await $content("demo/data", "nodes").fetch();
      edges = await $content("demo/data", "edges").fetch();
    } catch (error) {
      console.log(error)
      console.log("nodes and edges failed to load")
    }

    return { sessionsUpcoming, sessionsPast, nodes, edges };
  },
};
</script>