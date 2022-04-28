<template>
  <div class="flex flex-col items-center">
    <img
      class="shadow rounded-full w-24 md:w-32 h-24 md:h-32 object-cover border-none mb-4"
      :src="profilePic"
      alt="Team member 01"
    />
    <h4 class="text-xl font-bold m-2">{{ name }}</h4>
    <div v-if="title" class="text-blue-500 font-medium mb-2">{{ title }}</div>
    <p class="text-sm md:text-base text-text text-opacity-60 text-center mb-3">
      {{ bio }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    profilePic: { type: String, default: "https://placekitten.com/300/300" },
    name: { type: String, default: "Name" },
    title: { type: String, default: null },
    bio: { type: String, default: "A bio text here" },
  },
};
</script>
