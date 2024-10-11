<script setup>
import { ref } from 'vue'
import img1 from '@/assets/img2.webp'
import img2 from '@/assets/img2.webp'
const items = ref([
  {
    image: img1,
    alt: 'Image 1'
  },
  {
    image: img2,
    alt: 'Image 2'
  }
])
const currentIndex = ref(0)

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % items.value.length
}
</script>

<template>
  <div class="relative w-full overflow-hidden">
    <div class="flex">
      <div class="flex-none w-full">
        <img
          :src="items[currentIndex].image"
          :alt="items[currentIndex].alt"
          class="w-full h-carousel"
        />

        <div
          class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-teal-100 to-transparent opacity-100"
        ></div>
      </div>
    </div>

    <button
      @click="prev"
      class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent rounded-full p-2"
    >
      <i class="pi pi-chevron-left text-white"></i>
      <!-- PrimeIcons left arrow -->
    </button>
    <button
      @click="next"
      class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent p-2"
    >
      <i class="pi pi-chevron-right text-white"></i>
      <!-- PrimeIcons right arrow -->
    </button>
  </div>
</template>

<style scoped>
.h-carousel {
  height: 350px;
  object-fit: cover;
}
</style>
