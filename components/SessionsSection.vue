<template>
  <section class="mv5">
    <slot></slot>
    <ul class="list p-0 m-0 flex flex-wrap justify-center">
      <li
        v-for="session in sessions"
        :key="session.title"
        class="w-100 w-50-m w-third-l mw6 p-4"
      >
        <nuxt-link :to="session.path" class="link">
          <SessionCardPreview :session="session" />
        </nuxt-link>
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
