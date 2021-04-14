<template>
  <section class="relative">

    <!-- Illustration behind hero content -->
    <div class="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
      <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
            <stop stop-color="#FFF" offset="0%" />
            <stop stop-color="#EAEAEA" offset="77.402%" />
            <stop stop-color="#DFDFDF" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="url(#illustration-01)" fill-rule="evenodd">
          <circle cx="1232" cy="128" r="128" />
          <circle cx="155" cy="443" r="64" />
        </g>
      </svg>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Hero content -->
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Section header -->
        <div class="text-center pb-12 md:pb-16">
          <h1 class="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
            You <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">learn</span> more<br>
            when you <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">share</span>
          </h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">We’re here to help you integrate fun, actionable learning opportunities. For you, and your team.</p>
            <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              <div>
                <router-link to="/get-demo" class="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0">Get a Demo Today</router-link>
              </div>
              <div>
                <router-link to="/mozfest" class="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" >See it in Action</router-link>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
import Modal from './../utils/Modal.vue'

export default {
  name: 'HeroHome',
  components: {
    Modal,
  },
  data: function () {
    return {
      videoModalOpen: false,
    }
  },
}
</script>