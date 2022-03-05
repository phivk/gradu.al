<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Top area: Blocks -->
      <div
        class="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200"
      >
        <!-- 1st block -->
        <div class="sm:col-span-12 lg:col-span-3">
          <div class="mb-2">
            <!-- Logo -->
            <router-link to="/" class="inline-block" aria-label="Cruip">
              <svg
                class="w-8 h-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="21.152%"
                    cy="86.063%"
                    fx="21.152%"
                    fy="86.063%"
                    r="79.941%"
                    id="footer-logo"
                  >
                    <stop stop-color="#4FD1C5" offset="0%" />
                    <stop stop-color="#81E6D9" offset="25.871%" />
                    <stop stop-color="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  fill="url(#footer-logo)"
                  fill-rule="nonzero"
                />
              </svg>
            </router-link>
          </div>
          <div class="text-sm text-gray-600">
            <router-link
              to="#"
              class="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >Terms</router-link
            >
            ·
            <router-link
              to="#"
              class="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >Privacy Policy</router-link
            >
          </div>
        </div>

        <!-- 2nd block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-gray-800 font-medium mb-2">Products</h6>
          <ul class="text-sm">
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >Web Studio</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >DynamicBox Flex</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >Programming Forms</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >Integrations</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >Command-line</router-link
              >
            </li>
          </ul>
        </div>

        <!-- 3rd block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-gray-800 font-medium mb-2">Resources</h6>
          <ul class="text-sm">
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >Documentation</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >Tutorials & Guides</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >Blog</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >Support Center</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >Partners</router-link
              >
            </li>
          </ul>
        </div>

        <!-- 4th block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-gray-800 font-medium mb-2">Company</h6>
          <ul class="text-sm">
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >Home</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >About us</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >Company values</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >Pricing</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >Privacy Policy</router-link
              >
            </li>
          </ul>
        </div>

        <!-- 5th block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-3">
          <h6 class="text-gray-800 font-medium mb-2">Subscribe</h6>
          <p class="text-sm text-gray-600 mb-4">
            Get the latest news and articles to your inbox every month.
          </p>
          <form>
            <div class="flex flex-wrap mb-4">
              <div class="w-full">
                <label class="block text-sm sr-only" for="newsletter"
                  >Email</label
                >
                <div class="relative flex items-center max-w-xs">
                  <input
                    id="newsletter"
                    type="email"
                    class="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                    placeholder="Your email"
                    required
                  />
                  <button
                    type="submit"
                    class="absolute inset-0 left-auto"
                    aria-label="Subscribe"
                  >
                    <span
                      class="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                      aria-hidden="true"
                    ></span>
                    <svg
                      class="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fill-rule="nonzero"
                      />
                    </svg>
                  </button>
                </div>
                <!-- Success message -->
                <!-- <p class="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> -->
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- Bottom area -->
      <div
        class="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200"
      >
        <!-- Social links -->
        <ul class="flex mb-4 md:order-1 md:ml-4 md:mb-0">
          <li class="ml-4">
            <a
              href="https://github.com/phivk/gradu.al/"
              target="_blank"
              class="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
              aria-label="Github"
            >
              <svg
                class="w-8 h-8 fill-current"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"
                />
              </svg>
            </a>
          </li>
        </ul>

        <!-- Copyrights note -->
        <div class="text-sm text-gray-600 mr-4">
          <logo class="w-8 mb-4" is-black /> &copy;
          {{ new Date().getFullYear() }}
          Gradual. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
  name: "Footer",
  components: {
    Logo,
  },
};
</script>
