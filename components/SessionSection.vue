<template>
  <div class="bg-su-washed-orange">
    <main class="pa3 pa4-m pa5-l mw9 center">
      <div class="flex justify-end">
        <div class="w-100 w-80-l mt0 mb2 mb3-ns">
          <TagPill class="ml-2" borderColour="#fdecce">{{
            type
          }}</TagPill>
          <h1 class="f2 f1-l lh-title mt2 mb4">
            {{ title }}
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
              :src="imageSrc"
              :alt="title"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap f5 fw4 mb3">
        <div class="w-100 w-20-l pr3 mb3 fw6">
          <div v-if="date==='TBC'">
            <a
              :href="cta.href"
              target="_blank"
              class="f4 link br3 pa2 tc dib white bg-dark-green"
              >{{ cta.text }}</a
            >
          </div>
          <div v-else>
            <p class="f4 mb3">
              {{ date }}
            </p>
            <a
              :href="cta.href"
              target="_blank"
              class="f4 link br3 pa2 tc dib white bg-dark-green"
              >{{ cta.text }}</a
            >
            <a
              v-if="icsFileSrc"
              :href="icsFileSrc"
              target="_blank"
              class="db mt3 dark-green"
              >↓ .ics</a
            >
          </div>
        </div>
        <div class="w-100 w-80-l flex flex-wrap flex-nowrap-ns">
          <div class="mb2 flex-shrink-0 pr3 pr4-m pr5-l">
            <p>
              <span v-if="hasHappened">Learned by</span>
              <span v-else >Like to learn</span>
              <ProfilePicList
                :profilePics="learners"
                borderColorClass="su-washed-orange"
              />
            </p>
          </div>
          <div class="mb2 flex-shrink-0 pr3 pr4-m pr5-l">
            <p>
              Shared by
              <ProfilePicList
                :profilePics="sharers"
                borderColorClass="su-washed-orange"
              />
            </p>
          </div>
          <div v-if="resources.length" class="mb2 pr3">
            <p>
              Resources
              <ul class="list pa0 mt1">
                <li class="di" v-for="(resource, index) in resources">
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
          <p class="measure f4 ws-pre-wrap">{{ description }}</p>
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
    title: { type: String, default: "Title" },
    type: { type: String, default: "type" },
    date: { type: String, default: "date" },
    description: { type: String },
    imageSrc: { type: String },
    learners: { type: Array, default: () => [] },
    sharers: { type: Array, default: () => [] },
    resources: { type: Array, default: () => [] },
    cta: { type: Object, default: {
      text: "Join the conversation",
      href: "https://app.slack.com/client/T14SUV8BA/C016WE6ADA9",
    }},
    icsFileSrc: { type: String },
  },
  data() {
    return {
      members: [],
    };
  },
  computed: {
    hasHappened() {
      let now = new Date();
      return new Date(this.date) < now;
    },
    youtubeRecordingResource() {
      return this.resources.find((r) => r.href.includes("youtu"));
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
