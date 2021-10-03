<template>
  <section class="mb-8"> 
    <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Here are this season's ambassadors!</h2>
      <p class="text-lg">
        For questions, reach out to Andrada, Kristin, Carina on <a class="underline hover:no-underline" href="https://www.facebook.com/groups/223720981529219">Facebook</a> or  Gunnar at <a class="underline hover:no-underline" href="mailto:gunnar@gradu.al">gunnar@gradu.al</a>.
      </p>
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
    ambassadors: { type: Array, default: () => [] },
  },
};
</script>
