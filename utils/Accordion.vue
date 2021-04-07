<template>
  <component :is="tag">
    <button
      class="flex items-center w-full text-lg font-medium text-left py-5 border-t border-gray-200"
      @click.prevent="toggleAccordion(accordionOpen)"
      :aria-expanded="accordionOpen"
    >
      <svg class="w-4 h-4 fill-current text-blue-500 flex-shrink-0 mr-8 -ml-12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <rect y="7" width="16" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{'rotate-180': accordionOpen}" />
        <rect y="7" width="16" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{'rotate-180': accordionOpen}" />
      </svg>
      <span>{{title}}</span>
    </button>
    <div
      ref="accordion"
      class="text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
      :style="accordionOpen ? 'max-height: ' + $refs.accordion.scrollHeight + 'px; opacity: 1' : 'max-height: 0; opacity: 0'"
    >
      <p class="pb-5">
        <slot />
      </p>
    </div>    
  </component>
</template>
<script>
export default {
  name: 'Dropdown',
  props: {
    tag: {
      type: String,
      default: 'li'
    },    
    title: {
      type: String,
      default: null,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },    
  },
  data: function () {
    return {
      accordionOpen: false
    }
  },
  methods: {
    toggleAccordion(value) {
      if (value) {
        this.$refs.accordion.style.maxHeight = this.$refs.accordion.scrollHeight + 'px'
        this.$refs.accordion.style.opacity = '1'
        this.accordionOpen = false
      } else {
        this.$refs.accordion.style.maxHeight = '0'
        this.$refs.accordion.style.opacity = '0'
        this.accordionOpen = true
      }
    }
  },
  mounted() {
    this.active && this.toggleAccordion()
  }  
}
</script>