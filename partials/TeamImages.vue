<template>
  <section class="relative -mt-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="max-w-3xl mx-auto">
        <div class="relative w-full h-0 pb-3/4">
          <figure class="absolute h-auto" style="top:45%;width: 41.67%;max-width: 320px;" data-aos="fade-right">
            <img :src="require('@/images/team-mosaic-02.jpg')" width="320" height="240" alt="Team mosaic 02" />
          </figure>
          <figure class="relative mx-auto h-auto" style="width: 78.13%;max-width: 600px;" data-aos="fade-down" data-aos-delay="150">
            <img :src="require('@/images/team-mosaic-01.jpg')" width="540" height="360" alt="Team mosaic 01" />
          </figure>
          <figure class="absolute h-auto" style="top: 8.5%;right: 0;width: 32.55%;max-width: 250px;" data-aos="fade-left" data-aos-delay="300">
            <img :src="require('@/images/team-mosaic-03.jpg')" width="320" height="240" alt="Team mosaic 03" />
          </figure>
          <figure class="absolute h-auto" style="bottom: 0;right: 20%;width: 25.52%;max-width: 196px;" data-aos="zoom-y-out" data-aos-delay="450">
            <img :src="require('@/images/team-mosaic-04.jpg')" width="180" height="180" alt="Team mosaic 04" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamImages',
}
</script>