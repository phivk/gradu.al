<template>
  <div class="bg-su-washed-orange">
    <nav class="bg-su-light-orange pa3">
      <nuxt-link to="/">
        <logo class="w3" />
      </nuxt-link>
    </nav>
    <div class="tc pa2 pa3-m pa4-l">
      <section>
        <div class="mv4">
          <a href="https://storytellers.link/" target="_blank">
            <img
              class="w4"
              src="https://storytellers.link/img/logo-storytellersunited-200px.png"
              alt="Storytellers United Logo"
            />
          </a>
        </div>
        <div>
          <h1 class="measure center">
            Hi 👋 <br />
            Welcome to Storytellers United on Gradual!
          </h1>
          <p class="f4 fw3 measure center">
            This is a space to express intentions for things you’d like to learn
            and share with others in the community.
          </p>
          <nuxt-link
            to="/storytellersunited/join"
            class="mv4 f4 link grow br3 ph3 pv2 dib white bg-dark-green"
          >
            Join the group
          </nuxt-link>
          <h2 class="mb3 f4 fw3">
            Already joined & curious to see what others would like to learn and
            share?
          </h2>
          <nuxt-link to="/storytellersunited/map" class="f4 dark-green">
            See group skills
          </nuxt-link>
        </div>
      </section>
      <section v-if="sessionsUpcoming.length" class="mv5">
        <h2>Upcoming Sessions</h2>
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
        <h2>Things we've learned so far</h2>
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
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import Logo from "~/components/Logo.vue";
import SessionCard from "~/components/SessionCard.vue";
export default {
  head() {
    return {
      title: "Storytellers United - Here to learn",
    };
  },
  components: {
    Logo,
    SessionCard,
  },
  data() {
    return {
      members: [],
      sessions: [
        {
          title: "How to handle conversations with xenophobes and racists?",
          type: "lunch & learn",
          date: "30 Sept 2020",
          description:
            "During a this session we will share some tips and insights from our experience (and backed by research). 👉 What to do when you hear a racist comment? 👉🏽 Where do these come from? 👉🏿 How to engage? 👉 What works best in these conversations? 👉🏽 When talking about diversity, where are the limits of embracing other people's views? 👉🏿 How not to go insane when you discover the world is full of xenophobes and racists?",
          imageSrc: "https://i1.ytimg.com/vi/qI8W30t4bIM/hqdefault.jpg",
          link: "https://www.youtube.com/watch?v=qI8W30t4bIM",
          cta: "Watch recording",
          learnerNames: ["hay", "Kevin", "1coko", "Gunnar de Jong", "Philo"],
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
            "Anna Desponds",
            "Kevin",
            "Rasa Bocyte",
            "Alexa",
            "Gunnar de Jong",
            "Philo",
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
      let sessionsFiltered = this.sessions.filter(
        (session) => new Date(session.date) > now || session.date === "TBC"
      );
      return _.orderBy(sessionsFiltered, (session) => new Date(session.date), [
        "desc",
      ]);
    },
    sessionsPast() {
      let now = new Date();
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
</style>
