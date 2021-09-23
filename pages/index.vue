<template>
  <div>
    <social-head
     title="MozFest - Here to learn"
     description=""
    />
    <div class="text-center">
      <section class="mb-16">
        <div class="my-6">
          <img
            class="dib w4 w5-ns"
            :src="indexPage.logoSrc"
            :alt="`${indexPage.communityName} Logo`"
          />
        </div>
        <h1 class="text-4xl md:text-5xl mb-6">{{indexPage.ctaHeading}}</h1>
        <nuxt-link
          append
          to="join"
          class="dib mb-8 text-3xl br3 ph3 pv2 no-underline grow shadow-hover white bg-color-accent"
        >
          {{indexPage.ctaButtonText}}
        </nuxt-link>
        <div class="db">
          <a
            :href="indexPage.subLink.href"
            class="color-accent underline hover:no-underline"
            target="_blank"
            >{{indexPage.subLink.text}}</a
          >
        </div>
      </section>
      <section class="mb-16">
        <div class="center">
          <nuxt-content 
            :document="indexPage" 
            class="max-w-2xl mx-auto text-lg"
          />
          <div class="center">
            <ol class="list p-0 mb-4 flex flex-wrap justify-center">
              <li class="p-4 w-100 w-third-ns mw5-5">
                <ProcessCard number="1" title="Map">
                  Let us know what you'd like to learn or share. Anything is
                  welcome!
                </ProcessCard>
              </li>
              <li class="p-4 w-100 w-third-ns mw5-5">
                <ProcessCard number="2" title="Match">
                  See how MozFest is connected by skills! We help you plan a
                  session in the format you choose.
                </ProcessCard>
              </li>
              <li class="p-4 w-100 w-third-ns mw5-5">
                <ProcessCard number="3" title="Meet">
                  Host or join a session to learn with other MozFest
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
        id="section-upcoming"
        v-if="sessionsUpcoming.length"
        :sessions="sessionsUpcoming"
      >
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Upcoming Sessions</h2>
        <InfoBar class="mb-4">
          <template v-slot:left>
            📅
          </template>
          <template v-slot:middle>
            Subscribe to the
            <a
              href="https://bit.ly/MozFestSkillsharing"
              class="underline hover:no-underline color-primary"
              target="_blank"
              >Gradual MozFest Skill Sharing calendar</a
            >
            to stay posted.
          </template>
          <template v-slot:right>
            <a
              href="https://bit.ly/MozFestSkillsharing"
              class="no-underline color-primary"
              target="_blank"
              >↗︎</a
            >
          </template>
        </InfoBar>
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
      <div
        id="#section-intentions"
        v-if="nodes && edges && popular"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb3">Community learning intentions</h2>
        <p class="f4 lh-copy mb-8">
          Something here for you?
          <nuxt-link append to="join" class="color-accent underline hover:no-underline">
            Let us know!
          </nuxt-link>
        </p>
        <NavigationTabs 
          :names="['Graph', 'List']"
          :icons="['project-diagram', 'list']"
        >
          <template v-slot:tab-0>
            <GraphManualKey class="text-left" />
            <GraphManual :nodes="nodes.nodes" :edges="edges.edges" />
          </template>
          <template v-slot:tab-1>
            <MostPopularSkillsSection
              v-if="popular"
              :skills="popular.skills"
              class="text-left"
            >
              <p class="mb-4">Top skills of the moment</p>
            </MostPopularSkillsSection>
          </template>
        </NavigationTabs>
      </div>
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
import { getSessionsUpcoming, getSessionsPast } from "~/util/session";

export default {
  layout: "mozFest",
  head() {
    return {
      title: "MozFest - Here to learn",
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
    const sessions = await $content("sessions")
      .sortBy("dateTime", "asc")
      .fetch()

    const indexPage = await $content('index')
      .fetch()

    let nodes, edges, popular;

    try {
      nodes = await $content("data", "nodes").fetch();
      edges = await $content("data", "edges").fetch();
      popular = await $content("data", "popular").fetch();
    } catch (error) {
      console.log(error);
      console.log("nodes and edges failed to load");
    }

    return { sessions, indexPage, nodes, edges, popular };
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
<style scoped>
.mw5-5 {
  max-width: 24rem;
}
</style>
