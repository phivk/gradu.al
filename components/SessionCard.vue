<template>
  <article class="tl bg-gray-200 rounded shadow-4 hover-shadow-raise">
    <NuxtLink :to="session.path" class="link">
      <div class="flex flex-column">
        <div class="w-100 aspect-ratio aspect-ratio--16x9">
          <font-awesome-icon
            v-if="hasRecording"
            class="absolute right-0 m-4 text-white z-10 filter drop-shadow-lg"
            :icon="['fas', 'video']"
          />
          <img
            :src="session.imageSrc"
            :alt="session.title"
            class="aspect-ratio--object objfit-cover rounded br--top z-0"
          />
        </div>
        <div class="relative flex flex-column w-100 text-black">
          <div class="p-4 bg-white">
            <div class="flex items-center justify-between flex-wrap mb-2">
              <h3 class="font-bold text-xl lh-title mt-2 mr-2">
                {{ session.title }}
              </h3>
              <span class="text-base font-normal opacity-50 tr mt-2">
                {{ dateFormatted }}
              </span>
            </div>
            <TagPill class="absolute top--1 -ml-1 ring-4 ring-white">
              {{ session.type }}
            </TagPill>
          </div>
          <div class="p-4">
            <div class="flex flex-wrap mb-2">
              <div v-if="session.sharerNames.length" class="mr-4">
                <h3 class="text-base font-normal opacity-60">Shared by</h3>
                <ProfileAvatarList
                  :profileNames="session.sharerNames"
                  :itemClasses="['ring-4', 'ring-gray-200']"
                />
              </div>
              <div v-if="session.learnerNames.length">
                <h3 class="text-base font-normal opacity-60">
                  {{ hasHappened ? "Learned by" : "Like to learn" }}
                </h3>
                <ProfileAvatarList
                  :profileNames="session.learnerNames"
                  :itemClasses="['ring-4', 'ring-gray-200']"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
<script>
import ProfilePic from "~/components/ProfilePic.vue";
import TagPill from "~/components/TagPill.vue";
import ProfileAvatarList from "~/components/ProfileAvatarList.vue";
import { formatDate, isValidDate, hasHappened } from "~/util/date";

export default {
  props: {
    session: { type: Object, default: () => {} },
  },
  components: { ProfilePic, TagPill, ProfileAvatarList },
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
    hasHappened() {
      return hasHappened(this.session.date);
    },
    hasRecording() {
      return this.session.youtubeRecordingID || this.session.panoptoRecordingID;
    },
  },
};
</script>
<style scoped>
.objfit-cover {
  object-fit: cover;
}
.hover-shadow-raise {
  transition: transform 200ms ease 0s, box-shadow 200ms ease 0s;
}
.hover-shadow-raise:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 8px 32px -12px;
  transform: translate(0px, -8px);
}
</style>
