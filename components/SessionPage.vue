<template>
  <div class="bg-su-washed-orange">
    <main class="pa3 pa4-m pa5-l mw9 center">
      <div class="flex justify-end">
        <div class="w-100 w-80-l mt0 mb2 mb3-ns">
          <TagPill class="ml-2" borderColour="#fdecce">{{
            session.type
          }}</TagPill>
          <h1 class="f2 f1-l lh-title mt2 mb4">
            {{ session.title }}
          </h1>
          <div class="w-100 w-80-l">
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
              class="db mb3 mb4-ns"
              :src="session.imageSrc"
              :alt="session.title"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap f5 fw4 mb3">
        <div class="w-100 w-20-l pr3 mb3 fw6">
          <div>
            <p class="f4 mb3">
              {{ dateFormatted }}
            </p>
            <a
              v-if="session.cta"
              :href="session.cta.href"
              target="_blank"
              class="f4 link br3 pa2 tc dib mr3 white bg-dark-green"
              >{{ session.cta.text }}</a
            >
            <a
              v-if="session.icsFileSrc && !hasHappened"
              :href="session.icsFileSrc"
              target="_blank"
              class="dib mt3 dark-green ws-pre-wrap"
              >↓ .ics file</a
            >
          </div>
        </div>
        <div class="w-100 w-80-l flex flex-wrap flex-nowrap-ns">
          <div class="mb2 flex-shrink-0 pr3 pr4-m pr5-l">
            <p>
              Shared by
              <ProfilePicList
                :profilePics="hydrateMembers(session.sharerNames)"
                borderColorClass="su-washed-orange"
              />
            </p>
          </div>
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
          <div v-if="session.resources.length" class="mb2 pr3">
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
          <nuxt-content class="measure f4" :document="session" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import _ from "lodash";
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
    TagPill,
    ProfilePicList,
  },
  props: {
    session: { type: Object, default: () => {} },
    members: { type: Array, default: () => [] },
  },
  computed: {
    dateFormatted() {
      let dt = new Date(this.session.date);
      if (this.isValidDate(dt)) {
        return dt.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
      } else {
        return "TBC";
      }
    },
    hasHappened() {
      let now = new Date();
      return new Date(this.session.date) < now;
    },
    youtubeRecordingResource() {
      if (this.session.resources) {
        return this.session.resources.find((r) => r.href.includes("youtu"));
      }
      else {
        return undefined
      }
    },
    youtubeRecordingID() {
      if (this.youtubeRecordingResource) {
        let parts = this.youtubeRecordingResource.href.split(/[/=]/)
        return parts[parts.length - 1];
      }
      else {
        return undefined;
      }
    },
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
    isValidDate(d) {
      if (Object.prototype.toString.call(d) === "[object Date]") {
        // it is a date
        if (isNaN(d.getTime())) {
          // date is not valid
          return false;
        } else {
          // date is valid
          return true;
        }
      } else {
        // not a date
        return false;
      }
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
