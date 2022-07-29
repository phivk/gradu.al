<template>
  <ol class="list p-0 mb-4 flex flex-wrap justify-center">
    <li
      v-for="(step, index) in steps"
      :key="index"
      class="p-4 w-full md:w-1/3 max-w-sm"
    >
      <ProcessCard :number="(index + 1).toString()" :title="step.title">
        {{ step.text }}
      </ProcessCard>
    </li>
  </ol>
</template>
<script>
export default {
  data: function () {
    return {
      steps: [
        {
          title: "Map",
          text: "Express what you're most interested in. Anything is welcome!",
        },
        {
          title: "Match",
          text: "See how you connect to others via your curiosity.",
        },
        {
          title: "Meet",
          text: "Host or join a session to exchange perspectives with like-minded people.",
        },
      ],
    };
  },
};
</script>
