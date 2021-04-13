<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 class="h2 mb-4" data-aos="zoom-y-out">We've received some great feedback</h2>
          <p class="text-xl text-gray-600">From people exchanging knowledge and skills all over the world.</p>
        </div>

        <!-- Carousel area -->
        <div class="max-w-3xl mx-auto">

          <!-- Carousel -->
          <div class="relative mt-20 h-96" data-aos="zoom-y-out">

            <!-- Testimonials -->
            <transition-group tag="div" class="relative flex items-start border-2 border-gray-200 rounded bg-white" enter-active-class="transition ease-in-out duration-700 transform order-first" enter-class="opacity-0 -translate-y-8" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in-out duration-300 transform absolute" leave-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-8">
              <template v-for="(item, index) in items">
                <div
                  :key="index"
                  v-show="active === index"
                  class="text-center px-12 py-8 pt-20 mx-4 md:mx-0"
                >
                  <div class="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <svg class="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                      <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                    </svg>
                    <img class="relative rounded-full" :src="item.imgSrc" width="96" height="96" :alt="item.name" />
                  </div>
                  <blockquote class="text-xl font-medium mb-4">{{item.quote}}</blockquote>
                  <cite class="block font-bold text-lg not-italic mb-1">{{item.name}}</cite>
                  <div class="text-gray-600">
                    <span>{{item.role}}</span> <a class="text-blue-600 hover:underline" :href="item.link">{{item.team}}</a>
                  </div>
                </div>
              </template>
            </transition-group>

            <!-- Arrows -->
            <div class="absolute inset-0 flex items-center justify-between">
              <button class="w-16 h-16 p-1 flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-md hover:shadow-lg transform -translate-x-2 md:-translate-x-1/2" @click="active = active === 0 ? items.length - 1 : active - 1; stopAutorotate();">
                <span class="sr-only">Previous</span>
                <svg class="w-4 h-4 fill-current text-gray-500" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
                </svg>
              </button>
              <button class="w-16 h-16 p-1 flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-md hover:shadow-lg transform translate-x-2 md:translate-x-1/2" @click="active = active === items.length - 1 ? 0 : active + 1; stopAutorotate();">
                <span class="sr-only">Next</span>
                <svg class="w-4 h-4 fill-current text-gray-500" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsCarousel',
  data: function () {
    return {
      active: 0,
      autorotate: true,
      autorotateTiming: 7000,
      items: [
        {
          imgSrc: 'https://ca.slack-edge.com/T170JCUN6-U01QW3CAGGZ-d7fab570a409-512',
          quote:
            '“ I enjoyed being put in contact with someone I didn’t know within the community as getting meaningful connections in virtual settings is hard. It happened to be that our skills and interests were very complimentary and that was incredibly valuable to me, even if it wouldn’t have led to us hosting a session together. “',
          name: 'Omar Shehata',
          role: 'Graphics Engineer',
          team: 'Philadelphia, PA',
          link: 'https://omarshehata.me/'
        },
        {
          imgSrc: 'https://ca.slack-edge.com/T170JCUN6-U01P03UKEMV-e1acfddef565-512',
          quote:
            '“ Using Gradual was a delight! I got quick feedback on a workshop in a setting that was low risk, but high value. After our session, I put work I had prepared into an article which has ended up being really personally useful for me. “',
          name: 'Maria Bridge',
          role: 'Stanford MBA',
          // team: '@Shopify',
          link: 'https://mariabridge.medium.com/'
        },   
        {
          imgSrc: 'https://media-exp1.licdn.com/dms/image/C5603AQEYMkCJmUi-og/profile-displayphoto-shrink_400_400/0/1582063798281?e=1623888000&v=beta&t=oBbmCYNDe5Bs9yiV4HNiKqQ8aGbs7-f9I061VTEOjkE',
          quote:
            "“ It was mind blowing to learn how much knowledge our community had internally. Gradual made these skills visible and easier to share. “",
          name: 'Pim Schachtschabel',
          role: 'Human Experience Architect',
          team: 'Architecting Curiosity',
          link: 'https://www.architectingcuriosity.com'
        },
        {
          imgSrc: 'https://pbs.twimg.com/profile_images/2062740783/Snapshot_20110909_5_400x400.JPG',
          quote:
            "“ Gradual's participatory ethos really opened the door for us as a group to think differently about learning skills in a more community orientated and expansive way. The personal connections that are formed in the process are incredibly important motivators, they galvanize people's intrinsic curiosity and slowly build that sense of shared achievement that is really wonderful. “",
          name: 'Tom Salmon',
          role: 'Phd researcher in education',
          team: 'Cape Peninsula University of Technology',
          link: 'https://www.linkedin.com/in/tomsalmon12345/'
        }
      ]
    }
  },
  methods: {
    stopAutorotate() {
      clearInterval(this.autorotateInterval)
    }  
  },    
  mounted() {
    if (this.autorotate) {
        this.autorotateInterval = setInterval(() => {
            this.active = this.active + 1 === this.items.length ? 0 : this.active + 1
        }, this.autorotateTiming)
    }
  },
  beforeDestroy() {
    this.stopAutorotate()
  }
}
</script>