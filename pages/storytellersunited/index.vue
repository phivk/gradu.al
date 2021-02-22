<template>
  <div class="bg-su-washed-orange">
    <div class="tc pa2 pa3-m pa4-l">
      <section class="mb5">
        <div class="mv4">
          <a href="https://storytellers.link/" target="_blank">
            <img
              class="w3 w4-ns"
              src="https://storytellers.link/img/logo-storytellersunited-200px.png"
              alt="Storytellers United Logo"
            />
          </a>
        </div>
        <h1 class="f2 f1-ns">What would you like to learn or share?</h1>
        <nuxt-link
          to="/storytellersunited/join"
          class="dib mb3 mb4-ns f3 f2-ns br3 ph3 pv2 no-underline grow shadow-hover white bg-su-dark-orange"
        >
          Let us know!
        </nuxt-link>
        <div class="db">
          <a
            href="https://storytellers.link/invite/"
            class="su-dark-orange hover-no-underline"
            target="_blank"
            >join Storytellers United</a
          >
        </div>
      </section>
      <section class="mb5">
        <div class="center">
          <h2 class="measure center mv2">
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
                class="su-dark-orange hover-no-underline"
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
        :sessions="sessionsPast"
        :members="members"
      >
        <h2 class="mb3">Things we've learned so far</h2>
        <p class="f4 lh-copy">
          Select a session below for a recording and more details.
        </p>
        <CalendarReferral v-if="!sessionsUpcoming.length" />
      </SessionsSection>
      <section class="mb5">
        <h2 class="mb3">Community learning intentions</h2>
        <div class="mb3 f4 center lh-copy">
          <p>
            Here's an interactive map of skills that SU members would like to
            <span class="b orange">↗︎learn</span> or
            <span class="b purple">↗︎share</span>.
          </p>
          <p>
            Click any <span class="b dark-green">●skill</span> or
            <span class="b dark-blue">●member</span> to explore the connections!
          </p>
          <p>
            Click <span class="b f3">⦷</span>pause to prevent overlapping texts.
          </p>
        </div>
        <GraphCommonsEmbed
          :graphCommonsSrc="graphCommonsSrc"
        />
      </section>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import SessionCardPreview from "~/components/SessionCardPreview.vue";
import GraphCommonsEmbed from "~/components/GraphCommonsEmbed.vue";
import CalendarReferral from "~/components/CalendarReferral.vue";
import SessionsSection from "~/components/SessionsSection.vue";
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
  },
  data() {
    return {
      graphCommonsSrc: "https://graphcommons.com/graphs/762414fc-f7f9-40aa-86b8-10f8686f10e0/embed?topbar=false",
    };
  },
  methods: {
    hydrateMembers(memberNames) {
      return memberNames.map((memberName) => {
        if (this.members[memberName]) {
          return this.members[memberName];
        } else {
          return {
            profilePic: require("@/assets/profilePic-default-32.png"),
            userName: memberName,
          };
        }
      });
    },
  },
  async asyncData({ $content }) {
    let now = new Date();
    now.setDate(now.getDate() - 1); // include today in upcoming
    // NB this uses UTC time, causing inaccuracies for non UTC timezones
    let nowString = now.toISOString().slice(0, 10);

    const sessionsUpcoming = await $content("storytellersunited/sessions")
      .sortBy("date", "asc")
      .where({
        date: { $gte: nowString },
      })
      .fetch();

    const sessionsPast = await $content("storytellersunited/sessions")
      .sortBy("date", "desc")
      .where({
        date: { $lt: nowString },
      })
      .fetch();

    const members = await fetch(
      "https://storytellers.link/api/members.json"
    ).then((res) => res.json());

    return { sessionsUpcoming, sessionsPast, members };
  },
};
</script>
