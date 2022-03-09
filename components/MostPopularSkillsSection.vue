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
        <div class="flex flex-wrap">
          <div v-if="skill.sharerNames.length" class="mr-4">
            <span class="text-xs text-purple-700 opacity-70">
              {{ skill.sharerCount }} sharer{{
                skill.sharerCount == 1 ? "" : "s"
              }}
            </span>
            <ProfileAvatarList
              :profileNames="skill.sharerNames"
              :itemClasses="['ring-4', 'ring-white']"
              :maxDisplayLength="20"
              class="text-xs"
            />
          </div>
          <div v-if="skill.learnerNames.length">
            <span class="text-xs text-yellow-700 opacity-70">
              {{ skill.learnerCount }} learner{{
                skill.learnerCount == 1 ? "" : "s"
              }}
            </span>
            <ProfileAvatarList
              :profileNames="skill.learnerNames"
              :itemClasses="['ring-4', 'ring-white']"
              :maxDisplayLength="20"
              class="text-xs"
            />
          </div>
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
