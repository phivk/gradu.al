<template>
  <ul class="flex list p-0 flex-wrap pv1">
    <li v-for="profileName in profileNames" :key="profileName">
      <ProfileAvatar :profileName="profileName" :class="itemClasses" />
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    profileNames: { type: Array, default: () => [] },
    itemClasses: { type: Array, default: () => [] },
  },
};
</script>
