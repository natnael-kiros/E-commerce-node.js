<script setup>
import Carousel from '@/components/Carousel.vue'
import ProductListings from '@/components/ProductListings.vue'
import About from '@/components/About.vue'
import ProductSlide from '@/components/ProductSlide.vue'
</script>

<template>
  <div class="bg-teal-100 min-h-screen">
    <div class="mx-auto px-0 xl:px-48">
      <Carousel />
      <ProductListings />
      <!-- <div class="bg-teal-200">
        <ProductSlide />
      </div> -->

      <About />
    </div>
  </div>
</template>
