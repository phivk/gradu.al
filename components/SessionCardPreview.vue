<template>
  <article class="tl bg-light-gray br3 shadow-4 hover-shadow-raise">
    <nuxt-link :to="session.path" class="link black">
      <div class="flex flex-column">
        <div class="w-100 aspect-ratio aspect-ratio--16x9">
          <img
            :src="session.imageSrc"
            :alt="session.title"
            class="aspect-ratio--object objfit-cover br3 br--top z-0"
          />
        </div>
        <div class="relative flex flex-column w-100">
          <div class="pa3 bg-white">
            <div class="flex items-center justify-between flex-wrap mb2">
              <h3 class="f4 lh-title mt2 mr2">
                {{ session.title }}
              </h3>
              <span class="f5 fw4 o-50 tr mt2">{{ dateFormatted }}</span>
            </div>
            <TagPill class="absolute top--1 ml-1" borderColour="#fff">{{
              session.type
            }}</TagPill>
          </div>
          <div class="pa3">
            <div class="flex flex-wrap mb2">
              <div v-if="session.sharerNames" class="mr3">
                <h3 class="f5 fw4 o-60">Shared by</h3>
                <ProfileAvatarList
                  :profileNames="session.sharerNames"
                  borderColor="#EEEEEE"
                />
              </div>
              <div v-if="session.learnerNames">
                <h3 class="f5 fw4 o-60">
                  {{ hasHappened ? "Learned by" : "Like to learn" }}
                </h3>
                <ProfileAvatarList
                  :profileNames="session.learnerNames"
                  borderColor="#EEEEEE"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
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
  },
  methods: {
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
