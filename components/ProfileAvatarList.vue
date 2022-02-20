<template>
  <ul class="flex list p-0 flex-wrap items-center">
    <li v-for="profileName in profileNamesMaxed" :key="profileName">
      <ProfileAvatar :profileName="profileName" :class="itemClasses" />
    </li>
    <li v-if="spillover > 0" class="ml-1 text-blue-400">
      <span>+{{ spillover }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    profileNames: { type: Array, default: () => [] },
    itemClasses: { type: Array, default: () => [] },
    maxDisplayLength: { type: Number, default: 6 },
  },
  computed: {
    profileNamesMaxed() {
      return this.profileNames.slice(0, this.maxDisplayLength);
    },
    spillover() {
      return this.profileNames.length - this.maxDisplayLength;
    },
  },
};
</script>
