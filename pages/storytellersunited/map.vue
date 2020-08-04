<template>
  <div>
    <iframe
      id="typeform-full"
      width="100%"
      height="100%"
      frameborder="0"
      allow="camera; microphone; autoplay; encrypted-media;"
      src="https://form.typeform.com/to/CI4wk1bS"
    ></iframe>
    <script
      type="text/javascript"
      src="https://embed.typeform.com/embed.js"
    ></script>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Storytellers United - Here to learn"
    }
  }
};
</script>

<style scoped>
html {
  margin: 0;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
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
