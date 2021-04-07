<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">

      <!-- Page sections -->
      <HeroHome />
      <FeaturesHome />
      <FeaturesBlocks />
      <FeaturesWorld />
      <News />
      <Cta />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import AOS from 'aos'
import Sticky from 'sticky-js'
// import { focusHandling } from 'cruip-js-toolkit'

import Header from './../partials/Header.vue'
import HeroHome from './../partials/HeroHome.vue'
import FeaturesHome from './../partials/FeaturesHome.vue'
import FeaturesBlocks from './../partials/FeaturesBlocks.vue'
import FeaturesWorld from './../partials/FeaturesWorld.vue'
import News from './../partials/News.vue'
import Cta from './../partials/Cta.vue'
import Footer from './../partials/Footer.vue'


export default {
  name: 'Home',
  components: {
    Header,
    HeroHome,
    FeaturesHome,
    FeaturesBlocks,
    FeaturesWorld,
    News,
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
    // focusHandling()
    // Route change
    if (this.$router) {
      this.$watch('$route', () => {
        // eslint-disable-next-line no-unused-vars
        const sticky = new Sticky('[data-sticky]'); 
        // focusHandling('outline')
      });
    }    
  }
}
</script>
