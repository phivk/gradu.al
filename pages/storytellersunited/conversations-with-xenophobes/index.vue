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
              <ul class="list pa0 mt1">
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
            <div class="video-wrapper" v-if="youtubeRecordingResource">
              <iframe
                width="560"
                height="315"
                :src="`https://www.youtube-nocookie.com/embed/${youtubeRecordingID}`"
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
        title: "How to handle conversations with xenophobes and racists?",
        type: "lunch & learn",
        date: "30 Sept 2020",
        description:
          "During a this session we will share some tips and insights from our experience (and backed by research). 👉 What to do when you hear a racist comment? 👉🏽 Where do these come from? 👉🏿 How to engage? 👉 What works best in these conversations? 👉🏽 When talking about diversity, where are the limits of embracing other people's views? 👉🏿 How not to go insane when you discover the world is full of xenophobes and racists?",
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
  computed: {
    youtubeRecordingResource() {
      return this.session.resources.find((r) => r.href.includes("youtu"));
    },
    youtubeRecordingID() {
      if (this.youtubeRecordingResource) {
        let parts = this.youtubeRecordingResource.href.split(/[/=]/)
        return parts[parts.length - 1];
      }
      else {
        return undefined;
      }
    }
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
