<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2">Trusted by innovators</h2>
          <p class="text-xl text-gray-600">We're actively actively piloting our process with organisations, companies and communities worldwide.</p>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">
          <div class="grid gap-24 md:grid-cols-2 items-center px-12">

            <article v-for="usecase in usecases" class="flex flex-col h-full" data-aos="zoom-y-out">
              <header>
                <router-link :to="usecase.path" class="block mb-6">
                  <figure class="relative h-0 pb-1/2 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" :src="usecase.imgSrc" width="352" height="198" :alt="usecase.title" />
                  </figure>
                </router-link>
                <h3 class="text-xl font-bold leading-snug tracking-tight">
                  <router-link :to="usecase.path" class="hover:underline">{{usecase.title}}</router-link>
                </h3>
              </header>
            </article>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'News',
  data: function () {
    return {
      usecases: [
        {
          path: '/mozfest',
          imgSrc: 'https://assets.mofoprod.net/network/images/mozilla-festival-.2e16d0ba.fill-760x760-c100.format-jpeg.jpg',
          title: 'Emergent Skill Sharing at MozFest 2021',
        },
        {
          path: '/storytellersunited',
          imgSrc: 'https://storytellers.link/img/og-image-storytellersunited.png',
          title: 'Continuous Community Learning with Storytellers United',
        },
      ]
    }
  },
}
</script>