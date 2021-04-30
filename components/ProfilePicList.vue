<template>
  <ul class="flex list p-0 ml1 flex-wrap">
    <li v-for="profilePic in profilePics" class="-ml-2">
      <ProfilePic
        :imageSrc="profilePic.profilePic"
        :userName="profilePic.userName"
        :borderColorClass="borderColorClass"
      />
    </li>
  </ul>
</template>
<script>
import ProfilePic from "~/components/ProfilePic.vue";
export default {
  props: {
    profilePics: { type: Array, default: () => [] },
    borderColorClass: { type: String, default: "b--white" },
  },
  components: { ProfilePic },
};
</script>
