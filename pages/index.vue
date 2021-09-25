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
          class="inline-block mb-8 text-3xl rounded px-4 py-2 no-underline grow shadow-hover white bg-color-accent"
        >
          {{indexPage.ctaButtonText}}
        </nuxt-link>
        <div class="block">
          <a
            :href="indexPage.subLink.href"
            class="color-accent underline hover:no-underline"
            target="_blank"
            >{{indexPage.subLink.text}}</a
          >
        </div>
      </section>
      <section class="mb-16 mx-auto">
        <nuxt-content 
          :document="indexPage" 
          class="max-w-2xl mx-auto text-lg"
        />
        <process-card-list/>
        <session-format-list :sessionTypes="indexPage.sessionTypes"/>
        <info-bar v-for="(infoBar, index) in indexPage.infoBars" :key="index" :infoBarObject="infoBar"/>
      </section>
      <SessionsSection
        id="section-upcoming"
        v-if="sessionsUpcoming.length"
        :sessions="sessionsUpcoming"
      >
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Upcoming Sessions</h2>
        <info-bar v-if="indexPage.calendarLink" :infoBarObject="{
          'icon': '📅',
          'link': {
            'text': 'Subscribe to the Skill Sharing calendar to stay posted',
            'href': indexPage.calendarLink
          }
        }"/>
      </SessionsSection>
      <SessionsSection
        id="section-past"
        v-if="sessionsPast.length"
        :sessions="sessionsPast"
      >
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Things we've learned so far</h2>
        <p class="text-lg lh-copy">
          Select a session below for a recording and more details.
        </p>
      </SessionsSection>
      <div
        id="#section-intentions"
        v-if="nodes && edges && popular"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb3">Community learning intentions</h2>
        <p class="text-lg lh-copy mb-8">
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
import ProcessCardList from "~/components/ProcessCardList.vue";
import SessionFormatList from "~/components/SessionFormatList.vue";
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
    ProcessCardList,
    SessionFormatList,
    TagPill,
    InfoBar,
    SocialHead,
    NavigationTabs,
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
