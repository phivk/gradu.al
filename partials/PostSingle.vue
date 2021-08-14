<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto lg:max-w-none">

          <article>

            <!-- Article header -->
            <header class="max-w-3xl mx-auto mb-20">
              <!-- Title -->
              <h1 class="h1 text-center mb-4">Why we think Simple is good for developers</h1>
            </header>

            <!-- Article content -->
            <div class="lg:flex lg:justify-between" data-sticky-container>

              <!-- Sidebar -->
              <aside class="relative hidden lg:block w-64 mr-20 flex-shrink-0">
                <div data-sticky data-margin-top="100" data-sticky-for="768" data-sticky-wrap>
                  <h4 class="text-lg font-bold leading-snug tracking-tight mb-4">Table of contents</h4>
                  <ul class="font-medium -my-1">
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#introduction">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 flex-shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>Introduction</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#general">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 flex-shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>General content</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#additional">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 flex-shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>Additional reading</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#conclusion">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 flex-shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>Conclusion</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>

              <!-- Main content -->
              <div>

                <!-- Article meta -->
                <div class="flex items-center mb-6">
                  <div class="flex flex-shrink-0 mr-3">
                    <a class="relative" href="#0">
                      <span class="absolute inset-0 -m-px" aria-hidden="true"><span class="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                      <img class="relative rounded-full" :src="require('@/images/news-author-04.jpg')" width="32" height="32" alt="Author 04" />
                    </a>
                  </div>
                  <div>
                    <span class="text-gray-600">By </span>
                    <a class="font-medium hover:underline" href="#0">Micheal Osman</a>
                    <span class="text-gray-600"> · July 17, 2020</span>
                  </div>
                </div>
                <hr class="w-16 h-px pt-px bg-gray-200 border-0 mb-6" />

                <!-- Article body -->
                <div class="text-lg text-gray-600">
                  <p id="introduction" class="mb-8" style="scroll-margin-top: 100px;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet <a class="text-gray-900 underline" href="#0">how to manage anything</a> malesuada proin libero nunc consequat interdum varius. Quam pellentesque nec nam aliquam sem <strong class="font-medium text-gray-900">et tortor consequat</strong>. Pellentesque adipiscing commodo elit at imperdiet. Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam. <strong class="font-medium text-gray-900">Varius sit amet mattis vulputate enim</strong> nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.
                  </p>
                  <p class="mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <figure class="mb-8">
                    <img class="w-full rounded" :src="require('@/images/news-single.jpg')" width="768" height="432" alt="Blog single" />
                  </figure>
                  <h3 id="general" class="h3 text-gray-900 mb-4" style="scroll-margin-top: 100px;">General content</h3>
                  <p class="mb-8">
                    Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet. Morbi tristique senectus et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien.
                  </p>
                  <p class="mb-8">
                    Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend:
                  </p>
                  <ul class="list-disc list-inside mb-8">
                    <li class="mb-1"><strong class="font-medium text-gray-900">E-commerce</strong>: Better lorem ipsum generator.</li>
                    <li class="mb-1"><strong class="font-medium text-gray-900">Booking</strong>: Lorem ipsum post generator.</li>
                    <li class="mb-1"><strong class="font-medium text-gray-900">Retail</strong>: Generic dummy blog post generator.</li>
                    <li class="mb-1"><strong class="font-medium text-gray-900">On-demand services</strong>: Lorem ipsum generator shortcode.</li>
                  </ul>
                  <p class="mb-8">
                    Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend:
                  </p>
                  <p class="mb-8">
                    <a class="inline-flex items-center text-base text-blue-600 font-medium hover:underline" href="#0">
                      <span>Read Simple on-demand services</span>
                      <svg class="w-3 h-3 fill-current text-blue-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" />
                      </svg>
                    </a>
                  </p>
                  <p class="mb-8">
                    Aenean sed adipiscing <em class="italic">diam donec adipiscing tristique risus nec feugiat</em> auctor urna nunc id cursus metus aliquam eleifend, arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet.
                  </p>
                  <h4 class="h4 text-gray-900 mb-4">Why support for Business is important</h4>
                  <p class="mb-8">
                    Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend.
                  </p>
                  <blockquote class="italic text-gray-900 font-medium mb-8">
                    “ Mi in nulla posuere sollicitudin. Porttitor eget dolor morbi non arcu risus quis varius quam. Pharetra vel turpis nunc eget lorem dolor sed viverra. Semper auctor neque vitae tempus quam pellentesque nec. “
                  </blockquote>
                  <p class="mb-8">
                    Et leo duis ut diam quam nulla porttitor porttitor lacus luctus accumsan tortor, lorem dolor sed viverra ipsum nunc aliquet bibendum enim eu augue ut lectus arcu bibendum at. Non sodales neque sodales ut etiam sit. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam.
                  </p>
                  <p class="p-4 bg-gray-100 border border-gray-300 rounded mb-8">
                    <a class="text-gray-900 underline" href="#0">Simple</a> is a sed viverra ipsum nunc aliquet bibendum enim eu augue ut lectus arcu bibendum at. Non sodales neque sodales ut etiam sit. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Learn more <a class="text-gray-900 underline" href="#0">here</a>.
                  </p>
                  <h3 id="additional" class="h3 text-gray-900 mb-4" style="scroll-margin-top: 100px;">Additional reading</h3>
                  <p class="mb-8">Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend:</p>
                  <p class="mb-8"><strong class="font-medium text-gray-900">Mi in nulla posuere sollicitudin:</strong></p>
                  <ul class="list-disc list-inside mb-8">
                    <li class="mb-1">
                      <a class="text-gray-900 underline" href="#0">E-commerce for etter lorem ipsum generator</a>
                    </li>
                    <li class="mb-1">
                      <a class="text-gray-900 underline" href="#0">Booking for lorem ipsum post generator</a>
                    </li>
                    <li class="mb-1">
                      <a class="text-gray-900 underline" href="#0">Retail for generic dummy blog post generator</a>
                    </li>
                    <li class="mb-1">
                      <a class="text-gray-900 underline" href="#0">On-demand services: Lorem ipsum generator shortcode</a>
                    </li>
                  </ul>
                  <h3 id="conclusion" class="h3 text-gray-900 mb-4" style="scroll-margin-top: 100px;">Conclusion</h3>
                  <p>
                    Sollicitudin ac orci phasellus egestas tellus rutrum telluse nim ut tellus elementum sagittis vitae et leo duis egestas purus viverra accumsan in nisl nisi scelerisquep ellentesque habitant morbi tristique, senectus et netus et dolor purus non enim praesent elementum facilisis leol, aoreet suspendisse interdum consectetur libero id faucibus.
                  </p>

                  <div>
                    <hr class="w-full h-px pt-px mt-8 bg-gray-200 border-0" />
                    <div class="mt-8">
                      Interested in more tips like this? Check out <a class="text-gray-900 underline" href="#0">Introducing the Testing Field Guide</a>.
                    </div>
                    <div class="mt-6">
                      <AppLink to="/blog" class="inline-flex items-center text-base text-blue-600 font-medium hover:underline">
                        <svg class="w-3 h-3 fill-current text-blue-400 flex-shrink-0 mr-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M.293 5.282L5 .5l1.414 1.436-3 3.048H12v2.032H3.414l3 3.048L5 11.5.293 6.718a1.027 1.027 0 010-1.436z" />
                        </svg>
                        <span>Back to the blog</span>
                      </AppLink>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <!-- Article footer -->
          </article>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PostSingle',
}
</script>