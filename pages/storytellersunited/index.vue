<template>
  <div>
    <iframe
      id="typeform-full"
      width="100%"
      height="100%"
      frameborder="0"
      allow="camera; microphone; autoplay; encrypted-media;"
      src="https://gunnardejong.typeform.com/to/nqEQHQ"
    ></iframe>
    <script
      type="text/javascript"
      src="https://embed.typeform.com/embed.js"
    ></script>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import MCSignupForm from "~/components/MCSignupForm.vue";

export default {
  components: {
    Logo,
    MCSignupForm,
  },
};
</script>

<style>
html {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
iframe {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  border: 0;
}
</style>
