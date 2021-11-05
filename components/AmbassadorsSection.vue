<template>
  <section class="mb-8"> 
    <div class="max-w-3xl mx-auto text-center pb-6">
      <NuxtContent 
        :document="ambassadorsIndex" 
        class="text-lg"
      />
    </div>
    <div class="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 sm:-my-8">
      <div v-for="ambassador in ambassadors" class="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3">
        <ProfileBio
          :profilePic="ambassador.profilePic"
          :name="ambassador.name"
          :bio="ambassador.bio"
        />
      </div>
    </div>
  </section>
</template>
<script>
import ProfileBio from "~/components/ProfileBio.vue";

export default {
  components: {
    ProfileBio,
  },
  props: {
    ambassadorsIndex: { type: Object, default: () => {} },
    ambassadors: { type: Array, default: () => [] },
  },
};
</script>
