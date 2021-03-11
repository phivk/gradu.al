<template>
  <SessionPage
    :session="session"
    :bgColor="bgColor"
  />
</template>

<script>
import TagPill from "~/components/TagPill.vue";
import ProfilePicList from "~/components/ProfilePicList.vue";
import SessionPage from "~/components/SessionPage.vue";

export default {
  layout: "mozFest",
  head() {
    return {
      title: "MozFest - Here to learn",
    };
  },
  components: { TagPill, ProfilePicList, SessionPage },
  data() {
    return {
      bgColor: '#f4f4f4',
    }
  },
  async asyncData({ $content, params }) {
    const session = await $content('mozfest/sessions', params.slug).fetch()
    return { session }
  },
  computed: {
    hasHappened() {
      let now = new Date();
      return new Date(this.session.date) < now;
    },
    youtubeRecordingResource() {
      if (this.session.resources) {
        return this.session.resources.find((r) => r.href.includes("youtu"));
      }
      else {
        return undefined
      }
    },
    youtubeRecordingID() {
      if (this.youtubeRecordingResource) {
        let parts = this.youtubeRecordingResource.href.split(/[/=]/)
        return parts[parts.length - 1];
      }
      else {
        return undefined;
      }
    },
    showICal() {
      return this.session.icsFileSrc && !this.hasHappened;
    },
    dateFormatted() {
      let dt = new Date(this.session.date)
      return dt.toLocaleDateString('en-GB',{ day:'numeric',month: 'short', year: 'numeric'})
    },
  },
};
</script>
<style>
.nuxt-content p {
  margin-bottom: 1rem;
}
</style>
<style scoped>
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
