<template>
  <div class="bg-su-washed-orange">
    <nav class="bg-su-light-orange pa3">
      <nuxt-link to="/">
        <logo class="w3" />
      </nuxt-link>
    </nav>
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
          class="mb3 mb4-ns f3 f2-ns link grow br3 ph3 pv2 dib white bg-su-dark-orange shadow-5"
        >
          Let us know!
        </nuxt-link>
        <div class="db">
          <a href="https://storytellersunited.slack.com/" class="su-dark-orange fw3 hover-no-underline" target="_blank">join Storytellers United</a>
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
              This is a space to express things you’d like to learn and share with others in the community.
            </p>
          </div>
        </div>
      </section>
      <section v-if="sessionsUpcoming.length" class="mv5">
        <h2 class="mb3">Upcoming Sessions</h2>
        <CalendarReferral/>
        <ul class="list pa0 ma0 flex flex-wrap">
          <li
            v-for="session in sessionsUpcoming"
            class="center w-100 w-50-m mw8 pa3"
          >
            <SessionCard
              :title="session.title"
              :type="session.type"
              :date="session.date"
              :description="session.description"
              :imageSrc="session.imageSrc"
              :link="session.link"
              :cta="session.cta"
              :learners="hydrateMembers(session.learnerNames)"
              :sharers="hydrateMembers(session.sharerNames)"
              :resources="session.resources"
              :icsFileSrc="session.icsFileSrc"
            />
          </li>
        </ul>
      </section>
      <section class="mv5">
        <h2 class="mb3">Things we've learned so far</h2>
        <CalendarReferral v-if="!sessionsUpcoming.length" />
        <ul class="list pa0 ma0 flex flex-wrap">
          <li
            v-for="session in sessionsPast"
            class="center w-100 w-50-m mw8 pa3"
          >
            <SessionCard
              :title="session.title"
              :type="session.type"
              :date="session.date"
              :description="session.description"
              :imageSrc="session.imageSrc"
              :link="session.link"
              :cta="session.cta"
              :learners="hydrateMembers(session.learnerNames)"
              :sharers="hydrateMembers(session.sharerNames)"
              :resources="session.resources"
            />
          </li>
        </ul>
      </section>
      <section class="mb5">
        <h2 class="mb3">Community learning intentions</h2>
        <div class="mb3 f4 center lh-copy">
          <p>
            Here's an interactive map of skills that SU members would like to <span class="b orange">↗︎learn</span> or <span class="b purple">↗︎share</span>.
          </p>
          <p>Click any <span class="b dark-green">●skill</span> or <span class="b dark-blue">●member</span> to explore the connections!</p>
          <p>Click <span class="b f3">⦷</span>pause to prevent overlapping texts.</p>
        </div>
        <GraphEmbed/>
      </section>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import Logo from "~/components/Logo.vue";
import SessionCard from "~/components/SessionCard.vue";
import GraphEmbed from "~/components/GraphEmbed.vue";
import CalendarReferral from "~/components/CalendarReferral.vue";
export default {
  head() {
    return {
      title: "Storytellers United - Here to learn",
    };
  },
  components: {
    Logo,
    SessionCard,
    GraphEmbed,
    CalendarReferral,
  },
  data() {
    return {
      members: [],
      sessions: [
        {
          title: "Architecting Curiosity",
          description:
            "How might we explore all the dimension curiosity has to offer? How do we start practicing and strengthen our own muscle of inquiry? Anthony & Pim will host a workshop inspired by their ongoing research exploring curiosity.",
          type: "conversation",
          date: "18 Dec 2020",
          imageSrc:
            "https://images.unsplash.com/photo-1451470838681-d2856d3048a3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=432&q=80",
          link:
            "https://calendar.google.com/calendar/u/0/r/eventedit/copy/Xzhrb2pnY3EyNmgyNDRiOXA4NTMzZ2I5azYxMWpjYjlvNmtwMzBiOXA2ZDMzNGQxbjYxMzQ4ZGhtNjQgMW5rc2xtaDR1dXI0dDUxbjNyaWxkc2Q5czBAZw/cGhpbGxjaGlsbEBnbWFpbC5jb20?sf=true",
          cta: "Add to Calendar",
          learnerNames: [
            "Amanda Curtis",
            "Anna Desponds",
            "Celine",
            "Gosia",
            "Gunnar de Jong",
            "hay",
            "HazelXD",
            "Kevin",
            "magda bochenska",
            "Philo",
          ],
          sharerNames: ["Pim", "Anthony"],
          icsFileSrc:
            "/storytellersunited/201218-architecting-curiosity.ics",
        },
        {
          title: "How to handle conversations with xenophobes and racists?",
          type: "lunch & learn",
          date: "30 Sept 2020",
          description:
            "During a this session we will share some tips and insights from our experience (and backed by research). 👉 What to do when you hear a racist comment? 👉🏽 Where do these come from? 👉🏿 How to engage? 👉 What works best in these conversations? 👉🏽 When talking about diversity, where are the limits of embracing other people's views? 👉🏿 How not to go insane when you discover the world is full of xenophobes and racists?",
          imageSrc: "https://i1.ytimg.com/vi/qI8W30t4bIM/hqdefault.jpg",
          link: "https://www.youtube.com/watch?v=qI8W30t4bIM",
          cta: "Watch recording",
          learnerNames: ["1coko", "Gunnar de Jong", "hay", "Kevin", "Philo"],
          sharerNames: ["Anna Desponds", "Gosia"],
          resources: [
            {
              text: "recording",
              href: "https://www.youtube.com/watch?v=qI8W30t4bIM",
            },
            {
              text: "notes",
              href:
                "https://docs.google.com/document/d/1faJe-eDTFZZEC1PATqmoecQw_Qx60XkolRrQsMH7TZc/edit#",
            },
          ],
        },
        {
          title: "Writing personal newsletters",
          type: "talk with Q&A",
          date: "10 Nov 2020",
          description:
            "Hay has been writing “De Circulaire”, his biweekly newsletter, for more than five years. It’s a combination of interesting links, personal stories, and three well-chosen gifs of animals (predominantly cats). In this session he’ll share what he has learned after writing almost 125 editions, and what keeps him motivated.",
          imageSrc: "https://i.ytimg.com/vi/Q0pFsHaCpqs/maxresdefault.jpg",
          link: "https://youtu.be/Q0pFsHaCpqs",
          cta: "Watch recording",
          learnerNames: [
            "Alexa",
            "Anna Desponds",
            "Gunnar de Jong",
            "Kevin",
            "Philo",
            "Rasa Bocyte",
          ],
          sharerNames: ["hay"],
          icsFileSrc: "/storytellersunited/201110-newsletters.ics",
          resources: [
            {
              text: "recording",
              href: "https://youtu.be/Q0pFsHaCpqs",
            },
            {
              text: "notes",
              href:
                "https://docs.google.com/document/d/1wXD9D_9ulGg0YoVGjvoxIjHIoA2ZP4jipH8iCOUpfPc/edit",
            },
            {
              text: "slides",
              href:
                "https://drive.google.com/file/d/1ZQkypNMTClTv-OMa7L5sJcg4nxyiLSQV/view",
            },
          ],
        },
      ],
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
  computed: {
    sessionsUpcoming() {
      let now = new Date();
      now.setDate(now.getDate() - 1); // include today in upcoming

      let sessionsFiltered = this.sessions.filter(
        (session) => new Date(session.date) > now || session.date === "TBC"
      );
      return _.orderBy(sessionsFiltered, (session) => new Date(session.date), [
        "desc",
      ]);
    },
    sessionsPast() {
      let now = new Date();
      now.setDate(now.getDate() - 1); // include today in upcoming

      let sessionsFiltered = this.sessions.filter(
        (session) => new Date(session.date) < now
      );
      return _.orderBy(sessionsFiltered, (session) => new Date(session.date), [
        "desc",
      ]);
    },
  },
  async asyncData() {
    const members = await fetch(
      "https://storytellers.link/api/members.json"
    ).then((res) => res.json());
    return { members };
  },
};
</script>

<style>
:root {
  --color-su-washed-orange: #fdecce;
  --color-su-light-orange: #f4a726;
  --color-su-dark-orange: #ff5a17;
  --color-su-light-blue: #c3ecf7;
  --color-su-dark-blue: #02ace3;
}
.su-light-orange {
  color: var(--color-su-light-orange);
}
.su-dark-orange {
  color: var(--color-su-dark-orange);
}
.bg-su-light-orange {
  background-color: var(--color-su-light-orange);
}
.bg-su-dark-orange {
  background-color: var(--color-su-dark-orange);
}
.bg-su-washed-orange {
  background-color: var(--color-su-washed-orange);
}
.bg-su-light-blue {
  background-color: var(--color-su-light-blue);
}
.bg-su-dark-blue {
  background-color: var(--color-su-dark-blue);
}
html {
  background-color: var(--color-su-washed-orange);
}
.hover-no-underline:hover {
  text-decoration: none;
}
</style>
