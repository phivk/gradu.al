<template>
  <div v-frag>
    <div class="text-center">
      <FormHeader :introduction="introduction" :followup="followup" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    introduction: String,
    followup: String,
  },
  mounted() {
    window.addEventListener("keyup", this.keyboardControl);
  },
  unmounted() {
    window.removeEventListener("keyup", this.keyboardControl);
  },
  methods: {
    keyboardControl(e) {
      if (["Enter"].includes(e.key)) this.$emit("nextStep");
    },
  },
};
</script>
