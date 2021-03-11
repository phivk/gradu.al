<template>
  <article class="tl bg-light-gray br3 shadow-4 hover-shadow-raise">
    <nuxt-link :to="path" class="link black">
      <div class="flex flex-column">
        <div class="w-100 aspect-ratio aspect-ratio--16x9">
          <img
            :src="imageSrc"
            :alt="title"
            class="aspect-ratio--object objfit-cover br3 br--top z-0"
          />
        </div>
        <div class="relative flex flex-column w-100">
          <div class="pa3 bg-white">
            <div class="flex items-center justify-between flex-wrap mb2">
              <h3 class="f4 lh-title mt2 mr2">
                {{ title }}
              </h3>
              <span class="f5 fw4 o-50 tr mt2">{{ dateFormatted }}</span>
            </div>
            <TagPill class="absolute top--1 ml-1" borderColour="#fff">{{
              type
            }}</TagPill>
          </div>
          <div class="pa3">
            <div class="flex flex-wrap mb2">
              <div v-if="sharerNames" class="mr3">
                <h3 class="f5 fw4 o-60">Shared by</h3>
                <ProfileAvatarList
                  :profileNames="sharerNames"
                  borderColor="#EEEEEE"
                />
              </div>
              <div v-if="learnerNames">
                <h3 class="f5 fw4 o-60">
                  {{ hasHappened ? "Learned by" : "Like to learn" }}
                </h3>
                <ProfileAvatarList
                  :profileNames="learnerNames"
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
export default {
  props: {
    title: { type: String, default: "Title" },
    type: { type: String, default: "type" },
    date: { type: String, default: "date" },
    imageSrc: { type: String },
    path: { type: String },
    learnerNames: { type: Array, default: () => [] },
    sharerNames: { type: Array, default: () => [] },
  },
  components: { ProfilePic, TagPill, ProfileAvatarList },
  computed: {
    hasHappened() {
      let now = new Date();
      return new Date(this.date) < now;
    },
    dateFormatted() {
      let dt = new Date(this.date);
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
