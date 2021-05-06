<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Page header -->
        <div class="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
          <h1 class="h1">Tutorials & guides for using Simple with any project</h1>
        </div>

        <!-- Section tags -->
        <div class="border-b border-gray-300 pb-4 mb-12">
          <ul class="flex flex-wrap justify-center md:justify-start font-medium -mx-5 -my-1">
            <li class="mx-5 my-1">
              <a class="text-blue-600" href="#0">All</a>
            </li>
            <li class="mx-5 my-1">
              <a class="text-gray-800 hover:underline" href="#0">Tutorials</a>
            </li>
            <li class="mx-5 my-1">
              <a class="text-gray-800 hover:underline" href="#0">Tips & Tricks</a>
            </li>
            <li class="mx-5 my-1">
              <a class="text-gray-800 hover:underline" href="#0">Free ebooks</a>
            </li>
            <li class="mx-5 my-1">
              <a class="text-gray-800 hover:underline" href="#0">Guides</a>
            </li>
          </ul>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">

          <!-- Articles container -->
          <div class="grid gap-12 md:grid-cols-3 md:col-gap-6 md:row-gap-8 items-start">

            <!-- 1st article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" :src="require('@/images/tutorial-01.jpg')" width="352" height="198" alt="News 01" />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Guides</a>
                    </li>
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-150 ease-in-out" href="#0">Intermediate</a>
                    </li>
                    <li class="m-1">
                      <span class="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">4 min read</span>
                    </li>
                  </ul>
                </div>
                <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                  <router-link to="/blog-post" class="hover:underline">Making component design decisions in React</router-link>
                </h3>
              </header>
              <p class="text-gray-600 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <footer class="text-sm flex items-center mt-4">
                <div class="flex flex-shrink-0 mr-3">
                  <a class="relative" href="#0">
                    <span class="absolute inset-0 -m-px" aria-hidden="true"><span class="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                    <img class="relative rounded-full" :src="require('@/images/news-author-01.jpg')" width="32" height="32" alt="Author 01" />
                  </a>
                  <a class="relative -ml-2" href="#0">
                    <span class="absolute inset-0 -m-px" aria-hidden="true"><span class="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                    <img class="relative rounded-full" :src="require('@/images/news-author-03.jpg')" width="32" height="32" alt="Author 03" />
                  </a>
                </div>
                <div>
                  <span class="text-gray-600">By </span>
                  <a class="font-medium hover:underline" href="#0">Lisa Allison</a> & <a class="font-medium hover:underline" href="#0">Justin Park</a>
                </div>
              </footer>
            </article>

            <!-- 2nd article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="150">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" :src="require('@/images/tutorial-02.jpg')" width="352" height="198" alt="News 02" />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Tutorials</a>
                    </li>
                  </ul>
                </div>
                <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                  <router-link to="/blog-post" class="hover:underline">How to use structured content for page building</router-link>
                </h3>
              </header>
              <p class="text-gray-600 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <footer class="text-sm flex items-center mt-4">
                <div class="flex flex-shrink-0 mr-3">
                  <a class="relative" href="#0">
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
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" :src="require('@/images/tutorial-03.jpg')" width="352" height="198" alt="News 03" />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Guides</a>
                    </li>
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-150 ease-in-out" href="#0">Intermediate</a>
                    </li>
                    <li class="m-1">
                      <span class="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">7 min read</span>
                    </li>
                  </ul>
                </div>
                <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                  <router-link to="/blog-post" class="hover:underline">Deploy on Netlify, Heroku or your favorite platform</router-link>
                </h3>
              </header>
              <p class="text-gray-600 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
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

            <!-- 4th article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" :src="require('@/images/tutorial-04.jpg')" width="352" height="198" alt="News 04" />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Free ebooks</a>
                    </li>
                  </ul>
                </div>
                <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                  <router-link to="/blog-post" class="hover:underline">Create a custom type "Page" with Simple</router-link>
                </h3>
              </header>
              <p class="text-gray-600 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <footer class="text-sm flex items-center mt-4">
                <div class="flex flex-shrink-0 mr-3">
                  <a class="relative" href="#0">
                    <span class="absolute inset-0 -m-px" aria-hidden="true"><span class="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                    <img class="relative rounded-full" :src="require('@/images/news-author-04.jpg')" width="32" height="32" alt="Author 04" />
                  </a>
                </div>
                <div>
                  <span class="text-gray-600">By </span>
                  <a class="font-medium hover:underline" href="#0">Micheal Osman</a>
                </div>
              </footer>
            </article>

            <!-- 5th article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="150">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" :src="require('@/images/tutorial-05.jpg')" width="352" height="198" alt="News 05" />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Tips & Tricks</a>
                    </li>
                  </ul>
                </div>
                <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                  <router-link to="/blog-post" class="hover:underline">Getting started with content modelling</router-link>
                </h3>
              </header>
              <p class="text-gray-600 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <footer class="text-sm flex items-center mt-4">
                <div class="flex flex-shrink-0 mr-3">
                  <a class="relative" href="#0">
                    <span class="absolute inset-0 -m-px" aria-hidden="true"><span class="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                    <img class="relative rounded-full" :src="require('@/images/news-author-03.jpg')" width="32" height="32" alt="Author 03" />
                  </a>
                </div>
                <div>
                  <span class="text-gray-600">By </span>
                  <a class="font-medium hover:underline" href="#0">Justin Park</a>
                </div>
              </footer>
            </article>

            <!-- 6th article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="300">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" :src="require('@/images/tutorial-06.jpg')" width="352" height="198" alt="News 06" />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Guides</a>
                    </li>
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-150 ease-in-out" href="#0">Beginner</a>
                    </li>
                    <li class="m-1">
                      <span class="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">6 min read</span>
                    </li>
                  </ul>
                </div>
                <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                  <router-link to="/blog-post" class="hover:underline">How to add custom icons to your Simple project</router-link>
                </h3>
              </header>
              <p class="text-gray-600 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <footer class="text-sm flex items-center mt-4">
                <div class="flex flex-shrink-0 mr-3">
                  <a class="relative" href="#0">
                    <span class="absolute inset-0 -m-px" aria-hidden="true"><span class="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                    <img class="relative rounded-full" :src="require('@/images/news-author-05.jpg')" width="32" height="32" alt="Author 05" />
                  </a>
                  <a class="relative -ml-2" href="#0">
                    <span class="absolute inset-0 -m-px" aria-hidden="true"><span class="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                    <img class="relative rounded-full" :src="require('@/images/news-author-01.jpg')" width="32" height="32" alt="Author 01" />
                  </a>
                </div>
                <div>
                  <span class="text-gray-600">By </span>
                  <a class="font-medium hover:underline" href="#0">Angela Fiorelli</a> & <a class="font-medium hover:underline" href="#0">Lisa Allison</a>
                </div>
              </footer>
            </article>

            <!-- 7th article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" :src="require('@/images/tutorial-07.jpg')" width="352" height="198" alt="News 07" />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Tips & Tricks</a>
                    </li>
                  </ul>
                </div>
                <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                  <router-link to="/blog-post" class="hover:underline">Deploying a Vue.js web application with Simple</router-link>
                </h3>
              </header>
              <p class="text-gray-600 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <footer class="text-sm flex items-center mt-4">
                <div class="flex flex-shrink-0 mr-3">
                  <a class="relative" href="#0">
                    <span class="absolute inset-0 -m-px" aria-hidden="true"><span class="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                    <img class="relative rounded-full" :src="require('@/images/news-author-06.jpg')" width="32" height="32" alt="Author 06" />
                  </a>
                </div>
                <div>
                  <span class="text-gray-600">By </span>
                  <a class="font-medium hover:underline" href="#0">Cory McCall</a>
                </div>
              </footer>
            </article>

            <!-- 8th article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="150">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" :src="require('@/images/tutorial-08.jpg')" width="352" height="198" alt="News 08" />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Guides</a>
                    </li>
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-150 ease-in-out" href="#0">Advanced</a>
                    </li>
                    <li class="m-1">
                      <span class="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">12 min read</span>
                    </li>
                  </ul>
                </div>
                <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                  <router-link to="/blog-post" class="hover:underline">Live preview changes to React websites with Simple</router-link>
                </h3>
              </header>
              <p class="text-gray-600 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <footer class="text-sm flex items-center mt-4">
                <div class="flex flex-shrink-0 mr-3">
                  <a class="relative" href="#0">
                    <span class="absolute inset-0 -m-px" aria-hidden="true"><span class="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                    <img class="relative rounded-full" :src="require('@/images/news-author-04.jpg')" width="32" height="32" alt="Author 04" />
                  </a>
                </div>
                <div>
                  <span class="text-gray-600">By </span>
                  <a class="font-medium hover:underline" href="#0">Micheal Osman</a>
                </div>
              </footer>
            </article>

            <!-- 9th article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="300">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" :src="require('@/images/tutorial-09.jpg')" width="352" height="198" alt="News 09" />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Guides</a>
                    </li>
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-150 ease-in-out" href="#0">Intermediate</a>
                    </li>
                    <li class="m-1">
                      <span class="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">9 min read</span>
                    </li>
                  </ul>
                </div>
                <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                  <router-link to="/blog-post" class="hover:underline">Create a custom app and deploy It with Simple</router-link>
                </h3>
              </header>
              <p class="text-gray-600 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
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
  name: 'TutorialsList',
}
</script>