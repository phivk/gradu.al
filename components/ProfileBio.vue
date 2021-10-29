<template>
  <div class="flex flex-col items-center">
    <img class="shadow rounded-full w-36 h-36 object-cover border-none mb-4" :src="profilePic" alt="Team member 01" />
    <h4 class="text-xl font-bold mb-1">{{name}}</h4>
    <!-- <div class="text-green-600 font-medium mb-2">{{title}}</div> -->
    <p class="text-text text-opacity-60 text-center mb-3">
      {{bio}}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    profilePic: { type: String, default: "https://placekitten.com/300/300" },
    name: { type: String, default: "Name" },
    // title: { type: String, default: "@User Name" },
    bio: { type: String, default: "A bio text here" },
  },
};
</script>
