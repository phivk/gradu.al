<template>
  <div>
    <SocialHead
      :title="session.title"
      :description="description"
      :image="session.imageSrc"
    />
    <main class="mw9 mx-auto">
      <div class="flex justify-end">
        <div class="w-100 w-80-l mt-0 mb-2 sm:mb-4">
          <div class="w-100 w-80-l">
            <div class="flex justify-between my-4">
              <TagPill>
                {{session.type}}
              </TagPill>
              <a :href="session.dir" class="text-lg font-bold opacity-50 hover:opacity-100">
                {{session.season}}
              </a>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold lh-title my-4">
              {{ session.title }}
            </h1>
            <div class="video-wrapper" v-if="session.youtubeRecordingID">
              <iframe
                width="560"
                height="315"
                :src="
                  `https://www.youtube-nocookie.com/embed/${session.youtubeRecordingID}`
                "
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="video-wrapper" v-else-if="session.panoptoRecordingID">
              <iframe :src="`https://mozilla.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=${session.panoptoRecordingID}&autoplay=false&offerviewer=false&showtitle=true&showbrand=false&captions=true&interactivity=none`" height="1080" width="1920" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>
            </div>
            <img
              v-else
              class="db mb-4 sm:mb-8"
              :src="session.imageSrc"
              :alt="session.title"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap mb-4">
        <div class="w-100 w-20-l pr-4 mb-4 text-lg">
          <div>
            <p class="font-bold mb-4">
              {{ dateFormatted }}
            </p>
            <p class=" mb-4 lh-copy">
              <span class="mr-1">{{ timeFormatted }}</span>
              <span
                class="mr-1"
                v-tooltip="{ content: timezone, trigger: 'hover click focus' }"
                >🌐</span
              >
              <span>{{ session.durationInMinutes }}&nbsp;min</span>
            </p>
            <a
              v-if="session.cta && session.cta.text !==''"
              :href="session.cta.href"
              target="_blank"
              class="font-bold text-lg link rounded p-2 text-center dib mr-4 text-on-primary bg-secondary"
              >{{ session.cta.text }}</a
            >
            <a
              v-if="!hasHappened && calendarEvent"
              :href="calendarLocation"
              :download="calendarFilename"
              class="dib mt3 color-accent">
                ↓ .ics file
            </a>
            <br/>
            <a
                v-if="!hasHappened && calendarEvent"
              :href="googleCalendarLink"
              target="_blank"
              class="dib mt3 color-accent"
            >
              Add to Google Calendar
            </a>
          </div>
        </div>
        <div class="w-100 w-80-l flex flex-wrap flex-nowrap-ns f5 ">
          <div
            v-if="session.sharerNames.length"
            class="mb-2 flex-shrink-0 pr-4 sm:pr-8 lg:pr-16"
          >
            <p>
              Shared by
              <ProfileAvatarList
                :profileNames="session.sharerNames"
                :itemClasses="['ring-4', 'ring-background']"
              />
            </p>
          </div>
          <div
            v-if="session.learnerNames.length"
            class="mb-2 flex-shrink-0 pr-4 sm:pr-8 lg:pr-16"
          >
            <p>
              <span>{{ hasHappened ? "Learned by" : "Like to learn" }}</span>
              <ProfileAvatarList
                :profileNames="session.learnerNames"
                :itemClasses="['ring-4', 'ring-background']"
              />
            </p>
          </div>
          <div v-if="session.resources.length" class="mb-2 pr-4">
            <p>
              Resources
              <ul class="list p-0 mt-1">
                <li class="di" :key="index" v-for="(resource, index) in session.resources">
                  <span v-if="index !== 0">, </span>
                  <a class="underline hover:no-underline text-text" :href="resource.href" target="_blank">{{
                    resource.text
                  }}</a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <div class="w-100 w-80-l mt-0 mb-8 lg:mb-16">
          <NuxtContent class="max-w-prose text-lg" :document="session" />
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import {
  formatDate,
  isValidDate,
  hasHappened,
  formatTime,
  getTimezone,
  getICSString,
  getGoogleCalendarURL,
} from "~/util/date";
import Vue from "vue";
import VTooltip from "v-tooltip";
import { v4 as uuidv4 } from "uuid";
Vue.use(VTooltip);

export default {
  props: {
    session: { type: Object, default: () => {} },
    members: { type: Object, default: () => {} },
    bgColor: { type: String, default: "#FFF" },
    calendarEvent: { type: Boolean, default: true },
  },
  head() {
    if (this.paymentPointer) {
      return {
        meta: [
          { name: "monetization", content: this.paymentPointer },
        ]
      }
    }
  },
  computed: {
    description() {
      return this.session.description
        ? this.session.description
        : this.session.title;
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
      return hasHappened(this.sessionDate);
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
    calendarLocation() {
      const ICSString = getICSString(this.sessionDate, this.session.title, this.session.durationInMinutes)
      return `data:text/plain;charset=utf-8,${encodeURIComponent(
        ICSString
      )}`;
    },
    calendarFilename() {
      return `${this.session.title.toLowerCase().replaceAll(" ", "_")}.ics`;
    },
    googleCalendarLink() {
      return getGoogleCalendarURL(
        this.session.title, 
        this.session.description, 
        this.session.dateTime, 
        this.session.durationInMinutes
      );
    },
    paymentPointer() {
      return this.session.paymentPointer || process.env.DEFAULT_PAYMENT_POINTER || null
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
