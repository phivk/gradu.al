<template>
  <div>
    <slot></slot>
    <ul class="list lh-copy max-w-2xl mx-auto">
      <li
        v-for="skill in skillsMaxed"
        :key="skill.name"
        class="my-2 p-2 rounded bg-white text-black text-opacity-80 font-medium tl"
      >
        <div>{{ skill.name }}</div>
        <div class="text-xs opacity-70">
          <span class="text-blue-700">
            {{ skill.totalConnections }}
            {{ skill.totalConnections > 1 ? "people" : "person" }}
          </span>
          interested:
          <span class="text-yellow-700">
            {{ skill.learners }} learner{{ skill.learners == 1 ? "" : "s" }}
          </span>
          &amp;
          <span class="text-purple-700">
            {{ skill.sharers }} sharer{{ skill.sharers == 1 ? "" : "s" }}
          </span>
        </div>
      </li>
      <a
        class="underline hover:no-underline cursor-pointer inline-block my-2"
        v-show="spillover"
        @click="maxSkills += step"
        >show more</a
      >
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    skills: { type: Array, default: () => [] },
  },
  data() {
    return {
      maxSkills: 10,
      step: 10,
    };
  },
  computed: {
    skillsMaxed() {
      return this.skills.slice(0, this.maxSkills);
    },
    spillover() {
      return Math.max(this.skills.length - this.maxSkills, 0);
    },
  },
};
</script>

<style></style>
