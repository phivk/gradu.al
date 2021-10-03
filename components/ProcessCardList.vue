<template>
  <ol class="list p-0 mb-4 flex flex-wrap justify-center">
    <li v-for="(step, index) in steps" :key="index" class="p-4 w-full md:w-1/3 max-w-sm">
      <ProcessCard :number="(index+1).toString()" :title="step.title">
        {{step.text}}
      </ProcessCard>
    </li>
  </ol>
</template>
<script>
import ProcessCard from "~/components/ProcessCard.vue";

export default {
  data: function () {
    return {
      steps: [
        {
          title: 'Map',
          text:
            "Let us know what you'd like to learn or share. Anything is welcome!",
        },
        {
          title: 'Match',
          text:
            'See how you and your peers are connected by skills. We help you plan a session in the format you choose.',
        },
        {
          title: 'Meet',
          text:
            "Host or join a session to learn with other team members based on your interests.",
        }
      ]
    }
  },
  components: { ProcessCard },
};
</script>
