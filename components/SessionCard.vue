<template>
  <article class="tl bg-near-white br3 shadow-5">
    <div class="flex flex-column flex-row-l">
      <div class="w-100 w-40-l">
        <a
          :href="link"
          :title="cta"
          target="_blank"
          class="db no-underline black w-100 h-100"
        >
          <img
            :src="imageSrc"
            :alt="title"
            class="db w-100 h-100 br3  br--top-nl br--left-l objfit-cover"
          />
        </a>
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
          <p class="mb2-l f5 o-80">{{ description }}</p>
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
              <ProfilePicList
                :profilePics="sharers"
                borderColorClass="b--near-white"
              />
            </div>
          </div>
          <div v-if="resources.length" class="mb3 mb0-l">
            <h3 class="f5 fw4 o-60">resources</h3>
            <ul class="list pa0">
              <li class="di" v-for="(resource, index) in resources">
                <span v-if="index !== 0">, </span>
                <a class="dark-green" :href="resource.href" target="_blank">{{
                  resource.text
                }}</a>
              </li>
            </ul>
          </div>
          <div class="absolute-l bottom-0-l right-0-l mr3-l mb3-l">
            <a
              v-if="icsFileSrc"
              :href="icsFileSrc"
              target="_blank"
              class="dark-green mr2"
              >↓ .ics</a
            >
            <a
              :href="link"
              target="_blank"
              class="f5 link br3 ph2 pv1 dib white bg-dark-green"
              >{{ cta }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import TagPill from "~/components/TagPill.vue";
import ProfilePicList from "~/components/ProfilePicList.vue";
export default {
  props: {
    title: { type: String, default: "Title" },
    type: { type: String, default: "type" },
    date: { type: String, default: "date" },
    description: { type: String },
    imageSrc: { type: String },
    link: { type: String },
    cta: { type: String },
    learners: { type: Array, default: () => [] },
    sharers: { type: Array, default: () => [] },
    resources: { type: Array, default: () => [] },
    icsFileSrc: { type: String },
  },
  components: { TagPill, ProfilePicList },
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
</style>