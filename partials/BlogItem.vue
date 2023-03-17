<template>
  <article class="flex items-center py-4 border-b border-gray-200">
    <div>
      <header>
        <h2 class="h4 mb-2">
          <AppLink :to="blog.path" class="hover:underline">
            {{ blog.title }}
          </AppLink>
        </h2>
      </header>
      <div class="text-lg text-gray-600 mb-4">
        {{ blog.description }}
      </div>
      <footer class="text-sm">
        <div class="flex items-center">
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
            <span class="text-gray-600"> · {{ dateFormatted }}</span>
          </div>
        </div>
      </footer>
    </div>
    <AppLink :to="blog.path" class="block flex-shrink-0 ml-6">
      <span class="sr-only">Read more</span>
      <svg
        class="w-4 h-4 fill-current text-blue-600"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
      </svg>
    </AppLink>
  </article>
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
      const blogDate = this.blog.datePublished
        ? this.blog.datePublished
        : this.blog.createdAt;
      return isValidDate(new Date(blogDate))
        ? formatDate(new Date(blogDate))
        : "";
    },
    profilePic() {
      if (this.blog.author) {
        const fn = profilePics[this.blog.author];
        return require(`@/assets/${fn}`);
      } else {
        return "";
      }
    },
  },
};
</script>
