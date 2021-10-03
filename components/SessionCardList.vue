<template>
  <ul class="flex flex-wrap justify-center">
    <li
      v-for="session in sessions"
      :key="session.title"
      class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-lg p-4"
    >
      <SessionCard :session="session" />
    </li>
  </ul>
</template>
<script>
import SessionCard from "~/components/SessionCard.vue";

export default {
  props: {
    sessions: { type: Array, default: () => [] },
  },
  components: { SessionCard },
};
</script>