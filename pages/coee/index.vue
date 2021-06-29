<template>
  <div>
    <social-head title="CoEE - Here to learn" description="" />
    <div class="tc pa2 pa3-m pa4-l">
      <section class="mb-16">
        <h1 class="text-4xl md:text-5xl font-bold">Summer of Skill Sharing</h1>
        <h2 class="text-xl md:text-2xl">June 29 - September 22</h2>
        <div class="my-4">
          <a href="https://extraordinary.college/" target="_blank">
            <img
              class="dib w4 w5-ns"
              src="https://secureservercdn.net/160.153.138.163/8j9.80a.myftpupload.com/wp-content/uploads/2020/02/SVG_coee-white-owl-1.svg"
              alt="CoEE Logo"
            />
          </a>
        </div>
        <h2 class="h2 mb-8">
          What would you like to learn or share?
        </h2>
        <nuxt-link
          append
          to="join"
          class="
            dib
            mb4
            text-3xl
            br3
            ph3
            pv2
            no-underline
            grow
            shadow-hover
            white
            bg-color-accent
          "
        >
          Let us know!
        </nuxt-link>
        <div class="db">
          <a
            href="https://www.facebook.com/groups/223720981529219"
            class="color-accent underline hover:no-underline"
            target="_blank"
            >join the CoEE FB group</a
          >
        </div>
      </section>
      <section class="mb-16">
        <div class="mx-auto">
          <h3 class="h3 mx-auto mb-4">
            Hi 👋 <br />
            Welcome to the College of Extraordinary Experiences on Gradual!
          </h3>
          <div class="mx-auto">
            <p class="center measure mb-4 text-lg">
              This is a space to express things you’d like to learn and share
              with others in the community.
              <a
                href="https://www.facebook.com/groups/223720981529219"
                target="_blank"
                class="color-accent underline hover:no-underline"
                >Join the conversation</a
              >
              on FB!
            </p>
            <ol class="list pl0 mb-4 flex flex-wrap justify-center">
              <li class="pa3 w-100 w-third-ns mw5-5">
                <ProcessCard number="1" title="Map">
                  Let us know what you'd like to learn or share. Anything is
                  welcome!
                </ProcessCard>
              </li>
              <li class="pa3 w-100 w-third-ns mw5-5">
                <ProcessCard number="2" title="Match">
                  See how the College is connected by skills! We help you plan a
                  session in the format you choose.
                </ProcessCard>
              </li>
              <li class="pa3 w-100 w-third-ns mw5-5">
                <ProcessCard number="3" title="Meet">
                  Host or join a session to learn with other CoEE participants
                  based on your interests!
                </ProcessCard>
              </li>
            </ol>
            <p class="measure mx-auto text-lg">
              <strong>Sessions take any format</strong> that best fits the
              facilitator and the skill they are sharing, for example
              <TagPill
                v-for="sessionType in sessionTypes"
                :key="sessionType"
                class="ma1"
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
        <InfoBar class="mb-4">
          <template v-slot:left> 📅 </template>
          <template v-slot:middle>
            Subscribe to the
            <a
              href="https://bit.ly/CoEESkillsharing"
              class="underline hover:no-underline color-primary"
              target="_blank"
              >Gradual CoEE Skill Sharing calendar</a
            >
            to stay posted.
          </template>
          <template v-slot:right>
            <a
              href="https://bit.ly/CoEESkillsharing"
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
        <h2 class="h2 mb-4">Things we've learned so far</h2>
        <p class="text-lg">
          Select a session below for a recording and more details.
        </p>
      </SessionsSection>

      <!-- ambassador section -->
      <section id="section-ambassadors" class="mb-8"> 
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4">Here are this season's ambassadors!</h2>
          <p class="text-lg">
            For questions, reach out to Andrada, Kristin, Carina on <a class="underline hover:no-underline" href="https://www.facebook.com/groups/223720981529219">Facebook</a> or  Gunnar at <a class="underline hover:no-underline" href="mailto:gunnar@gradu.al">gunnar@gradu.al</a>.
          </p>
        </div>

        <div class="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 sm:-my-8">
          <div v-for="ambassador in ambassadors" class="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3">
            <ProfileBio
              :profilePic="ambassador.profilePic"
              :name="ambassador.name"
              :bio="ambassador.bio"
            />
          </div>
        </div>
      </section>
      <div id="section-intentions" v-if="nodes && edges && popular">
        <h2 class="h2 mb-4">
          Community learning intentions
        </h2>
        <p class="text-lg mb-8">
          Something here for you?
          <nuxt-link
            append
            to="join"
            class="color-accent underline hover:no-underline"
          >
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
              class="text-left text-black"
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
import ProfileBio from "~/components/ProfileBio.vue";
import { hasHappened, hasNotHappened } from "~/util/date";

export default {
  layout: "coee",
  middleware: ["password-protect"],
  head() {
    return {
      title: "CoEE - Here to learn",
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
    ProfileBio,
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
      sessions: [],
      ambassadors: [],
    };
  },
  async asyncData({ $content }) {
    const sessions = await $content("coee/sessions")
      .sortBy("dateTime", "asc")
      .fetch();

    const ambassadors = await $content("coee/ambassadors")
      .sortBy("sortOrder", "asc")
      .fetch();

    let nodes, edges, popular;

    try {
      nodes = await $content("coee/data", "nodes").fetch();
      edges = await $content("coee/data", "edges").fetch();
      popular = await $content("coee/data", "popular").fetch();
    } catch (error) {
      console.log(error);
      console.log("nodes and edges failed to load");
    }

    return { sessions, ambassadors, nodes, edges, popular };
  },
  computed: {
    sessionsUpcoming() {
      return this.sessions.filter((s) => {
        let sessionDate = new Date(s.dateTime);
        return hasNotHappened(sessionDate);
      });
    },
    sessionsPast() {
      return this.sessions.filter((s) => {
        let sessionDate = new Date(s.dateTime);
        return hasHappened(sessionDate);
      });
    },
  },
};
</script>
<style scoped>
.mw5-5 {
  max-width: 24rem;
}
</style>
