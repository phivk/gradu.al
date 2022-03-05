<template>
  <section class="mb-8">
    <div class="max-w-3xl mx-auto text-center pb-6">
      <NuxtContent :document="ambassadorsIndex" class="text-lg" />
    </div>
    <div class="flex flex-wrap">
      <ProfileBio
        v-for="ambassador in ambassadors"
        class="w-full sm:w-1/2 md:w-1/3 p-2 md:p-4"
        :profilePic="ambassador.profilePic"
        :name="ambassador.name"
        :title="ambassador.title"
        :bio="ambassador.bio"
      />
    </div>
  </section>
</template>
<script>
export default {
  props: {
    ambassadorsIndex: { type: Object, default: () => {} },
    ambassadors: { type: Array, default: () => [] },
  },
};
</script>
