<template>
<section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="py-12 md:py-20 border-t border-gray-200">

            <!-- Section header -->
            <div class="max-w-3xl mx-auto text-center pb-20">
                <h2 class="h2">Questions & Answers</h2>
            </div>

            <!-- Faqs -->
            <ul class="max-w-3xl mx-auto pl-12">
              <Accordion title="Do I need coding knowledge to use this product?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Accordion>
              <Accordion title="Do you have student or non-profit discounts?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Accordion>
              <Accordion title="Is there a way to become an Affiliate reseller of this product?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Accordion>
              <Accordion title="What is the difference between the Free and Paid versions?" active>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Accordion>
              <Accordion title="How can I change the owner of a workspace?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Accordion>
              <span class="block border-t border-gray-200" aria-hidden="true"></span>
            </ul>
            
        </div>
    </div>
</section>
</template>

<script>
import Accordion from './../utils/Accordion.vue'

export default {
  name: 'Faqs',
  components: {
    Accordion
  },  
}
</script>