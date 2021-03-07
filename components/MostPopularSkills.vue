<template>
<div>
  <h3 class="mb3">Here are some of the most popular skills:</h3>
  <ul v-for="skill in skills" :key="skill" class="pa2 ma1 list">
    <li>{{skill}}</li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    skills:  { type: Array, default: "[]" }
  }
}
</script>

<style>

</style>
