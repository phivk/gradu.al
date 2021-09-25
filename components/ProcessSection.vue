<template>
  <section class="mb-16 mx-auto">
    <nuxt-content 
      :document="indexPage" 
      class="max-w-2xl mx-auto text-lg"
    />
    <process-card-list/>
    <session-format-list :sessionTypes="indexPage.sessionTypes"/>
    <info-bar v-for="(infoBar, index) in indexPage.infoBars" :key="index" :infoBarObject="infoBar"/>
  </section>
</template>
<script>
import InfoBar from "~/components/InfoBar.vue";
import ProcessCardList from "~/components/ProcessCardList.vue";
import SessionFormatList from "~/components/SessionFormatList.vue";
export default {
  props: {
    indexPage : { type: Object, default: () => {} },
  },
  components: {
    InfoBar,
    ProcessCardList,
    SessionFormatList,
  },
};
</script>
