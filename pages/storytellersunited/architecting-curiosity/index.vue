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
        title: "Architecting Curiosity",
        description:
          "How might we explore all the dimension curiosity has to offer? How do we start practicing and strengthen our own muscle of inquiry? Anthony & Pim will host a workshop inspired by their ongoing research exploring curiosity.",
        type: "salon",
        date: "18 Dec 2020",
        imageSrc: "https://i.ytimg.com/vi/vL097Tge1_A/maxresdefault.jpg",
        slug: "architecting-curiosity",
        cta: "Watch recording",
        learnerNames: [
          "Anna Desponds",
          "Chris Martens",
          "Gosia",
          "Gunnar de Jong",
          "Kevin",
          "magda bochenska",
          "Philo",
          "Randi Cecchine",
        ],
        sharerNames: ["Pim", "Anthony"],
        icsFileSrc: "/storytellersunited/201218-architecting-curiosity.ics",
        resources: [
          {
            text: "Recording",
            href: "https://youtu.be/vL097Tge1_A",
          },
          {
            text: "Architecting Curiosity",
            href: "https://www.architectingcuriosity.com/",
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
