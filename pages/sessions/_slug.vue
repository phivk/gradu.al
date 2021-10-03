<template>
  <SessionPage :session="session" :bgColor="bgColor" />
</template>

<script>
import SessionPage from "~/components/SessionPage.vue";

export default {
  layout: "coee",
  middleware: ["password-protect"],
  head() {
    return {
      title: "CoEE - Here to learn",
    };
  },
  components: { SessionPage },
  data() {
    return {
      bgColor: "#000",
    };
  },
  async asyncData({ $content, params }) {
    const session = await $content("sessions", params.slug).fetch();
    return { session };
  },
  computed: {
    hasHappened() {
      let now = new Date();
      return new Date(this.session.date) < now;
    },
    youtubeRecordingResource() {
      if (this.session.resources) {
        return this.session.resources.find((r) => r.href.includes("youtu"));
      } else {
        return undefined;
      }
    },
    youtubeRecordingID() {
      if (this.youtubeRecordingResource) {
        let parts = this.youtubeRecordingResource.href.split(/[/=]/);
        return parts[parts.length - 1];
      } else {
        return undefined;
      }
    },
    showICal() {
      return this.session.icsFileSrc && !this.hasHappened;
    },
    dateFormatted() {
      let dt = new Date(this.session.date);
      return dt.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    },
  },
};
</script>
