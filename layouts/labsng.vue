<template>
  <div class="theme-labsng">
    <div class="bg-color-bg min-vh-100">
      <TheNavBar class="bg-color-primary" backLinkTarget="/" backLinkText="lab.SNG" />
      <div class="p-2 sm:p-4 lg:p-8">
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import TheNavBar from "~/components/TheNavBar.vue";
export default {
  head() {
    return {
      link: [{ rel: "stylesheet", href: "/css/tachyons.min.css" }],
    };
  },
  components: {
    TheNavBar,
  },
};
</script>
<style>
:root {
  --color-labsng-green: #00ff00;
  --color-labsng-green-washed: #00ff0022;
  --color-labsng-dark-green: #00aa00;
  --color-labsng-dark-green-washed: #00aa0022;
  --color-labsng-light-gray: #f4f4f4;
}

.theme-labsng .color-primary { 
  color: var(--color-labsng-green); 
}
.theme-labsng .color-primary-washed { 
  color: var(--color-labsng-green-washed); 
}
.theme-labsng .color-accent { 
  color: var(--color-labsng-dark-green); 
}
.theme-labsng .color-accent-washed { 
  color: var(--color-labsng-dark-green-washed); 
}
.theme-labsng .color-bg { 
  color: var(--color-labsng-light-gray); 
}
.theme-labsng .bg-color-primary { 
  background-color: var(--color-labsng-green); 
}
.theme-labsng .bg-color-primary-washed { 
  background-color: var(--color-labsng-green-washed); 
}
.theme-labsng .bg-color-accent { 
  background-color: var(--color-labsng-dark-green); 
}
.theme-labsng .bg-color-accent-washed { 
  background-color: var(--color-labsng-dark-green-washed); 
}
.theme-labsng .bg-color-bg { 
  background-color: var(--color-labsng-light-gray); 
}
</style>
