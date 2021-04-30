<template>
  <section class="mv5">
    <slot></slot>
    <ul class="list p-0 ma0 flex flex-wrap justify-center">
      <li
        v-for="session in sessions"
        :key="session.title"
        class="w-100 w-50-m w-third-l mw6 p-4"
      >
        <SessionCardPreview :session="session" />
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
