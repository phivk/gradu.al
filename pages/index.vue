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
      <SessionsSection :sessions="sessions" :calendarLink="indexPage.calendarLink"/>
      <IntentionSection
        :nodes="nodes" 
        :edges="edges" 
        :popular="popular"
      />
    </div>
  </div>
</template>

<script>
import SessionsSection from "~/components/SessionsSection.vue";
import IntentionSection from "~/components/IntentionSection.vue";
import ProcessCardList from "~/components/ProcessCardList.vue";
import SessionFormatList from "~/components/SessionFormatList.vue";
import InfoBar from "~/components/InfoBar.vue";
import SocialHead from "~/components/SocialHead.vue";

export default {
  layout: "mozFest",
  head() {
    return {
      title: "MozFest - Here to learn",
    };
  },
  components: {
    SessionsSection,
    IntentionSection,
    ProcessCardList,
    SessionFormatList,
    InfoBar,
    SocialHead,
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
};
</script>
