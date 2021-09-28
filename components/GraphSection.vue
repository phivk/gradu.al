<template>
  <section class="mb-16">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Community learning intentions</h2>
    <div class="mb-4 text-lg mx-auto lh-copy">
      <p>
        Here's an interactive map of skills that {{ memberTitlePlural }} would
        like to <span class="b orange">↗︎learn</span> or
        <span class="b purple">↗︎share</span>.
      </p>
      <p>
        Check out <span class="b dark-green">●skills</span> and
        <span class="b dark-blue">●{{ memberTitlePlural }}</span> to discover
        opportunities for exchange!
      </p>
    </div>
    <slot></slot>
  </section>
</template>
<script>
export default {
  props: {
    memberTitlePlural: { type: String, default: "members" },
  },
};
</script>
