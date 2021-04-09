<template>
  <header class="fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out" :class="{ 'bg-white blur shadow-lg': !top }">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="flex-shrink-0 mr-4">
          <!-- Logo -->
          <router-link to="/" class="block" aria-label="Gradual">
            <logo class="w-12" is-black/>
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:flex-grow">

          <!-- Desktop menu links -->
          <ul class="flex flex-grow justify-end flex-wrap items-center">
            <li v-for="link in links">
              <router-link :to="link.path" class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">{{link.text}}</router-link>
            </li>
            <Dropdown v-if="dropdownLinks.length" title="Use Cases">
              <li v-for="ddLink in dropdownLinks">
                <router-link :to="ddLink.path" class="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">{{ddLink.text}}</router-link>
              </li>
            </Dropdown>
          </ul>

          <!-- Desktop sign in links -->
          <ul class="flex flex-grow justify-end flex-wrap items-center">
            <!-- <li>
              <router-link to="/signin" class="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</router-link>
            </li> -->
            <li>
              <router-link to="/get-demo" class="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                <span>Get a Demo</span>
                <svg class="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill-rule="nonzero" />
                </svg>
              </router-link>
            </li>
          </ul>

        </nav>

        <!-- Mobile menu -->
        <div class="flex md:hidden">

          <!-- Hamburger button -->
          <button class="hamburger" ref="hamburger" :class="{ active: mobileNavOpen }" aria-controls="mobile-nav" :aria-expanded="mobileNavOpen" @click="mobileNavOpen = !mobileNavOpen">
            <span class="sr-only">Menu</span>
            <svg class="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect y="4" width="24" height="2" />
              <rect y="11" width="24" height="2" />
              <rect y="18" width="24" height="2" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <transition
            enter-active-class="transition ease-out duration-200 transform"
            enter-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-out duration-200"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          >          
            <nav
              id="mobile-nav"
              ref="mobileNav"
              v-show="mobileNavOpen"
              class="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white transition-all duration-300 ease-in-out"
            >
              <ul class="px-5 py-2">
                <li v-for="link in links">
                  <router-link :to="link.path" class="flex text-gray-600 hover:text-gray-900 py-2">{{link.text}}</router-link>
                </li>          
                <li v-if="dropdownLinks.length" class="py-2 my-2 border-t border-b border-gray-200">
                  <span class="flex text-gray-600 hover:text-gray-900 py-2">Use Cases</span>
                  <ul class="pl-4">
                    <li v-for="ddLink in dropdownLinks">
                      <router-link :to="ddLink.path" class="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">{{ddLink.text}}</router-link>
                    </li>
                  </ul>
                </li>
                <!-- <li>
                  <router-link to="/signin" class="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center">Sign in</router-link>
                </li> -->
                <li>
                  <router-link to="/get-demo" class="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2">
                    <span>Get a Demo</span>
                    <svg class="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill="#999" fill-rule="nonzero" />
                    </svg>                
                  </router-link>
                </li>
              </ul>
            </nav>
          </transition>

        </div>

      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from './../utils/Dropdown.vue'
import Logo from "~/components/Logo.vue";

export default {
  name: 'Header',
  components: {
    Dropdown, 
    Logo, 
  },
  data: function () {
    return {
      mobileNavOpen: false,
      top: true,
      links: [
        {
          path: '/mozfest',
          text: 'MozFest',
        },
        {
          path: '/storytellersunited',
          text: 'Storytellers United',
        },
      ],
      dropdownLinks: [
      ]
    }
  },
  methods: {
    clickOutside(e) {
      if (!this.mobileNavOpen || this.$refs.mobileNav.contains(e.target) || this.$refs.hamburger.contains(e.target)) return
      this.mobileNavOpen = false
    },
    keyPress() {
      if (!this.mobileNavOpen || event.keyCode !== 27) return
      this.mobileNavOpen = false
    },
    handleScroll() {
      this.top = window.pageYOffset > 10 ? false : true
    }
  },  
  mounted() {
    document.addEventListener('click', this.clickOutside)    
    document.addEventListener('keydown', this.keyPress)
    document.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.clickOutside)
    document.removeEventListener('keydown', this.keyPress)
    document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>