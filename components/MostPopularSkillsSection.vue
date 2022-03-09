<template>
  <div class="max-w-2xl mx-auto text-left">
    <slot></slot>
    <div class="mt-1 relative rounded-md">
      <input
        v-model="query"
        type="text"
        name="topic"
        id="topic"
        class="focus:ring-secondary focus:border-secondary block border-gray-300 rounded-md w-full"
        placeholder="search for topics"
      />
      <div
        v-show="query"
        @click="closeQuery"
        class="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 cursor-pointer"
      >
        <font-awesome-icon :icon="['fas', 'times-circle']" />
      </div>
    </div>
    <ul class="list lh-copy max-w-2xl mx-auto">
      <li
        v-for="skill in skillsMaxed"
        :key="skill.name"
        class="my-2 p-2 rounded bg-white text-black text-opacity-80 font-medium tl shadow"
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
    </ul>
    <a
      class="underline hover:no-underline cursor-pointer inline-block my-2"
      v-show="spillover"
      @click="maxSkills += step"
      >show more</a
    >
  </div>
</template>

<script>
export default {
  props: {
    skills: { type: Array, default: () => [] },
  },
  data() {
    return {
      maxSkillsDefault: 10,
      maxSkills: 10,
      step: 10,
      query: "",
    };
  },
  computed: {
    skillsFiltered() {
      if (this.query) {
        return this.skills.filter((skill) =>
          skill.name.toLowerCase().includes(this.query.toLowerCase())
        );
      } else {
        return this.skills;
      }
    },
    skillsMaxed() {
      return this.skillsFiltered.slice(0, this.maxSkills);
    },
    spillover() {
      return Math.max(this.skillsFiltered.length - this.maxSkills, 0);
    },
  },
  methods: {
    closeQuery() {
      this.query = "";
      this.maxSkills = this.maxSkillsDefault;
    },
  },
};
</script>

<style></style>
