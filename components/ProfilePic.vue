<template>
  <img
    class="br-100 w2 dib ba b--white bw2"
    :src="imageSrc"
    :alt="`profile picture of ${userName}`"
    :title="userName"
  />
</template>
<script>
export default {
  props: {
    imageSrc: { type: String, default: "https://ca.slack-edge.com/T14SUV8BA-UU4SUJ9U2-gf27c210f8aa-32" },
    userName: { type: String, default: "User Name" },
  },
};
</script>
