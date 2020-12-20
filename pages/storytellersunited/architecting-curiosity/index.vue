<template>
  <div class="bg-su-washed-orange">
    <nav class="bg-su-light-orange pa3">
      <nuxt-link to="/">
        <logo class="w3" />
      </nuxt-link>
    </nav>
    <main class="cf pa3 pa4-m pa5-l mw9 center">
      <div class="fr w-100 w-80-l mt0 mb4 mb5-ns">
        <h1 class="f2 f1-l lh-title mb2">
          {{session.title}}
        </h1>
        <TagPill>{{ session.type }}</TagPill>
      </div>
      <div class="f5 fw4 lh-copy fl w-100 mb4">
        <div class="fl-ns w-100 w-20-l pr3-m pr5-l mb3">
          <p>
            {{session.date}}
          </p> 
        </div>
        <div class="fl-ns w-50-m w-40-l pr3-m pr5-l">
          <p>
            Learned by:<br>
            <ProfilePicList 
              :profilePics="hydrateMembers(session.learnerNames)"
              :borderColorClass="'white'"
            />
          </p>
        </div>
        <div class="fl-ns w-50-m w-40-l pr3-m pr5-l">
          <p>
            Shared by:<br>
            <ProfilePicList 
              :profilePics="hydrateMembers(session.sharerNames)"
              :borderColorClass="'white'"
            />
          </p> 
        </div>
      </div>
      <div class="fr w-100 w-80-l mt0 mb4 mb5-ns">
        <p class="measure">{{session.description}}</p>
      </div>
      <img 
        class="db w-100" 
        :src="session.imageSrc"
        :alt="session.title"
      />
    </main>
  </div>
</template>

<script>
import _ from "lodash";
import Logo from "~/components/Logo.vue";
import SessionCard from "~/components/SessionCard.vue";
import TagPill from "~/components/TagPill.vue";
import ProfilePicList from "~/components/ProfilePicList.vue";

export default {
  head() {
    return {
      title: "Storytellers United - Here to learn",
    };
  },
  components: {
    Logo,
    SessionCard,
    TagPill,
    ProfilePicList,
  },
  data() {
    return {
      members: [],
      session: {
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
      },
    };
  },
  async asyncData() {
    const members = await fetch(
      "https://storytellers.link/api/members.json"
    ).then((res) => res.json());
    return { members };
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
};
</script>

<style scoped>

</style>
