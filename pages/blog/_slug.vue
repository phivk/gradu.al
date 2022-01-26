<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">
      <!-- Page sections -->
      <BlogSingle :blog="blog" />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "~/partials/Header.vue";
import BlogSingle from "~/partials/BlogSingle.vue";
import Footer from "~/partials/Footer.vue";

export default {
  name: "BlogPost",
  components: {
    Header,
    BlogSingle,
    Footer,
  },
  async asyncData({ $content, params }) {
    const blog = await $content("blog", params.slug).fetch();
    return { blog };
  },
};
</script>
