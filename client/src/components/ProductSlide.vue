<script setup>
import { ref, computed } from 'vue'
import camera from '@/assets/camera.jpg'
import tablet from '@/assets/tablet.jpg'
import samsung from '@/assets/samsung.jpeg'
import headphone from '@/assets/headphone.jpg'
import img2 from '@/assets/img2.webp'
import img1 from '@/assets/img1.jpeg'

const items = ref([
  { image: camera },
  { image: tablet },
  { image: samsung },
  { image: img1 },
  { image: img2 },
  { image: samsung },
  { image: img1 },
  { image: tablet },
  { image: samsung },
  { image: tablet },
  { image: img2 },
  { image: camera },
  { image: img1 },
  { image: samsung },
  { image: camera }
  // Add more items as needed
])

const currentIndex = ref(0)
const itemsToShow = 8 // Number of items to display at once

const displayedItems = computed(() => {
  return items.value.slice(currentIndex.value, currentIndex.value + itemsToShow)
})

const next = () => {
  if (currentIndex.value + itemsToShow < items.value.length) {
    currentIndex.value += itemsToShow
  }
}

const prev = () => {
  if (currentIndex.value - itemsToShow >= 0) {
    currentIndex.value -= itemsToShow
  }
}
</script>
<template>
  <div class="relative">
    <div class="flex overflow-hidden">
      <div v-for="(item, index) in displayedItems" :key="index" class="flex-shrink-0 w-48 h-64 p-2">
        <a>
          <img :src="item.image" alt="Item" class="w-full h-full object-cover" />
        </a>
      </div>
    </div>
    <button
      @click="prev"
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2"
    >
      Prev
    </button>
    <button
      @click="next"
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2"
    >
      Next
    </button>
  </div>
</template>

<style scoped></style>
