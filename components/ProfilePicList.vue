<template>
  <ul class="flex list p-0 ml-1 flex-wrap">
    <li v-for="profilePic in profilePics" class="-ml-2">
      <ProfilePic
        :imageSrc="profilePic.profilePic"
        :userName="profilePic.userName"
      />
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    profilePics: { type: Array, default: () => [] },
  },
};
</script>
