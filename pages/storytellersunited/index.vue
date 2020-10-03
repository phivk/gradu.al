<template>
  <div class="bg-su-washed-orange">
    <nav class="bg-su-light-orange pa3">
      <nuxt-link to="/">
        <logo class="w3" />
      </nuxt-link>
    </nav>
    <div class="tc pa4">
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
      <section class="mv5">
        <h2>Things we've learned in previous sessions</h2>
        <ul class="list pa0 ma0 flex flex-wrap">
          <li v-for="session in sessions" class="center w-100 w-50-m mw8 pa3">
            <SessionCard
              :title="session.title"
              :type="session.type"
              :date="session.date"
              :imageSrc="session.imageSrc"
              :link="session.link"
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
    return {
      sessions: [
        {
          title: "How to handle conversations with xenophobes and racists?",
          type: "lunch & learn",
          date: "30 Sept 2020",
          imageSrc: "https://i1.ytimg.com/vi/qI8W30t4bIM/hqdefault.jpg",
          link: "https://www.youtube.com/watch?v=qI8W30t4bIM",
          learners: [
            {
              profilePic:
                "https://ca.slack-edge.com/T14SUV8BA-UD1UZ0J3H-573c02ead937-32",
              userName: "Gunnar de Jong",
            },
            {
              profilePic:
                "https://ca.slack-edge.com/T14SUV8BA-U14SLMJ20-ab75d1919845-32",
              userName: "Philo",
            },
            {
              profilePic:
                "https://ca.slack-edge.com/T14SUV8BA-UQDCZCT7F-g26743a83b8d-32",
              userName: "hay",
            },
            {
              profilePic:
                "https://ca.slack-edge.com/T14SUV8BA-UU4SUJ9U2-gf27c210f8aa-32",
              userName: "Kevin",
            },
            {
              profilePic:
                "https://ca.slack-edge.com/T14SUV8BA-U014ACSTHNJ-7b4a05e8e80b-32",
              userName: "1coko",
            },
          ],
          sharers: [
            {
              profilePic:
                "https://ca.slack-edge.com/T14SUV8BA-UAX2YQV2R-8ab84e1fbcff-32",
              userName: "Anna Desponds",
            },
            {
              profilePic:
                "https://ca.slack-edge.com/T14SUV8BA-U01BCG23VM3-bb24210db841-32",
              userName: "Gosia",
            },
          ],
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
      ],
    };
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

@media (max-width: 60em) {
  .br--top-nl {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.objfit-cover {
  object-fit: cover;
}
.ml-2 {
  margin-left: -0.5rem;
}
</style>
