<template>
  <div>    
    <iframe
      id="typeform-full"
      width="100%"
      height="100%"
      frameborder="0"
      allow="camera; microphone; autoplay; encrypted-media;"
      :src="typeformSrcComputed"
    ></iframe>
    <script
      type="text/javascript"
      src="https://embed.typeform.com/embed.js"
    ></script>
  </div>
</template>
<script>
export default {
  props: {
    typeformSrc: { type: String, default: "" },
    typeformId: { type: String, default: "" },
  },
  computed: {
    typeformSrcComputed () {
      return this.typeformSrc ? this.typeformSrc : `https://form.typeform.com/to/${this.typeformId}`
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
