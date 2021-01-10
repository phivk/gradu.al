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
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.session.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.session.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.session.imageSrc,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$route.fullPath,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    };
  },
  components: {
    SessionSection,
  },
  data() {
    return {
      session: {
        title: "Digital Gardens: What are they and how can I start one?",
        type: "salon",
        date: "TBC",
        description:
          "The term `digital garden` started to get used more widely in 2020. Maybe our inability to go outside and travel as much led us to think about our digital lives with a more horticultural lens?\n\nWhereas a blog tends to be organised strictly chronologically and older thoughts get displaced by new, a digital garden works to curate and build on your thinking. A post might be a new idea (seed), a growing idea (a sapling) or a fully developed thought (a tree). Some of these trees might be used as starting points for other  projects and some of the seed might cross-pollinate to make something new.\n\nIn this session, we'll look more at defining a digital garden, explore some examples with an eye on what value they are adding (to the world and the gardener) and look at some ways to get started.\n\nThis will be a mix of exposition, Internet trail, discussion and top tips.",
        imageSrc: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80",
        slug: "digital-gardening",
        cta: "Share availability",
        learnerNames: [
          "1coko",
          "Amanda Curtis",
          "Erwin",
          "Julia Scott-Stevenson",
          "Marsha",
          "Pim",
        ],
        sharerNames: ["Kevin"],
        resources: [],
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
