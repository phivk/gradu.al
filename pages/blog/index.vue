<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">
      <!-- Page sections -->
      <BlogList :blogs="blogs" />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "~/partials/Header.vue";
import BlogList from "~/partials/BlogList.vue";
import Footer from "~/partials/Footer.vue";

export default {
  name: "Blog",
  components: {
    Header,
    BlogList,
    Footer,
  },
  async asyncData({ $content }) {
    const blogs = await $content("blog")
      .sortBy("datePublished", "desc")
      .fetch();
    return { blogs };
  },
};
</script>
