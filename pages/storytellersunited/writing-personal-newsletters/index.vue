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
      title: "Storytellers United - Here to learn",
    };
  },
  components: {
    SessionSection,
  },
  data() {
    return {
      session: {
        title: "Writing personal newsletters",
        type: "talk with Q&A",
        date: "10 Nov 2020",
        description:
          "Hay has been writing “De Circulaire”, his biweekly newsletter, for more than five years. It’s a combination of interesting links, personal stories, and three well-chosen gifs of animals (predominantly cats). In this session he’ll share what he has learned after writing almost 125 editions, and what keeps him motivated.",
        imageSrc: "https://i.ytimg.com/vi/Q0pFsHaCpqs/maxresdefault.jpg",
        slug: "architecting-curiosity",
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
            text: "Recording",
            href: "https://youtu.be/Q0pFsHaCpqs",
          },
          {
            text: "Notes",
            href:
              "https://docs.google.com/document/d/1wXD9D_9ulGg0YoVGjvoxIjHIoA2ZP4jipH8iCOUpfPc/edit",
          },
          {
            text: "Slides",
            href:
              "https://drive.google.com/file/d/1ZQkypNMTClTv-OMa7L5sJcg4nxyiLSQV/view",
          },
          {
            text: "De Ciculaire",
            href:
              "https://www.haykranen.nl/circulaire/",
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
