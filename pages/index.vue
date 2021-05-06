<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">

      <!-- Page sections -->
      <HeroHome />
      <FeaturesProcess />
      <UseCases />
      <TestimonialsCarousel />
      <Cta />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import AOS from 'aos'
import Sticky from 'sticky-js'
import Header from './../partials/Header.vue'
import HeroHome from './../partials/HeroHome.vue'
import FeaturesProcess from './../partials/FeaturesProcess.vue'
import TestimonialsCarousel from './../partials/TestimonialsCarousel.vue'
import FeaturesBlocks from './../partials/FeaturesBlocks.vue'
import UseCases from './../partials/UseCases.vue'
import Cta from './../partials/Cta.vue'
import Footer from './../partials/Footer.vue'

export default {
  components: {
    Header,
    HeroHome,
    FeaturesProcess,
    TestimonialsCarousel,
    FeaturesBlocks,
    UseCases,
    Cta,
    Footer,
  },
  mounted() {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky('[data-sticky]');    
    // Route change
    if (this.$router) {
      this.$watch('$route', () => {
        // eslint-disable-next-line no-unused-vars
        const sticky = new Sticky('[data-sticky]'); 
      });
    }    
  }
}
</script>
