<template>
  <section class="relative">

    <!-- Section background (needs .relative class on parent and next sibling elements) -->
    <div class="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
    <div class="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-12 md:pt-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h2 mb-4">How Simple works</h1>
          <p class="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
        </div>

        <!-- Top image -->
        <div class="pb-12 md:pb-16">
          <img :src="require('@/images/features-top-image.png')" width="1104" height="325" alt="Features top" />
        </div>

        <!-- Section content -->
        <div class="md:grid md:grid-cols-12 md:gap-6">

          <!-- Content -->
          <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
            <div class="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
              <h3 class="h3 mb-3">Powerful suite of tools</h3>
              <p class="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
            </div>
            <!-- Tabs buttons -->
            <div class="mb-8 md:mb-0">
              <a :class="tab !== '1' ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'" class="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3" href="#0" @click.prevent="tab = '1'">
                <div>
                  <div class="font-bold leading-snug tracking-tight mb-1">Building the Simple ecosystem</div>
                  <div class="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
                </div>
                <div class="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg class="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                  </svg>
                </div>
              </a>
              <a :class="tab !== '2' ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'" class="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3" href="#0" @click.prevent="tab = '2'">
                <div>
                  <div class="font-bold leading-snug tracking-tight mb-1">Building the Simple ecosystem</div>
                  <div class="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
                </div>
                <div class="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg class="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fill-rule="nonzero" />
                  </svg>
                </div>
              </a>
              <a :class="tab !== '3' ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'" class="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out" href="#0" @click.prevent="tab = '3'">
                <div>
                  <div class="font-bold leading-snug tracking-tight mb-1">Building the Simple ecosystem</div>
                  <div class="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
                </div>
                <div class="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg class="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fill-rule="nonzero" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <!-- Tabs items -->
          <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out">
            <div class="relative flex flex-col text-center lg:text-right">
              <!-- Item 1 -->
              <transition
                enter-active-class="transition ease-in-out duration-700 transform order-first"
                enter-class="opacity-0 translate-y-16"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in-out duration-300 transform absolute"
                leave-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-16"
              >
                <div class="w-full"  v-show="tab === '1'">
                  <div class="relative inline-flex flex-col">
                    <img class="md:max-w-none mx-auto rounded" :src="require('@/images/features-home-bg-01.png')" width="500" height="375" alt="Features bg" />
                    <img class="md:max-w-none absolute w-full left-0 transform animate-float" :src="require('@/images/features-home-element-01.png')" width="500" height="147" alt="Element 01" style="top:22%" />
                    <img class="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500" :src="require('@/images/features-home-element-02.png')" width="500" height="158" alt="Element 02" style="top:39%" />
                    <img class="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000" :src="require('@/images/features-home-element-03.png')" width="500" height="167" alt="Element 03" style="top:77%" />
                  </div>
                </div>
              </transition>
              <!-- Item 2 -->
              <transition
                enter-active-class="transition ease-in-out duration-700 transform order-first"
                enter-class="opacity-0 translate-y-16"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in-out duration-300 transform absolute"
                leave-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-16"
              >
                <div class="w-full"  v-show="tab === '2'">
                  <div class="relative inline-flex flex-col">
                    <img class="md:max-w-none mx-auto rounded" :src="require('@/images/features-home-bg-01.png')" width="500" height="375" alt="Features bg" />
                    <img class="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000" :src="require('@/images/features-home-element-03.png')" width="500" height="167" alt="Element 03" style="top:18%" />
                    <img class="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500" :src="require('@/images/features-home-element-02.png')" width="500" height="158" alt="Element 02" style="top:40%" />
                    <img class="md:max-w-none absolute w-full left-0 transform animate-float" :src="require('@/images/features-home-element-01.png')" width="500" height="147" alt="Element 01" style="top:79%" />
                  </div>
                </div>
              </transition>
              <!-- Item 3 -->
              <transition
                enter-active-class="transition ease-in-out duration-700 transform order-first"
                enter-class="opacity-0 translate-y-16"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in-out duration-300 transform absolute"
                leave-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-16"
              >
                <div class="w-full"  v-show="tab === '3'">
                  <div class="relative inline-flex flex-col">
                    <img class="md:max-w-none mx-auto rounded" :src="require('@/images/features-home-bg-01.png')" width="500" height="375" alt="Features bg" />
                    <img class="md:max-w-none absolute w-full left-0 transform animate-float" :src="require('@/images/features-home-element-01.png')" width="500" height="147" alt="Element 01" style="top:22%" />
                    <img class="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500" :src="require('@/images/features-home-element-02.png')" width="500" height="158" alt="Element 02" style="top:39%" />
                    <img class="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000" :src="require('@/images/features-home-element-03.png')" width="500" height="167" alt="Element 03" style="top:77%" />
                  </div>
                </div>
              </transition>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesHome',
  data: function () {
    return {
      tab: '1',
    }
  },
}
</script>