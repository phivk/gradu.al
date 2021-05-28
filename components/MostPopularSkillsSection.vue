<template>
<div>
  <slot></slot>
  <ul class="list lh-copy">
    <li v-for="skill in skills" :key="skill" class="my-2 p-2 br3 bg-white fw5 tl">
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
