<template>
  <div class="bg-color-bg">
    <social-head
      :title="session.title"
      :description="description"
      :image="session.imageSrc"
    />
    <main class="pa3 pa4-m pa5-l mw9 center">
      <div class="flex justify-end">
        <div class="w-100 w-80-l mt0 mb2 mb3-ns">
          <TagPill class="-ml-2" :borderColour="bgColor">{{
            session.type
          }}</TagPill>
          <h1 class="text-4xl md:text-5xl font-bold lh-title mt2 mb4">
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
        <div class="w-100 w-20-l pr3 mb3 f4">
          <div>
            <p class="font-bold mb3">
              {{ dateFormatted }}
            </p>
            <p class=" mb3 lh-copy">
              <span class="mr1">{{ timeFormatted }}</span>
              <span
                class="mr1"
                v-tooltip="{ content: timezone, trigger: 'hover click focus' }"
                >🌐</span
              >
              <span>{{ session.durationInMinutes }}&nbsp;min</span>
            </p>
            <a
              v-if="session.cta"
              :href="session.cta.href"
              target="_blank"
              class="font-bold f4 link br3 pa2 tc dib mr3 white bg-color-accent"
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
        <div class="w-100 w-80-l flex flex-wrap flex-nowrap-ns f5 ">
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
              <span>{{ hasHappened ? "Learned by" : "Like to learn" }}</span>
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
                  <a class="underline hover:no-underline color-accent" :href="resource.href" target="_blank">{{
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
import SocialHead from "./SocialHead.vue";
import {
  formatDate,
  isValidDate,
  hasHappened,
  formatTime,
  getTimezone,
} from "~/util/date";
import Vue from "vue";
import VTooltip from "v-tooltip";
Vue.use(VTooltip);

export default {
  components: {
    TagPill,
    ProfileAvatarList,
    SocialHead,
  },
  props: {
    session: { type: Object, default: () => {} },
    members: { type: Object, default: () => {} },
    bgColor: { type: String, default: "#FFF" },
  },
  computed: {
    description() {
      return this.session.description
        ? this.session.description
        : this.session.title
    },
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

<style lang="scss">
/* 
  v-tooltip styling 
  https://github.com/Akryum/v-tooltip#style-examples
*/
.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden="true"] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden="false"] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}
</style>
