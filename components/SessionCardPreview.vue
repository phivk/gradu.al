<template>
  <article class="tl bg-near-white br3 hover-shadow-raise">
    <nuxt-link :to="slug" class="link">
      <div class="flex flex-column flex-row-l">
        <div class="w-100 w-40-l">
          <img
            :src="imageSrc"
            :alt="title"
            class="db w-100 h-100 br3  br--top-nl br--left-l objfit-cover"
          />
        </div>
        <div class="relative flex flex-column w-100 w-60-l">
          <div class="pa3 bg-white br3-l br--top-right-l">
            <div
              class="flex items-center justify-between flex-wrap flex-nowrap-l mb2 mb3-l"
            >
              <h3 class="f4 f3-l lh-title mt2">
                {{ title }}
              </h3>
              <span class="f5 fw4 o-50 tr mt2 flex-shrink-0">{{ date }}</span>
            </div>
            <TagPill
              class="absolute top--1 top-auto-l ml-1"
              borderColour="#fff"
              >{{ type }}</TagPill
            >
          </div>
          <div class="pa3 pt4-l">
            <div class="flex flex-wrap mb2">
              <div class="mr3">
                <h3 v-if="hasHappened" class="f5 fw4 o-60">learned by</h3>
                <h3 v-else class="f5 fw4 o-60">like to learn</h3>
                <ProfilePicList
                  :profilePics="learners"
                  borderColorClass="b--near-white"
                />
              </div>
              <div>
                <h3 v-if="hasHappened" class="f5 fw4 o-60">shared by</h3>
                <h3 v-else class="f5 fw4 o-60">like to share</h3>
                <ul class="flex list pa0 ml1">
                  <li v-for="sharer in sharers" class="ml-2">
                    <ProfilePicList
                      :profilePics="sharers"
                      borderColorClass="b--near-white"
                    />
                  </li>
                </ul>
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
    slug: { type: String },
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
@media (max-width: 60em) {
  .br--top-nl {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
@media (min-width: 60em) {
  .top-auto-l {
    top: auto;
  }
  .br--top-right-l {
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}
.objfit-cover {
  object-fit: cover;
}
.flex-shrink-0 {
  flex-shrink: 0;
}
.hover-shadow-raise {
  transition: transform 200ms ease 0s, box-shadow 200ms ease 0s;
}
.hover-shadow-raise:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 8px 32px -12px;
  transform: translate(0px, -8px);
}
</style>
