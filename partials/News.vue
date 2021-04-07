<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2">The most innovative businesses choose Simple</h2>
        </div>

        <!-- Categories -->
        <div class="mb-12 md:mb-16">
          <ul class="flex flex-wrap justify-center text-sm font-medium -m-2">
            <li class="m-2">
              <a class="inline-flex text-center text-gray-100 py-2 px-4 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out" href="#0">Developers</a>
            </li>
            <li class="m-2">
              <a class="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">SaaS</a>
            </li>
            <li class="m-2">
              <a class="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">Web Agencies</a>
            </li>
            <li class="m-2">
              <a class="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">E-Commerce</a>
            </li>
            <li class="m-2">
              <a class="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">Startups</a>
            </li>
          </ul>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">
          <div class="grid gap-12 md:grid-cols-3 md:col-gap-6 md:row-gap-8 items-start">

            <!-- 1st article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" :src="require('@/images/news-01.jpg')" width="352" height="198" alt="News 01" />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Case studies</a>
                    </li>
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">Hubspot</a>
                    </li>
                  </ul>
                </div>
                <h3 class="text-xl font-bold leading-snug tracking-tight">
                  <router-link to="/blog-post" class="hover:underline">“How HubSpot saved 25% on developing costs by switching to Simple.”</router-link>
                </h3>
              </header>
              <footer class="text-sm flex items-center mt-4">
                <div class="flex flex-shrink-0 mr-3">
                  <a class="relative" href="#0">
                    <span class="absolute inset-0 -m-px" aria-hidden="true"><span class="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                    <img class="relative rounded-full" :src="require('@/images/news-author-01.jpg')" width="32" height="32" alt="Author 01" />
                  </a>
                </div>
                <div>
                  <span class="text-gray-600">By </span>
                  <a class="font-medium hover:underline" href="#0">Lisa Allison</a>
                </div>
              </footer>
            </article>

            <!-- 2nd article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="150">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" :src="require('@/images/news-02.jpg')" width="352" height="198" alt="News 02" />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Case studies</a>
                    </li>
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">Facebook</a>
                    </li>
                  </ul>
                </div>
                <h3 class="text-xl font-bold leading-snug tracking-tight">
                  <router-link to="/blog-post" class="hover:underline">“How Facebook brought 13% cost savings to their bottom line with Simple’s products.”</router-link>
                </h3>
              </header>
              <footer class="text-sm flex items-center mt-4">
                <div class="flex flex-shrink-0 mr-3">
                  <a class="relative -ml-2" href="#0">
                    <span class="absolute inset-0 -m-px" aria-hidden="true"><span class="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                    <img class="relative rounded-full" :src="require('@/images/news-author-02.jpg')" width="32" height="32" alt="Author 02" />
                  </a>
                </div>
                <div>
                  <span class="text-gray-600">By </span>
                  <a class="font-medium hover:underline" href="#0">Knut Mayer</a>
                </div>
              </footer>
            </article>

            <!-- 3rd article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="300">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" :src="require('@/images/news-03.jpg')" width="352" height="198" alt="News 03" />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Case studies</a>
                    </li>
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">Tinder</a>
                    </li>
                  </ul>
                </div>
                <h3 class="text-xl font-bold leading-snug tracking-tight">
                  <router-link to="/blog-post" class="hover:underline">“How Tinder grew 115% and saved 120 Hours each week by outsourcing to Simple.”</router-link>
                </h3>
              </header>
              <footer class="text-sm flex items-center mt-4">
                <div class="flex flex-shrink-0 mr-3">
                  <a class="relative" href="#0">
                    <span class="absolute inset-0 -m-px" aria-hidden="true"><span class="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                    <img class="relative rounded-full" :src="require('@/images/news-author-01.jpg')" width="32" height="32" alt="Author 01" />
                  </a>
                </div>
                <div>
                  <span class="text-gray-600">By </span>
                  <a class="font-medium hover:underline" href="#0">Lisa Allison</a>
                </div>
              </footer>
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
}
</script>