<template>
  <section class="mv5">
    <slot></slot>
    <ul class="list pa0 ma0 flex flex-wrap justify-center">
      <li
        v-for="session in sessions"
        class="w-100 w-50-m w-third-l mw6 pa3"
      >
        <SessionCardPreview
          :title="session.title"
          :type="session.type"
          :date="session.date"
          :imageSrc="session.imageSrc"
          :path="session.path"
          :learnerNames="session.learnerNames"
          :sharerNames="session.sharerNames"
        />
      </li>
    </ul>
  </section>
</template>
<script>
import SessionCardPreview from "~/components/SessionCardPreview.vue";
export default {
  components: {
    SessionCardPreview,
  },
  props: {
    sessions: { type: Array, default: () => [] },
  },
};
</script>