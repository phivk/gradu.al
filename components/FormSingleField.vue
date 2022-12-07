<template>
  <div v-frag>
    <FormHeader :introduction="introduction" :followup="followup" />
    <textarea
      class="w-full leading-normal border-0 border-gray border-b-2 my-4 bg-transparent focus:outline-none focus:border-black active:outline-none text-lg sm:text-xl md:text-2xl"
      v-if="textarea"
      type="text"
      placeholder="Type your answer here..."
      v-model="field"
      @input="update"
    />
    <input
      class="w-full leading-normal border-0 border-gray border-b-2 my-4 bg-transparent focus:outline-none focus:border-black active:outline-none text-lg sm:text-xl md:text-2xl"
      v-else
      type="text"
      placeholder="Type your answer here..."
      v-model="field"
      @input="update"
    />
  </div>
</template>
<script>
export default {
  props: {
    introduction: String,
    followup: String,
    value: String,
    textarea: Boolean,
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      field: "",
    };
  },
  mounted() {
    this.field = this.value;
    window.addEventListener("keyup", this.keyboardControl);
  },
  unmounted() {
    window.removeEventListener("keyup", this.keyboardControl);
  },
  methods: {
    update() {
      this.$emit("update", this.field);
    },
    keyboardControl(e) {
      if (["Enter"].includes(e.key)) this.$emit("nextStep");
    },
  },
};
</script>
