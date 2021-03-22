<template>
  <article class="tl br3 bg-white pa3 h-100 shadow-4">
    <CircleCharacter
      :character="number"
      backgroundColor="#137752"
      textColor="#FFF"
      class="mb2 mr2 font-bold text-lg"
    />
    <h3 class="dib font-bold text-lg">{{ title }}</h3>
    <div class="mid-gray">
      <slot></slot>
    </div>
  </article>
</template>
<script>
import CircleCharacter from "~/components/CircleCharacter.vue";

export default {
  props: {
    number: { type: String, default: "1" },
    title: { type: String, default: "Title" },
  },
  components: { CircleCharacter },
};
</script>
