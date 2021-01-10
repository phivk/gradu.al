<template>
  <SessionSection
    :type="session.type"
    :title="session.title"
    :description="session.description"
    :date="session.date"
    :learners="hydrateMembers(session.learnerNames)"
    :sharers="hydrateMembers(session.sharerNames)"
    :resources="session.resources"
    :imageSrc="session.imageSrc"
  />
</template>

<script>
import _ from "lodash";
import SessionSection from "~/components/SessionSection.vue";

export default {
  layout: "storytellersUnited",
  head() {
    return {
      title: this.session.title,
    };
  },
  components: {
    SessionSection,
  },
  data() {
    return {
      session: {
        title: "How to handle conversations with xenophobes and racists",
        type: "lunch & learn",
        date: "30 Sept 2020",
        description:
          "During this session we will share some tips and insights from our experience (and backed by research). \n\n👉 What to do when you hear a racist comment? \n👉🏽 Where do these come from? \n👉🏿 How to engage? \n👉 What works best in these conversations? \n👉🏽 When talking about diversity, where are the limits of embracing other people's views? \n👉🏿 How not to go insane when you discover the world is full of xenophobes and racists?",
        imageSrc: "https://i1.ytimg.com/vi/qI8W30t4bIM/hqdefault.jpg",
        slug: "architecting-curiosity",
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
