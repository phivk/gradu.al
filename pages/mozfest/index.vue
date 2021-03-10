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
          <div class="center">
            <p class="center measure mb3 f4 lh-copy">
              This is a space to express things you’d like to learn and share
              with others in the community. Join the conversation on the
              <a
                href="https://app.slack.com/client/T170JCUN6/C01PXSJ9AH0"
                target="_blank"
                class="color-accent hover-no-underline"
                >#skillsharing</a
              >
              channel!
            </p>
            <ol class="list tl pl0 mb3 flex flex-wrap justify-center">
              <li class="pa3 w-100 w-third-ns mw5-5">
                <div class="br3 bg-white pa3 h-100 shadow-4">
                  <CircleCharacter
                    character="1"
                    backgroundColor="#137752"
                    textColor="#FFF"
                    class="mb2 mr2 fw6"
                  />
                  <h3 class="dib fw6">Map</h3>
                  <div class="mid-gray">
                    Let us know what you'd like to learn or share. Anything is
                    welcome!
                  </div>
                </div>
              </li>
              <li class="pa3 w-100 w-third-ns mw5-5">
                <div class="br3 bg-white pa3 h-100 shadow-4">
                  <CircleCharacter
                    character="2"
                    backgroundColor="#137752"
                    textColor="#FFF"
                    class="mb2 mr2 fw6"
                  />
                  <h3 class="dib fw6">Match</h3>
                  <div class="mid-gray">
                    See how MozFest is connected by skills! We help you plan a
                    session in the format you choose.
                  </div>
                </div>
              </li>
              <li class="pa3 w-100 w-third-ns mw5-5">
                <div class="br3 bg-white pa3 h-100 shadow-4">
                  <CircleCharacter
                    character="3"
                    backgroundColor="#137752"
                    textColor="#FFF"
                    class="mb2 mr2 fw6"
                  />
                  <h3 class="dib fw6">Meet</h3>
                  <div class="mid-gray">
                    Host or join a session to learn with other MozFest
                    participants based on your interests!
                  </div>
                </div>
              </li>
            </ol>
            <p>
              Still confused?
              <a class="color-accent hover-no-underline" href="#"
                >Watch us walk you through the way it works.</a
              >
            </p>
          </div>
        </div>
      </section>
      <SessionsSection
        id="section-upcoming"
        v-if="sessionsUpcoming.length"
        :sessions="sessionsUpcoming"
      >
        <h2 class="mb3">Upcoming Sessions</h2>
      </SessionsSection>
      <SessionsSection
        id="section-past"
        v-if="sessionsPast.length"
        :sessions="sessionsPast"
      >
        <h2 class="mb3">Things we've learned so far</h2>
        <p class="f4 lh-copy">
          Select a session below for a recording and more details.
        </p>
      </SessionsSection>
      <div id="#section-graph">
        <GraphSection
          v-if="nodes && edges"
          memberTitlePlural="participants"
          class="dn db-ns"
        >
          <GraphManual :nodes="nodes.nodes" :edges="edges.edges" />
        </GraphSection>
        <MostPopularSkillsSection
          v-if="popular"
          :skills="popular.skills"
          class="db dn-ns"
        >
          <h2 class="mb3">Popular skills from the community</h2>
          <p class="f4 lh-copy">
            Something here for you?
            <nuxt-link append to="join" class="color-accent hover-no-underline">
              Let us know!
            </nuxt-link>
          </p>
        </MostPopularSkillsSection>
      </div>
    </div>
  </div>
</template>

<script>
import SessionsSection from "~/components/SessionsSection.vue";
import GraphSection from "~/components/GraphSection.vue";
import GraphManual from "~/components/GraphManual.vue";
import MostPopularSkillsSection from "~/components/MostPopularSkillsSection.vue";
import CircleCharacter from "~/components/CircleCharacter.vue";
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
    MostPopularSkillsSection,
    CircleCharacter,
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

    let nodes, edges, popular;

    try {
      nodes = await $content("mozfest/data", "nodes").fetch();
      edges = await $content("mozfest/data", "edges").fetch();
      popular = await $content("mozfest/data", "popular").fetch();
    } catch (error) {
      console.log(error);
      console.log("nodes and edges failed to load");
    }

    return { sessionsUpcoming, sessionsPast, nodes, edges, popular };
  },
};
</script>
<style scoped>
.mw5-5 {
  max-width: 24rem;
}
</style>
