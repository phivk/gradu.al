<template>
  <p class="center p-4 bg-color-accent-washed ba b--black-10 br2 flex items-center mw7 tl">
    <span class="mr-2 f3">
      <slot name="left"></slot>
    </span>
    <span class="mr-auto">
      <slot name="middle"></slot>
    </span>
    <span class="ml-2 f3">
      <slot name="right"></slot>
    </span>
  </p>
</template>
<style scoped>
.mr-auto {
  margin-right: auto;
}
</style>