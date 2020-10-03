<template>
  <article class="tl bg-white-80 br3 ba-hover-dark-blue">
    <div class="flex flex-column flex-row-l">
      <div class="w-100 w-40-l">
        <a
          :href="link"
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
      <div class="w-100 w-60-l pa3">
        <div class="flex items-center justify-between flex-wrap">
          <span
            class="f7 bg-light-green dark-green ph2 pv1 mv1 dib br-pill"
            >{{ type }}</span
          >
          <span class="o-70">{{ date }}</span>
        </div>
        <h3 class="mt1 lh-title">
          {{ title }}
        </h3>
        <div class="lh-copy measure mt2">
          <h3 class="f5">learned by</h3>
          <ul class="flex list pa0 ml2">
            <li v-for="learner in learners" class="ml-2">
              <img
                class="br-100 w2 dib ba b--white bw2"
                :src="learner.profilePic"
                :alt="`profile picture of ${learner.userName}`"
                :title="learner.userName"
              />
            </li>
          </ul>
          <h3 class="f5">shared by</h3>
          <ul class="flex list pa0 ml2">
            <li v-for="sharer in sharers" class="ml-2">
              <img
                class="br-100 w2 dib ba b--white bw2"
                :src="sharer.profilePic"
                :alt="`profile picture of ${sharer.userName}`"
                :title="sharer.userName"
              />
            </li>
          </ul>
          <h3 class="f5">resources</h3>
          <ul class="list pa0">
            <li
              class="di"
              v-for="(resource, index) in resources"
            >
              <span v-if="index !== 0">, </span>
              <a class="dark-green f6" :href="resource.href">{{
                resource.text
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    title: { type: String, default: "Title" },
    type: { type: String, default: "type" },
    date: { type: String, default: "date" },
    imageSrc: { type: String },
    link: { type: String },
    learners: { type: Array, default: [] },
    sharers: { type: Array, default: [] },
    resources: { type: Array, default: [] },
  },
};
</script>
