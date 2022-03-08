<template>
  <div :style="{ width: width, height: height }">
    <nav class="flex flex-row mb-2 justify-center">
      <button
        class="text-gray-500 px-6 py-4 block focus:outline-none border-green-500"
        :class="{
          tabActive: tabIndex == index,
          'text-text': tabIndex == index,
          'hover:text-green-500': tabIndex !== index,
        }"
        v-for="(name, index) in names"
        @click="tabIndex = index"
      >
        <font-awesome-icon v-if="icons" :icon="icons[index]" class="mr-2" />
        {{ name }}
      </button>
    </nav>
    <div>
      <div
        v-for="(name, index) in names"
        :key="`tab-${index}`"
        v-if="tabIndex == index"
      >
        <slot :name="`tab-${index}`" />
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
    icons: {
      // array of font awesome icon names
      type: Array,
      required: false,
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
  @apply text-green-500 border-t-4 font-medium border-green-500;
}
</style>
