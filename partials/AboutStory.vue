<template>
  <section>
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">

        <div class="max-w-3xl mx-auto">
          <h3 class="h3 mb-3">Our story</h3>
          <p class="text-lg text-gray-600 mb-8">
            Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet. Morbi tristique senectus et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien.
          </p>
          <p class="text-lg text-gray-600 mb-8">
            Quam pellentesque nec nam aliquam sem et tortor consequat, pellentesque adipiscing commodo elit at imperdiet. Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam varius sit amet mattis vulputate enim nulla aliquet porttitor.
          </p>
        </div>

        <div class="sm:flex">
          <figure class="flex flex-shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
            <img class="flex-grow self-start rounded" :src="require('@/images/about-02.jpg')" width="435" height="326" alt="About us 02" />
          </figure>
          <div class="sm:ml-8 lg:ml-16">
            <h4 class="h4 mb-2">2017 - 2020</h4>
            <p class="text-lg text-gray-600 mb-8">
              Quam pellentesque nec nam aliquam sem et tortor consequat, pellentesque adipiscing commodo elit at imperdiet. Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam varius sit amet mattis vulputate enim nulla aliquet porttitor.
            </p>
            <div class="flex  mb-8">
              <img class="rounded-full self-start flex-shrink-0 shadow-lg mr-4" :src="require('@/images/about-logo.png')" width="40" height="40" alt="Logo" />
              <div>
                <blockquote class="text-gray-600 italic">
                  “ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                </blockquote>
                <div class="text-sm font-medium text-gray-600 mt-2">
                  <cite class="text-gray-900 not-italic">Micheal Osman</cite> · <a class="text-blue-600" href="#0">New York Times</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-3xl mx-auto">
          <p class="text-lg text-gray-600">
            Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet. Morbi tristique senectus et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutStory',
}
</script>