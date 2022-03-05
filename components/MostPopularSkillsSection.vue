<template>
  <div>
    <slot></slot>
    <ul class="list lh-copy">
      <li
        v-for="skill in connectedSkillsMaxed"
        :key="skill.name"
        class="my-2 p-2 rounded bg-white text-black text-opacity-80 font-medium tl"
      >
        <div>{{ skill.name }}</div>
        <div class="text-xs opacity-70">
          {{ skill.numbers }}
          {{ skill.numbers > 1 ? "people" : "person" }} interested
        </div>
      </li>
      <button v-show="spillover" @click="maxSkills += step">show more</button>
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
    connectedSkills() {
      return this.skills.filter((skill) => skill.numbers > 1);
    },
    connectedSkillsMaxed() {
      return this.connectedSkills.slice(0, this.maxSkills);
    },
    spillover() {
      return Math.max(this.connectedSkills.length - this.maxSkills, 0);
    },
  },
};
</script>

<style></style>
