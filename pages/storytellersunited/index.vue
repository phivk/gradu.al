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
        <h2>Upcoming</h2>
        <ul class="list pa0 ma0 flex flex-wrap">
          <li v-for="session in sessionsUpcoming" class="center w-100 w-50-m mw8 pa3">
            <SessionCard
              :title="session.title"
              :type="session.type"
              :date="session.date"
              :imageSrc="session.imageSrc"
              :link="session.link"
              :cta="session.cta"
              :learners="session.learners"
              :sharers="session.sharers"
              :resources="session.resources"
              :icsFileSrc="session.icsFileSrc"
            />
          </li>
        </ul>
      </section>
      <section class="mv5">
        <h2>Things we've learned so far</h2>
        <ul class="list pa0 ma0 flex flex-wrap">
          <li v-for="session in sessionsPast" class="center w-100 w-50-m mw8 pa3">
            <SessionCard
              :hasHappened="true"
              :title="session.title"
              :type="session.type"
              :date="session.date"
              :imageSrc="session.imageSrc"
              :link="session.link"
              :cta="session.cta"
              :learners="session.learners"
              :sharers="session.sharers"
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
  data: function() {
    let members = {
      "Gunnar de Jong": {
        profilePic:
          "https://ca.slack-edge.com/T14SUV8BA-UD1UZ0J3H-573c02ead937-32",
        userName: "Gunnar de Jong",
      },
      Philo: {
        profilePic:
          "https://ca.slack-edge.com/T14SUV8BA-U14SLMJ20-ab75d1919845-32",
        userName: "Philo",
      },
      hay: {
        profilePic:
          "https://ca.slack-edge.com/T14SUV8BA-UQDCZCT7F-g26743a83b8d-32",
        userName: "hay",
      },
      Kevin: {
        profilePic:
          "https://ca.slack-edge.com/T14SUV8BA-UU4SUJ9U2-gf27c210f8aa-32",
        userName: "Kevin",
      },
      "1coko": {
        profilePic:
          "https://ca.slack-edge.com/T14SUV8BA-U014ACSTHNJ-7b4a05e8e80b-32",
        userName: "1coko",
      },
      "Anna Desponds": {
        profilePic:
          "https://ca.slack-edge.com/T14SUV8BA-UAX2YQV2R-8ab84e1fbcff-32",
        userName: "Anna Desponds",
      },
      Gosia: {
        profilePic:
          "https://ca.slack-edge.com/T14SUV8BA-U01BCG23VM3-bb24210db841-32",
        userName: "Gosia",
      },
      "Amanda Curtis": {
        profilePic:
          "https://ca.slack-edge.com/T14SUV8BA-U01649KLSEL-599d1dd22d32-32",
        userName: "Amanda Curtis",
      },
      "Rasa Bocyte": {
        profilePic:
          "https://ca.slack-edge.com/T14SUV8BA-U0151MGCPJS-ccfd09390341-32",
        userName: "Rasa Bocyte",
      },
      Alexa: {
        profilePic:
          "https://ca.slack-edge.com/T14SUV8BA-UD4FRNJ06-4d06a9fa5d68-32",
        userName: "Alexa",
      },
    };
    return {
      sessions: [
        {
          title: "How to handle conversations with xenophobes and racists?",
          type: "lunch & learn",
          date: "30 Sept 2020",
          imageSrc: "https://i1.ytimg.com/vi/qI8W30t4bIM/hqdefault.jpg",
          link: "https://www.youtube.com/watch?v=qI8W30t4bIM",
          cta: "Watch recording",
          learners: [
            members["hay"],
            members["Kevin"],
            members["1coko"],
            members["Gunnar de Jong"],
            members["Philo"],
          ],
          sharers: [members["Anna Desponds"], members["Gosia"]],
          resources: [
            {
              text: "session recording",
              href: "https://www.youtube.com/watch?v=qI8W30t4bIM",
            },
            {
              text: "session notes",
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
          imageSrc:
            "https://i.ytimg.com/vi/Q0pFsHaCpqs/maxresdefault.jpg",
          link: "https://youtu.be/Q0pFsHaCpqs",
          cta: "Watch recording",
          learners: [
            members["Anna Desponds"],
            members["Kevin"],
            members["Rasa Bocyte"],
            members["Alexa"],
            members["Gunnar de Jong"],
            members["Philo"],
          ],
          sharers: [members["hay"]],
          resources: [
            {
              text: "session recording",
              href: "https://youtu.be/Q0pFsHaCpqs",
            },
            {
              text: "session notes",
              href:
                "https://docs.google.com/document/d/1wXD9D_9ulGg0YoVGjvoxIjHIoA2ZP4jipH8iCOUpfPc/edit",
            },
          ],
        },
      ],
    };
  },
  computed: {
    sessionsUpcoming() {
      let now = new Date();
      let sessionsFiltered = this.sessions.filter((session) => new Date(session.date) > now );
      return _.orderBy(sessionsFiltered, session => new Date(session.date), ['desc']);
    },
    sessionsPast() {
      let now = new Date();
      let sessionsFiltered = this.sessions.filter((session) => new Date(session.date) < now );
      return _.orderBy(sessionsFiltered, session => new Date(session.date), ['desc']);
    },
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
