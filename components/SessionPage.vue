<template>
  <div class="bg-color-bg">
    <main class="pa3 pa4-m pa5-l mw9 center">
      <div class="flex justify-end">
        <div class="w-100 w-80-l mt0 mb2 mb3-ns">
          <TagPill class="ml-2" :borderColour="bgColor">{{
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
                :src="
                  `https://www.youtube-nocookie.com/embed/${youtubeRecordingID}`
                "
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
      <div class="flex flex-wrap mb3">
        <div class="w-100 w-20-l pr3 mb3 f4 fw6">
          <div>
            <p class="mb3">
              {{ dateFormatted }}
            </p>
            <p class="fw3 mb3 lh-copy">
              <span>{{ timeFormatted }}</span>
              <span>({{ timezone }}), </span>
              <span>{{ session.durationInMinutes }}&nbsp;min</span>
            </p>
            <a
              v-if="session.cta"
              :href="session.cta.href"
              target="_blank"
              class="f4 link br3 pa2 tc dib mr3 white bg-color-accent"
              >{{ session.cta.text }}</a
            >
            <a
              v-if="session.icsFileSrc && !hasHappened"
              :href="session.icsFileSrc"
              target="_blank"
              class="dib mt3 color-accent ws-pre-wrap"
              >↓ .ics file</a
            >
          </div>
        </div>
        <div class="w-100 w-80-l flex flex-wrap flex-nowrap-ns f5 fw3">
          <div
            v-if="session.sharerNames"
            class="mb2 flex-shrink-0 pr3 pr4-m pr5-l"
          >
            <p>
              Shared by
              <ProfileAvatarList
                :profileNames="session.sharerNames"
                :borderColor="bgColor"
              />
            </p>
          </div>
          <div
            v-if="session.learnerNames"
            class="mb2 flex-shrink-0 pr3 pr4-m pr5-l"
          >
            <p>
              <span>{{ hasHappened ? "Learned by" : "Like to learn"}}</span>
              <ProfileAvatarList
                :profileNames="session.learnerNames"
                :borderColor="bgColor"
              />
            </p>
          </div>
          <div v-if="session.resources" class="mb2 pr3">
            <p>
              Resources
              <ul class="list pa0 mt1">
                <li class="di" v-for="(resource, index) in session.resources">
                  <span v-if="index !== 0">, </span>
                  <a class="color-accent" :href="resource.href" target="_blank">{{
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
import TagPill from "~/components/TagPill.vue";
import ProfileAvatarList from "~/components/ProfileAvatarList.vue";
import {
  formatDate,
  isValidDate,
  hasHappened,
  formatTime,
  getTimezone,
} from "~/util/date";

export default {
  components: {
    TagPill,
    ProfileAvatarList,
  },
  props: {
    session: { type: Object, default: () => {} },
    members: { type: Object, default: () => {} },
    bgColor: { type: String, default: "#FFF" },
  },
  computed: {
    sessionDate() {
      return this.session.dateTime
        ? new Date(this.session.dateTime)
        : new Date(this.session.date);
    },
    dateFormatted() {
      return isValidDate(this.sessionDate)
        ? formatDate(this.sessionDate)
        : "TBC";
    },
    timeFormatted() {
      return isValidDate(this.sessionDate)
        ? formatTime(this.sessionDate)
        : "TBC";
    },
    timezone() {
      return getTimezone();
    },
    hasHappened() {
      return hasHappened(this.session.date);
    },
    youtubeRecordingResource() {
      if (this.session.resources) {
        return this.session.resources.find((r) => r.href.includes("youtu"));
      } else {
        return undefined;
      }
    },
    youtubeRecordingID() {
      if (this.youtubeRecordingResource) {
        let parts = this.youtubeRecordingResource.href.split(/[/=]/);
        return parts[parts.length - 1];
      } else {
        return undefined;
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
