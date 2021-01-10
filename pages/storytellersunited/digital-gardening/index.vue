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
          <p class="measure f4 ws-pre-wrap">{{ session.description }}</p>
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
              <span v-if="hasHappened">Learned by</span>
              <span v-else >Like to learn</span>
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
          <div v-if="resources" class="mb2 pr3">
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
  computed: {
    hasHappened() {
      let now = new Date();
      return new Date(this.date) < now;
    },
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
