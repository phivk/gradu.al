<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">

        <!-- CTA box -->
        <div class="bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

          <div class="flex flex-col lg:flex-row justify-between items-center">

            <!-- CTA content -->
            <div class="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 class="h3 text-white">Sounds like we are building something cool?</h3>
            </div>

            <!-- CTA button -->
            <div>
              <router-link to="/signup" class="btn text-white bg-blue-600 hover:bg-blue-700">Join us today</router-link>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaAlternative',
}
</script>