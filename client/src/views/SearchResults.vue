<script setup>
import { useRoute } from 'vue-router'
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'

const route = useRoute()
const searchQuery = ref(route.query.q || '')
const selectedCategory = ref(route.query.category || '')

const products = ref([])
const loading = ref(true)

const fetchProducts = async () => {
  loading.value = true
  try {
    const response = await axios.get(`http://localhost:5000/api/products/search`, {
      params: { q: searchQuery.value, category: selectedCategory.value }
    })
    products.value = response.data
  } catch (error) {
    console.error('Error fetching products:', error)
  } finally {
    loading.value = false
  }
}

// Fetch products when the component is mounted or when the route changes
onMounted(() => {
  fetchProducts()
})

// Watch for changes in the route parameters
watch(
  () => [route.query.q, route.query.category],
  () => {
    searchQuery.value = route.query.q || ''
    selectedCategory.value = route.query.category || ''
    fetchProducts()
  }
)
</script>

<template>
  <div class="bg-teal-100">
    <div class="search-results xl:px-48">
      <h1
        class="bg-teal-200 text-teal-800 text-2xl font-bold mb-4 pt-5 px-4 py-2 shadow-lg rounded"
      >
        {{
          selectedCategory.value
            ? `Category: "${selectedCategory.value}"`
            : `Search Results for "${searchQuery.value}"`
        }}
      </h1>
      <div class="px-10 py-5">
        <div v-if="loading" class="loading">Loading...</div>
        <div v-else-if="products.length === 0" class="no-results">No products found.</div>

        <div v-else class="product-grid">
          <!-- Display list of products -->
          <div v-for="product in products" :key="product.id" class="product-card bg-teal-200 my-5">
            <div class="grid grid-cols-2">
              <div class="p-4">
                <img
                  class="w-full h-48 object-cover rounded-t-lg px-20"
                  :src="`http://localhost:5000${product.image}`"
                  alt=""
                />
              </div>
              <div>
                <h2 class="font-bold">{{ product.name }}</h2>
                <p>{{ product.description }}</p>
                <p><strong>Price:</strong> ${{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
