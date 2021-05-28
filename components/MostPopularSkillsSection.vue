<template>
<div>
  <slot></slot>
  <ul class="list lh-copy">
    <li v-for="skill in skills" :key="skill" class="ma2 pa3 shadow-4 br3 bg-white fw5 tl">{{skill}}</li>
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
