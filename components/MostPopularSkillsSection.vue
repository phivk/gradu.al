<template>
<div>
  <slot></slot>
  <ul class="list lh-copy">
    <li v-for="skill in skills" :key="skill" class="my-2 p-2 rounded bg-white font-medium tl">
      {{skill}}
    </li>
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
