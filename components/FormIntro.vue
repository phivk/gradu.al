<template>
  <div v-frag>
    <p class="font-bold">
      {{ introduction }}
    </p>
    <p class="font-light">
      {{ followup }}
    </p>
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