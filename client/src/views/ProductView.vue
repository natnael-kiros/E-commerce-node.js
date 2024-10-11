<script setup>
import camera from '@/assets/camera.jpg'
import { onMounted, reactive } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = route.params.id
const state = reactive({
  product: []
})

const url = `http://localhost:5000/api/products/${productId}`
console.log('Request URL:', url) // Log the request URL

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:5000/api/products/${productId}`)
    state.product = response.data
  } catch (error) {
    // Log detailed error information
  }
})
</script>

<template>
  <div class="mx-auto xl:px-48">
    <div class="grid grid-cols-2 gap-4 p-4">
      <div class="bg-gray-100 p-4 flex justify-center items-center">
        <img
          :src="`http://localhost:5000${state.product.image}`"
          alt=""
          class="w-full h-auto max-w-sm object-cover"
        />
      </div>
      <div class="p-4 flex flex-col justify-between">
        <h1 class="text-3xl font-bold mb-4">{{ state.product.name }}</h1>

        <p>
          {{ state.product.description }}
        </p>

        <p class="text-2xl text-green-600 font-semibold mb-4">{{ state.product.price }}</p>
        <button class="bg-blue-500 text-white py-2 px-4">But it now</button>
        <button class="bg-green-500 text-white py-2 px-4">Add to Cart</button>
        <button class="bg-gray-500 text-white py-2 px-4">Add to watchlist</button>
      </div>
    </div>

    <div>
      <h1 class="flex justify-center text-bold text-3xl bg-blue-200">Related Products</h1>
      <div class="related-products bg-gray-500"></div>
    </div>
  </div>
</template>

<style scoped>
.related-products {
  height: 500px;
}
</style>
