<template>
  <section class="relative">

    <!-- Section background (needs .relative class on parent and next sibling elements) -->
    <div class="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
    <div class="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-12 md:pt-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h2 mb-4">We're breaking down steep learning curves into three simple steps</h1>
          <p class="text-xl text-gray-600">Generating insight, relevant connections and shared value.</p>
        </div>

        <!-- Items -->
        <div class="relative max-w-sm mx-auto grid gap-6 md:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

          <div class="absolute top-1/2 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-300 hidden md:block" aria-hidden="true"></div>

          <div v-for="(step, index) in steps" class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div class="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">{{index + 1}}</div>
            <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">{{step.title}}</h4>
            <p class="text-gray-600 text-center">{{step.text}}</p>
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
      steps: [
        {
          title: 'Map',
          text:
            "Let us know what you'd like to learn or share. Anything is welcome!",
        },
        {
          title: 'Match',
          text:
            'See how you and your peers are connected by skills. We help you plan a session in the format you choose.',
        },
        {
          title: 'Meet',
          text:
            "Host or join a session to learn with other team members based on your interests.",
        }
      ]
    }
  },
}
</script>