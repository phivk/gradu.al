<template>
  <article class="tl bg-gray-200 rounded-lg shadow-4 hover-shadow-raise">
    <NuxtLink :to="session.path" class="link">
      <div class="flex flex-column">
        <div class="w-100 aspect-ratio aspect-ratio--16x9">
          <!-- client-only to fix Mismatching childNodes vs. VNodes error  -->
          <client-only>
            <font-awesome-icon
              v-if="hasRecording"
              class="absolute right-0 m-4 text-white z-10 filter drop-shadow-lg"
              :icon="['fas', 'video']"
            />
          </client-only>
          <img
            :src="session.imageSrc"
            :alt="session.title"
            class="aspect-ratio--object objfit-cover rounded-t-lg br--top z-0"
          />
        </div>
        <div class="relative flex flex-column w-100 text-black">
          <div class="p-2 sm:p-3 lg:p-4 bg-white">
            <div class="flex items-center justify-between flex-wrap">
              <h3 class="font-bold text-sm sm:text-base lg:text-lg mt-2 mr-2">
                {{ session.title }}
              </h3>
              <span
                class="text-xs sm:text-sm lg:text-base font-normal opacity-50 tr mt-2"
              >
                {{ dateFormatted }}
              </span>
            </div>
            <TagPill
              class="text-xs sm:text-sm lg:text-base absolute top--1 ring-4 ring-white"
            >
              {{ session.type }}
            </TagPill>
          </div>
          <div class="p-2 sm:p-3 lg:p-4">
            <div class="flex flex-wrap">
              <!-- client-only to fix Mismatching childNodes vs. VNodes error  -->
              <client-only>
                <div
                  v-if="session.sharerNames.length"
                  class="mr-2 sm:mr-3 md:mr-4 mb-2"
                >
                  <h4
                    class="text-xs sm:text-sm lg:text-base mt-0 font-normal opacity-60"
                  >
                    Shared by
                  </h4>
                  <ProfileAvatarList
                    :profileNames="session.sharerNames"
                    :itemClasses="['ring-4', 'ring-gray-200']"
                    class="text-xs sm:text-sm lg:text-base"
                  />
                </div>
                <div v-if="session.learnerNames.length" class="">
                  <h4
                    class="text-xs sm:text-sm lg:text-base mt-0 font-normal opacity-60"
                  >
                    {{ hasHappened ? "Learned by" : "Like to learn" }}
                  </h4>
                  <ProfileAvatarList
                    :profileNames="session.learnerNames"
                    :itemClasses="['ring-4', 'ring-gray-200']"
                    class="text-xs sm:text-sm lg:text-base"
                  />
                </div>
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
<script>
import { formatDate, isValidDate, hasHappened } from "~/util/date";

export default {
  props: {
    session: { type: Object, default: () => {} },
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
    hasHappened() {
      return hasHappened(this.session.date);
    },
    hasRecording() {
      return (
        (this.session.youtubeRecordingID || this.session.panoptoRecordingID) !==
        undefined
      );
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
