<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">

        <!-- CTA box -->
        <div class="bg-blue-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

          <div class="flex flex-col lg:flex-row justify-between items-center">

            <!-- CTA content -->
            <div class="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
              <h3 class="h3 text-white mb-2">Curious to see what you could learn?</h3>
              <p class="text-white text-lg opacity-75">We'd love to walk you through the process based on your requirements.</p>
            </div>

            <!-- CTA button -->
            <div>
              <AppLink to="/get-demo" class="btn text-blue-600 bg-gradient-to-r from-blue-100 to-white">Get a personalised demo</AppLink>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cta',
}
</script>