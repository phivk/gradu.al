<template>
  <article class="tl rounded bg-white p-4 h-100 shadow-4">
    <CircleCharacter
      :character="number"
      backgroundColor="#137752"
      textColor="#FFF"
      class="mb-2 mr-2 font-bold text-lg"
    />
    <h3 class="dib font-bold text-lg mt-0">{{ title }}</h3>
    <div class="mid-gray">
      <slot></slot>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    number: { type: String, default: "1" },
    title: { type: String, default: "Title" },
  },
};
</script>
