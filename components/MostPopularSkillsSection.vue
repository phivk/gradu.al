<template>
  <div>
    <slot></slot>
    <ul class="list lh-copy">
      <li
        v-for="skill in skills"
        :key="skill"
        class="my-2 p-2 rounded bg-white text-black text-opacity-80 font-medium tl"
      >
        <div>{{ skill.name }}</div>
        <div class="text-xs text-opacity-50">
          {{ skill.numbers }} people interested
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    skills: { type: Array, default: () => [] },
  },
};
</script>

<style></style>
