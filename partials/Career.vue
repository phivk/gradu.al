<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-200">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 class="h2 mb-4">Simple is growing. Grow with us.</h2>
          <p class="text-xl text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
          </p>
        </div>

        <!-- Team images -->
        <div class="max-w-3xl mx-auto">
          <div class="pb-12 md:pb-20">
            <div class="relative w-full h-0 pb-3/4">
              <figure class="absolute h-auto" style="bottom: 9%;width: 41.7%;max-width: 320px;" data-aos="fade-right">
                <img class="shadow-2xl" :src="require('@/images/team-mosaic-03.jpg')" width="320" height="240" alt="Team mosaic 03" />
              </figure>
              <figure class="absolute" style="left: 14.8%; top: 11.8%;width: 70.3%;max-width: 540px;" data-aos="fade-down" data-aos-delay="150">
                <img class="shadow-2xl" :src="require('@/images/team-mosaic-01.jpg')" width="540" height="360" alt="Team mosaic 01" />
              </figure>
              <figure class="absolute h-auto" style="bottom: 0;right: 6.2%;width: 41.7%;max-width: 320px;" data-aos="fade-left" data-aos-delay="300">
                <img class="shadow-2xl" :src="require('@/images/team-mosaic-02.jpg')" width="320" height="240" alt="Team mosaic 02" />
              </figure>
              <figure class="absolute h-auto" style="top: 5.9%;right: 0;width: 23.4%;max-width: 180px;" data-aos="zoom-y-out" data-aos-delay="450">
                <img class="shadow-2xl" :src="require('@/images/team-mosaic-04.jpg')" width="180" height="180" alt="Team mosaic 04" />
              </figure>
              <svg class="relative mx-auto h-auto rounded-full shadow-2xl" style="width: 10.4%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stop-color="#4FD1C5" offset="0%" />
                    <stop stop-color="#81E6D9" offset="25.871%" />
                    <stop stop-color="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fill-rule="nonzero" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Job list -->
        <div class="max-w-3xl mx-auto">

          <h3 class="h4 mb-8">Current open positions</h3>

          <div class="-my-3">

            <!-- 1st Item -->
            <a class="flex justify-between items-center p-4 rounded border border-gray-200 transition duration-300 ease-in-out bg-gray-100 shadow-md hover:bg-white hover:shadow-lg mb-3" href="#0">
              <div class="font-medium">Senior Backend Engineer</div>
              <svg class="w-4 h-4 fill-current text-blue-600 flex-shrink-0 ml-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.707 1h-8v2h5.586L1 13.293l1.414 1.414L12.707 4.414V10h2V2a1 1 0 00-1-1z" />
              </svg>
            </a>

            <!-- 2nd Item -->
            <a class="flex justify-between items-center p-4 rounded border border-gray-200 transition duration-300 ease-in-out bg-gray-100 shadow-md hover:bg-white hover:shadow-lg mb-3" href="#0">
              <div class="font-medium">Infrastructure Engineer</div>
              <svg class="w-4 h-4 fill-current text-blue-600 flex-shrink-0 ml-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.707 1h-8v2h5.586L1 13.293l1.414 1.414L12.707 4.414V10h2V2a1 1 0 00-1-1z" />
              </svg>
            </a>

            <!-- 3rd Item -->
            <a class="flex justify-between items-center p-4 rounded border border-gray-200 transition duration-300 ease-in-out bg-gray-100 shadow-md hover:bg-white hover:shadow-lg mb-3" href="#0">
              <div class="font-medium">Senior Account Executive</div>
              <svg class="w-4 h-4 fill-current text-blue-600 flex-shrink-0 ml-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.707 1h-8v2h5.586L1 13.293l1.414 1.414L12.707 4.414V10h2V2a1 1 0 00-1-1z" />
              </svg>
            </a>

            <!-- 4th Item -->
            <a class="flex justify-between items-center p-4 rounded border border-gray-200 transition duration-300 ease-in-out bg-gray-100 shadow-md hover:bg-white hover:shadow-lg" href="#0">
              <div class="font-medium">Senior Front-end Architect</div>
              <svg class="w-4 h-4 fill-current text-blue-600 flex-shrink-0 ml-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.707 1h-8v2h5.586L1 13.293l1.414 1.414L12.707 4.414V10h2V2a1 1 0 00-1-1z" />
              </svg>
            </a>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Career',
}
</script>