<template>
  <div
      class="
        mt-32
        bg-white
        rounded-lg
        p-8
        flex
        justify-center
        flex-wrap
        w-full
        md:w-4/6
        lg:w-3/6
        max-w-2xl
        mx-auto
        text-black
      "
    >
      <div class="mb-4 w-full">
        <h2 class="font-bold text-xl">
          Heads up! 🚛<br />
          This page has moved to a brand new domain:
        </h2>
      </div>
      <div class="w-full">
        <a 
          :href="newURL"
          class="color-accent underline hover:no-underline" 
        >{{newURL}}</a>
      </div>
    </div>
</template>

<script>
export default {
  layout: "mozFest",
  props: {
    newURL: {
      type: String,
      required: true,
      default: null,
    },
  },
};
</script>
