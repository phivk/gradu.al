<template>
  <div>
    <social-head
     title="Demo - Here to learn"
     description=""
    />
    <div class="text-center">
      <section class="mb-16">
        <div class="mv4">
          <a href="https://www.mozillafestival.org/" target="_blank">
            <img
              class="dib w4 w5-ns"
              src="https://assets.mofoprod.net/static/_images/mozfest/logo.364cf5df72b2.svg"
              alt="Demo Logo"
            />
          </a>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold">What would you like to learn or share?</h1>
        <nuxt-link
          append
          to="join"
          class="dib mb-8 text-3xl br3 ph3 pv2 no-underline grow shadow-hover white bg-color-accent"
        >
          Let us know!
        </nuxt-link>
        <div class="db">
          <a
            href="https://www.mozillafestival.org/slack/"
            class="color-accent underline hover:no-underline"
            target="_blank"
            >join the Demo Slack</a
          >
        </div>
      </section>
      <section class="mb-16">
        <div class="center">
          <h2 class="text-2xl md:text-3xl font-bold measure center mv2">
            Hi 👋 <br />
            Welcome to Demo on Gradual!
          </h2>
          <div class="center">
            <p class="center measure mb-4 f4 lh-copy">
              This is a space to express things you’d like to learn and share
              with others in the community. Join the conversation on the
              <a
                href="https://app.slack.com/client/T170JCUN6/C01PXSJ9AH0"
                target="_blank"
                class="color-accent underline hover:no-underline"
                >#skillsharing</a
              >
              channel!
            </p>
            <ol class="list p-0 mb-4 flex flex-wrap justify-center">
              <li class="p-4 w-100 w-third-ns mw5-5">
                <ProcessCard number="1" title="Map">
                  Let us know what you'd like to learn or share. Anything is
                  welcome!
                </ProcessCard>
              </li>
              <li class="p-4 w-100 w-third-ns mw5-5">
                <ProcessCard number="2" title="Match">
                  See how Demo is connected by skills! We help you plan a
                  session in the format you choose.
                </ProcessCard>
              </li>
              <li class="p-4 w-100 w-third-ns mw5-5">
                <ProcessCard number="3" title="Meet">
                  Host or join a session to learn with other Demo
                  participants based on your interests!
                </ProcessCard>
              </li>
            </ol>
            <p class="measure center mb-8 lh-copy">
              <strong>Sessions take any format</strong> that best fits the
              facilitator and the skill they are sharing, for example
              <TagPill
                v-for="sessionType in sessionTypes"
                :key="sessionType"
                class="m-1"
              >
                {{ sessionType }}
              </TagPill>
            </p>
            <InfoBar>
              <template v-slot:left>
                🤔
              </template>
              <template v-slot:middle>
                Need more help?
                <a
                  class="color-accent underline hover:no-underline"
                  href="https://www.loom.com/share/406bfe57b075452a8efadbff954191ad"
                  target="_blank"
                  >Watch a walk-through video</a
                >.
              </template>
              <template v-slot:right>
                <a
                  class="color-accent no-underline"
                  href="https://www.loom.com/share/406bfe57b075452a8efadbff954191ad"
                  target="_blank"
                  >↗︎</a
                >
              </template>
            </InfoBar>
          </div>
        </div>
      </section>
      <SessionsSection
        v-if="sessionsUpcoming.length"
        :sessions="sessionsUpcoming"
      >
        <h2 class="mb-4">Upcoming Sessions</h2>
      </SessionsSection>
      <SessionsSection
        v-if="sessionsPast.length"
        :sessions="sessionsPast"
      >
        <h2 class="mb-4">Things we've learned so far</h2>
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
import SessionsSection from "~/components/SessionsSection.vue";
import GraphSection from "~/components/GraphSection.vue";
import GraphManual from "~/components/GraphManual.vue";
import GraphManualKey from "~/components/GraphManualKey.vue";
import MostPopularSkillsSection from "~/components/MostPopularSkillsSection.vue";
import CircleCharacter from "~/components/CircleCharacter.vue";
import ProcessCard from "~/components/ProcessCard.vue";
import TagPill from "~/components/TagPill.vue";
import InfoBar from "~/components/InfoBar.vue";
import SocialHead from "~/components/SocialHead.vue";
import NavigationTabs from "~/components/NavigationTabs.vue";
import { filterSessionsUpcoming, filterSessionsPast } from "~/util/session";

export default {
  layout: "demo",
  head() {
    return {
      title: "Demo - Here to learn",
    };
  },
  components: {
    SessionsSection,
    GraphSection,
    GraphManual,
    GraphManualKey,
    MostPopularSkillsSection,
    CircleCharacter,
    ProcessCard,
    TagPill,
    InfoBar,
    SocialHead,
    NavigationTabs,
  },
  data() {
    return {
      graphCommonsSrc: undefined,
      sessionTypes: [
        "peer sharing",
        "salon",
        "conversation",
        "workshop",
        "lunch & learn",
        "talk",
        "one-on-one",
        "presentation",
        "brainstorm",
        "AMA",
      ],
    };
  },
  async asyncData({ $content }) {
    const sessions = await $content("demo/sessions")
      .sortBy("dateTime", "asc")
      .fetch()

    let nodes, edges
    try {
      nodes = await $content("demo/data", "nodes").fetch();
      edges = await $content("demo/data", "edges").fetch();
    } catch (error) {
      console.log(error)
      console.log("nodes and edges failed to load")
    }

    return { sessions, nodes, edges };
  },
  computed: {
    sessionsUpcoming() {
      return filterSessionsUpcoming(this.sessions);
    },
    sessionsPast() {
      return filterSessionsPast(this.sessions);
    },
  },
};
</script>
<style scoped>
.mw5-5 {
  max-width: 24rem;
}
</style>
