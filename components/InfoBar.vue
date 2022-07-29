<template>
  <div
    class="p-4 bg-secondary-washed border border-secondary border-opacity-30 rounded max-w-3xl w-full flex items-center mb-4"
  >
    <span class="mr-3 text-2xl">
      <span v-if="infoBarObject">
        {{ infoBarObject.icon || "ℹ️" }}
      </span>
      <slot v-else name="left"></slot>
    </span>
    <span class="mr-auto">
      <span v-if="infoBarObject">
        {{ infoBarObject.text }}
        <a
          v-if="infoBarObject.link"
          class="text-secondary underline hover:no-underline"
          :href="infoBarObject.link.href"
          target="_blank"
          >{{ infoBarObject.link.text }}</a
        >
      </span>
      <slot v-else></slot>
      <!-- default slot -->
    </span>
    <span class="ml-3 text-2xl">
      <span v-if="infoBarObject">
        <a
          class="text-secondary no-underline"
          :href="infoBarObject.link.href"
          target="_blank"
          >↗︎</a
        >
      </span>
      <slot v-else name="right"></slot>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    infoBarObject: { type: Object, default: () => undefined },
  },
};
</script>
<style scoped>
/*a.no-underline {
  text-decoration: none;
}*/
</style>
