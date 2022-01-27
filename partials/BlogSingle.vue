<template>
  <section>
    <SocialHead
      :title="blog.title"
      :description="blog.description"
      :image="blog.imageSrc"
    />
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto lg:max-w-none">
          <article>
            <!-- Article header -->
            <header class="max-w-3xl mx-auto mb-20">
              <!-- Title -->
              <h1 class="h1 text-center mb-4">
                {{ blog.title }}
              </h1>
            </header>

            <!-- Article content -->
            <div class="lg:flex lg:justify-between" data-sticky-container>
              <!-- Sidebar -->
              <aside class="relative hidden lg:block w-64 mr-20 flex-shrink-0">
                <div
                  data-sticky
                  data-margin-top="100"
                  data-sticky-for="768"
                  data-sticky-wrap
                >
                  <h4
                    class="text-lg font-bold leading-snug tracking-tight mb-4"
                  >
                    Table of contents
                  </h4>
                  <ul class="font-medium -my-1">
                    <li
                      class="py-1"
                      v-for="link of blog.toc"
                      :key="link.id"
                      :class="{
                        toc2: link.depth === 2,
                        toc3: link.depth === 3,
                      }"
                    >
                      <NuxtLink
                        :to="`#${link.id}`"
                        class="flex items-center hover:underline"
                      >
                        <svg
                          class="w-4 h-4 fill-current text-gray-400 mr-3 flex-shrink-0"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z"
                          />
                        </svg>
                        <span>
                          {{ link.text }}
                        </span>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </aside>

              <!-- Main content -->
              <div>
                <!-- Article meta -->
                <div class="flex items-center mb-6">
                  <div class="flex flex-shrink-0 mr-3">
                    <div class="relative">
                      <span class="absolute inset-0 -m-px" aria-hidden="true"
                        ><span
                          class="absolute inset-0 -m-px bg-white rounded-full"
                        ></span
                      ></span>
                      <img
                        class="relative rounded-full"
                        :src="profilePic"
                        width="32"
                        height="32"
                        :alt="`profile pic ${blog.author}`"
                      />
                    </div>
                  </div>
                  <div>
                    <span class="text-gray-600">By </span>
                    <span class="font-medium">
                      {{ blog.author }}
                    </span>
                    <span class="text-gray-600"> · {{ dateFormatted }} </span>
                  </div>
                </div>
                <hr class="w-16 h-px pt-px bg-gray-200 border-0 mb-6" />

                <!-- Article body -->
                <div class="text-lg text-gray-600">
                  <img
                    v-if="blog.imageSrc"
                    :src="blog.imageSrc"
                    :alt="blog.title"
                  />
                  <NuxtContent class="" :document="blog" />

                  <div>
                    <hr class="w-full h-px pt-px mt-8 bg-gray-200 border-0" />
                    <div class="mt-6">
                      <AppLink
                        to="/blog"
                        class="inline-flex items-center text-base text-blue-600 font-medium hover:underline"
                      >
                        <svg
                          class="w-3 h-3 fill-current text-blue-400 flex-shrink-0 mr-2"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M.293 5.282L5 .5l1.414 1.436-3 3.048H12v2.032H3.414l3 3.048L5 11.5.293 6.718a1.027 1.027 0 010-1.436z"
                          />
                        </svg>
                        <span>Back to the blog</span>
                      </AppLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Article footer -->
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { formatDate, isValidDate } from "~/util/date";
import { profilePics } from "~/util/author";
export default {
  props: {
    blog: { type: Object, required: true, default: () => {} },
  },
  computed: {
    dateFormatted() {
      return isValidDate(new Date(this.blog.createdAt))
        ? formatDate(new Date(this.blog.createdAt))
        : "";
    },
    profilePic() {
      const fn = profilePics[this.blog.author];
      return require(`@/assets/${fn}`);
    },
  },
};
</script>
