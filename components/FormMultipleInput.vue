<template>
  <div v-frag>
    <FormHeader :introduction="introduction" :followup="followup" />
    <div class="flex items-center">
      <input
        class="border-0 border-gray border-b-2 my-4 mr-4 bg-transparent w-75 focus:outline-none focus:border-black active:outline-none text-3xl"
        v-model="newValue"
        :placeholder="answers.length > 0 ? 'Add another' : 'Add a topic'"
      />
      <button class="button-primary text-lg h-fit" @click="addValue()">
        Add
      </button>
    </div>
    <div v-if="answers.length > 0">
      <p>You've added:</p>
      <ul>
        <li
          class="my-2 p-2 rounded bg-white text-black text-opacity-80 font-medium tl shadow"
          v-for="answer in answers"
        >
          {{ answer }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    introduction: String,
    followup: String,
    value: Array,
    keyboardFunction: Function,
  },
  data() {
    return {
      answers: [],
      newValue: "",
    };
  },
  mounted() {
    this.answers = [...this.value];
    window.addEventListener("keyup", this.addValueOnEnter);
  },
  unmounted() {
    window.removeEventListener("keyup", this.addValueOnEnter);
  },
  methods: {
    addValue() {
      if (!this.newValue) return;
      this.answers.push(this.newValue);
      this.newValue = "";
      this.$emit("update", this.answers);
    },
    addValueOnEnter(e) {
      if (["Enter"].includes(e.key)) this.addValue();
    },
  },
};
</script>
