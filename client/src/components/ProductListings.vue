<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])
const selectedClothing = ref([])
const selectedElectronics = ref([])
const selectedShoes = ref([])
const selectedSports = ref([])

const selectedElectronicsIds = [
  '67082b5b2dcc25e1ce1eaa74',
  '67082b5b2dcc25e1ce1eaa73',
  '67082b5b2dcc25e1ce1eaa71',
  '67082b5b2dcc25e1ce1eaa70'
]
const selectedShoesIds = [
  '670829762dcc25e1ce1eaa6b',
  '67082b5b2dcc25e1ce1eaa72',
  '67082b5b2dcc25e1ce1eaa76',
  '67082b5b2dcc25e1ce1eaa77'
]
const selectedClothingIds = [
  '670829762dcc25e1ce1eaa6a',
  '67082b5b2dcc25e1ce1eaa75',
  '67082b5b2dcc25e1ce1eaa78',
  '670829762dcc25e1ce1eaa6c'
]
const selectedSportsIds = [
  '670829762dcc25e1ce1eaa66',
  '670829762dcc25e1ce1eaa67',
  '670829762dcc25e1ce1eaa68',
  '670829762dcc25e1ce1eaa69'
]

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/products')
    products.value = response.data

    selectedSports.value = products.value.filter((product) =>
      selectedSportsIds.includes(product._id)
    )
    selectedShoes.value = products.value.filter((product) => selectedShoesIds.includes(product._id))
    selectedClothing.value = products.value.filter((product) =>
      selectedClothingIds.includes(product._id)
    )
    selectedElectronics.value = products.value.filter((product) =>
      selectedElectronicsIds.includes(product._id)
    )
  } catch (error) {
    console.error('Error fetching products')
  }
})
</script>
<template>
  <div class="p-4">
    <div class="grid xl:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2">
      <ProductCard :products="selectedElectronics" />
      <ProductCard :products="selectedShoes" />
      <ProductCard :products="selectedSports" />
      <ProductCard :products="selectedClothing" />
      <ProductCard :products="selectedSports" />
      <ProductCard :products="selectedElectronics" />
      <ProductCard :products="selectedClothing" />
      <ProductCard :products="selectedShoes" />
    </div>
  </div>
</template>
