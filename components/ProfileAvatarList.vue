<template>
  <ul class="flex list p-0 flex-wrap pv1">
    <li v-for="profileName in profileNames">
      <ProfileAvatar
        :profileName="profileName"
        :borderColor="borderColor"
        :backgroundColor="backgroundColor"
      />
    </li>
  </ul>
</template>
<script>
import ProfileAvatar from "~/components/ProfileAvatar.vue";
export default {
  props: {
    profileNames: { type: Array, default: () => [] },
    borderColor: { type: String, default: "transparent" },
    backgroundColor: { type: String, default: "#96CCFF" },
  },
  components: { ProfileAvatar },
};
</script>
