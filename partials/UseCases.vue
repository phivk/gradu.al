<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2">Trusted by innovators</h2>
          <p class="text-xl text-gray-600">We're actively piloting our process with organisations, companies and communities worldwide.</p>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">
          <div class="grid gap-24 md:grid-cols-2 items-center px-12">

            <article v-for="usecase in usecases" class="flex flex-col h-full" data-aos="zoom-y-out">
              <header>
                <AppLink :to="usecase.path" class="block mb-6">
                  <figure class="relative h-0 pb-1/2 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-contain transform hover:-translate-y-1 transition duration-700 ease-out" :src="usecase.imgSrc" width="352" height="198" :alt="usecase.title" />
                  </figure>
                </AppLink>
                <h3 class="text-xl font-bold leading-snug tracking-tight text-center">
                  <AppLink :to="usecase.path" class="hover:underline">{{usecase.title}}</AppLink>
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
  data: function () {
    return {
      usecases: [
        {
          path: 'https://mozfest.gradu.al',
          imgSrc: 'https://assets.mofoprod.net/static/_images/mozfest/logo.364cf5df72b2.svg',
          title: 'Emergent Skill Sharing at MozFest 2021',
        },
        {
          path: 'https://storytellersunited.gradu.al',
          imgSrc: 'https://storytellers.link/img/logo-storytellersunited-200px.png',
          title: 'Continuous Community Learning with Storytellers United',
        },
        {
          path: 'https://coee.gradu.al',
          imgSrc: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHUxWUxJiRPYg/company-logo_200_200/0/1519872873008?e=2159024400&v=beta&t=fpBAuWTBOyqGrzZzczLfKSsT8TF7gKus7jj5X7zXiIE',
          title: 'Unlocking potential with the College of Extraordinary Experiences',
        },
      ]
    }
  },
}
</script>