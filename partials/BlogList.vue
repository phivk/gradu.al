<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Page header -->
        <div class="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
          <h1 class="h1 mb-4">Tending our garden … gradually</h1>
          <p class="text-xl text-gray-600">
            Stay up to date on the latest from Gradual and occasional thoughts
            from the team.
          </p>
        </div>

        <!-- Main content -->
        <div class="md:flex md:justify-between">
          <!-- Articles container -->
          <div class="md:flex-grow -mt-4">
            <BlogItem v-for="blog in blogs" :key="blog.title" :blog="blog" />
          </div>

          <!-- Sidebar -->
          <aside
            class="relative mt-12 md:mt-0 md:w-64 md:ml-12 lg:ml-20 md:flex-shrink-0"
          >
            <!-- Popular posts -->
            <!-- <div class="mb-8">
              <h4 class="text-lg font-bold leading-snug tracking-tight mb-4">
                Popular on Simple
              </h4>
              <ul class="-my-2">
                <li class="flex py-2 border-b border-gray-200">
                  <svg
                    class="w-4 h-4 flex-shrink-0 fill-current text-gray-400 mt-1 mr-3"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z"
                    />
                  </svg>
                  <article>
                    <h3 class="font-medium mb-1">
                      <AppLink to="/blog-post" class="hover:underline">
                        Create and Deploy a blog with Simple
                      </AppLink>
                    </h3>
                    <div class="text-sm text-gray-800">
                      <span class="text-gray-600">By </span>
                      <a class="font-medium hover:underline" href="#0"
                        >Knut Mayer</a
                      >
                    </div>
                  </article>
                </li>
                <li class="flex py-2 border-b border-gray-200">
                  <svg
                    class="w-4 h-4 flex-shrink-0 fill-current text-gray-400 mt-1 mr-3"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z"
                    />
                  </svg>
                  <article>
                    <h3 class="font-medium mb-1">
                      <AppLink to="/blog-post" class="hover:underline">
                        Why we think Simple is good for developers
                      </AppLink>
                    </h3>
                    <div class="text-sm text-gray-800">
                      <span class="text-gray-600">By </span>
                      <a class="font-medium hover:underline" href="#0"
                        >Micheal Osman</a
                      >
                    </div>
                  </article>
                </li>
                <li class="flex py-2 border-b border-gray-200">
                  <svg
                    class="w-4 h-4 flex-shrink-0 fill-current text-gray-400 mt-1 mr-3"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z"
                    />
                  </svg>
                  <article>
                    <h3 class="font-medium mb-1">
                      <AppLink to="/blog-post" class="hover:underline">
                        Getting started with Vue.js and Stripe
                      </AppLink>
                    </h3>
                    <div class="text-sm text-gray-800">
                      <span class="text-gray-600">By </span>
                      <a class="font-medium hover:underline" href="#0"
                        >Justin Park</a
                      >
                    </div>
                  </article>
                </li>
                <li class="flex py-2 border-b border-gray-200">
                  <svg
                    class="w-4 h-4 flex-shrink-0 fill-current text-gray-400 mt-1 mr-3"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z"
                    />
                  </svg>
                  <article>
                    <h3 class="font-medium mb-1">
                      <AppLink to="/blog-post" class="hover:underline">
                        Making New projects with React & Simple
                      </AppLink>
                    </h3>
                    <div class="text-sm text-gray-800">
                      <span class="text-gray-600">By </span>
                      <a class="font-medium hover:underline" href="#0"
                        >Knut Mayer</a
                      >
                    </div>
                  </article>
                </li>
                <li class="flex py-2">
                  <svg
                    class="w-4 h-4 flex-shrink-0 fill-current text-gray-400 mt-1 mr-3"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z"
                    />
                  </svg>
                  <article>
                    <h3 class="font-medium mb-1">
                      <AppLink to="/blog-post" class="hover:underline">
                        How to add custom icons to your Simple project
                      </AppLink>
                    </h3>
                    <div class="text-sm text-gray-800">
                      <span class="text-gray-600">By </span>
                      <a class="font-medium hover:underline" href="#0"
                        >Lisa Allison</a
                      >
                    </div>
                  </article>
                </li>
              </ul>
            </div> -->

            <!-- Topics -->
            <!-- <div>
              <h4 class="text-lg font-bold leading-snug tracking-tight mb-4">
                Topics
              </h4>
              <ul class="-my-2">
                <li class="flex py-2 border-b border-gray-200">
                  <svg
                    class="w-4 h-4 flex-shrink-0 fill-current text-gray-400 mt-1 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.99 15h2.02l.429-3h3.979l-.428 3h2.02l.429-3H14v-2h-2.275l.575-4H15V4h-2.418l.428-3h-2.02l-.429 3H6.582l.428-3H4.99l-.429 3H2v2h2.275L3.7 10H1v2h2.418l-.428 3zM6.3 6h3.979L9.7 10H5.725L6.3 6z"
                    />
                  </svg>
                  <div class="font-medium mb-1">
                    <a class="hover:underline" href="#0">
                      News & Updates
                    </a>
                  </div>
                </li>
                <li class="flex py-2 border-b border-gray-200">
                  <svg
                    class="w-4 h-4 flex-shrink-0 fill-current text-gray-400 mt-1 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.99 15h2.02l.429-3h3.979l-.428 3h2.02l.429-3H14v-2h-2.275l.575-4H15V4h-2.418l.428-3h-2.02l-.429 3H6.582l.428-3H4.99l-.429 3H2v2h2.275L3.7 10H1v2h2.418l-.428 3zM6.3 6h3.979L9.7 10H5.725L6.3 6z"
                    />
                  </svg>
                  <div class="font-medium mb-1">
                    <a class="hover:underline" href="#0">
                      Interviews
                    </a>
                  </div>
                </li>
                <li class="flex py-2 border-b border-gray-200">
                  <svg
                    class="w-4 h-4 flex-shrink-0 fill-current text-gray-400 mt-1 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.99 15h2.02l.429-3h3.979l-.428 3h2.02l.429-3H14v-2h-2.275l.575-4H15V4h-2.418l.428-3h-2.02l-.429 3H6.582l.428-3H4.99l-.429 3H2v2h2.275L3.7 10H1v2h2.418l-.428 3zM6.3 6h3.979L9.7 10H5.725L6.3 6z"
                    />
                  </svg>
                  <div class="font-medium mb-1">
                    <a class="hover:underline" href="#0">
                      Simple Dev
                    </a>
                  </div>
                </li>
                <li class="flex py-2">
                  <svg
                    class="w-4 h-4 flex-shrink-0 fill-current text-gray-400 mt-1 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.99 15h2.02l.429-3h3.979l-.428 3h2.02l.429-3H14v-2h-2.275l.575-4H15V4h-2.418l.428-3h-2.02l-.429 3H6.582l.428-3H4.99l-.429 3H2v2h2.275L3.7 10H1v2h2.418l-.428 3zM6.3 6h3.979L9.7 10H5.725L6.3 6z"
                    />
                  </svg>
                  <div class="font-medium mb-1">
                    <a class="hover:underline" href="#0">
                      Product
                    </a>
                  </div>
                </li>
              </ul>
            </div> -->
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogItem from "~/partials/BlogItem.vue";
export default {
  name: "BlogList",
  props: {
    blogs: { type: Array, required: true, default: () => [] },
  },
  components: {
    BlogItem,
  },
};
</script>
