<script setup>
import { defineProps, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

// Capitalize only if the string exists
const capitalizedCategory = computed(() => {
  if (props.products.length > 0 && props.products[0].category) {
    return props.products[0].category.charAt(0).toUpperCase() + props.products[0].category.slice(1)
  } else {
    return 'Unknown Category' // Fallback in case products array is empty
  }
})
</script>

<template>
  <div class="border rounded-lg p-4 bg-teal-200 shadow-md m-2">
    <div class="text-center">
      <h1 class="font-bold text-lg">{{ capitalizedCategory }}</h1>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div v-for="(product, index) in products" :key="index">
        <div class="text-center text-gray-700">
          <RouterLink :to="`/product/${product._id}`">
            <img
              :src="`http://localhost:5000${product.image}`"
              alt=""
              class="w-full h-32 object-cover"
            />
          </RouterLink>
          <p>{{ product.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
