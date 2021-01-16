<template>
  <article class="tl bg-near-white br3 hover-shadow-raise">
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
              <span class="f5 fw4 o-50 tr mt2">{{ date }}</span>
            </div>
            <TagPill class="absolute top--1 ml-1" borderColour="#fff">{{
              type
            }}</TagPill>
          </div>
          <div class="pa3">
            <div class="flex flex-wrap mb2">
              <div class="mr3">
                <h3 v-if="hasHappened" class="f5 fw4 o-60">shared by</h3>
                <h3 v-else class="f5 fw4 o-60">like to share</h3>
                <ProfilePicList
                  :profilePics="sharers"
                  borderColorClass="b--near-white"
                />
              </div>
              <div>
                <h3 v-if="hasHappened" class="f5 fw4 o-60">learned by</h3>
                <h3 v-else class="f5 fw4 o-60">like to learn</h3>
                <ProfilePicList
                  :profilePics="learners"
                  borderColorClass="b--near-white"
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
import ProfilePicList from "~/components/ProfilePicList.vue";
export default {
  props: {
    title: { type: String, default: "Title" },
    type: { type: String, default: "type" },
    date: { type: String, default: "date" },
    imageSrc: { type: String },
    path: { type: String },
    learners: { type: Array, default: () => [] },
    sharers: { type: Array, default: () => [] },
  },
  components: { ProfilePic, TagPill, ProfilePicList },
  computed: {
    hasHappened() {
      let now = new Date();
      return new Date(this.date) < now;
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
