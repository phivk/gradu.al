<template>
  <div class="bg-su-washed-orange">
    <main class="pa3 pa4-m pa5-l mw9 center">
      <div class="flex justify-end">
        <div class="w-100 w-80-l mt0 mb4 mb5-ns">
          <TagPill class="ml-2" borderColour="#fdecce">{{
            session.type
          }}</TagPill>
          <h1 class="f2 f1-l lh-title mt2 mb4">
            {{ session.title }}
          </h1>
          <p class="measure f4">{{ session.description }}</p>
        </div>
      </div>
      <div class="flex flex-wrap f5 fw4 mb4">
        <div class="w-100 w-20-l pr3 pr4-m pr5-l mb3 fw6">
          <p>
            {{ session.date }}
          </p>
        </div>
        <div class="w-100 w-80-l flex flex-wrap flex-nowrap-ns">
          <div class="mb2 flex-shrink-0 pr3 pr4-m pr5-l">
            <p>
              Learned by
              <ProfilePicList
                :profilePics="hydrateMembers(session.learnerNames)"
                borderColorClass="su-washed-orange"
              />
            </p>
          </div>
          <div class="mb2 flex-shrink-0 pr3 pr4-m pr5-l">
            <p>
              Shared by
              <ProfilePicList
                :profilePics="hydrateMembers(session.sharerNames)"
                borderColorClass="su-washed-orange"
              />
            </p>
          </div>
          <div class="mb2 pr3">
            <p>
              Resources
              <ul class="list pa0">
                <li class="di" v-for="(resource, index) in session.resources">
                  <span v-if="index !== 0">, </span>
                  <a class="dark-green" :href="resource.href" target="_blank">{{
                    resource.text
                  }}</a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <div class="w-100 w-80-l mt0 mb4 mb5-ns">
          <div class="mw8">
            <div class="video-wrapper" v-if="hasYoutubeRecording">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/vL097Tge1_A"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <img
              v-else
              class="db w-100"
              :src="session.imageSrc"
              :alt="session.title"
            />
          </div>
        </div>
      </div>
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
  layout: "storytellersUnited",
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
        imageSrc: "https://i.ytimg.com/vi/vL097Tge1_A/maxresdefault.jpg",
        link: "https://youtu.be/vL097Tge1_A",
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
  computed: {
    hasYoutubeRecording() {
      return this.session.resources.some((r) => r.href.includes("youtu"));
    },
  },
};
</script>

<style scoped>
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.flex-shrink-0 {
  flex-shrink: 0;
}
</style>
