<template>
<div>
  <slot></slot>
  <ul v-for="skill in skills" :key="skill" class="p-2 m-1 list lh-copy">
    <li class="p-4 shadow-4 br3 bg-white fw5 tl">{{skill}}</li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    skills:  { type: Array, default: () => [] }
  }
}
</script>

<style>

</style>
