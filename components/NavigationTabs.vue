<template>
  <div :style="{ width: width, height: height }">
    <nav class="flex flex-row">
      <button
        class="text-gray-600 p-4 block hover:text-green-500 focus:outline-none border-green-500"
        :class="{ tabActive: tabIndex == index }"
        v-for="(name, index) in names"
        @click="tabIndex = index"
      >
        {{ name }}
      </button>
    </nav>
    <div class="p-4">
      <div
        v-for="(name, index) in names"
        :key="`tab${index}`"
        v-if="tabIndex == index"
      >
        <slot :name="`tab${index}`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
    names: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tabIndex: 0,
    };
  },
};
</script>

<style scoped>
.tabActive {
  @apply text-green-500 border-b-2 font-medium border-green-500;
}
</style>
