<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const isDropdownOpen = ref(false)
const searchQuery = ref('')
const router = useRouter()
const selectedCategory = ref('')

const handleSearch = () => {
  if (searchQuery.value) {
    // Send both search query and selected category
    router.replace({
      name: 'SearchResults',
      query: { q: searchQuery.value, category: selectedCategory.value }
    })
  }
}

const handleCategory = (category) => {
  selectedCategory.value = category

  // Send both search query and selected category
  router.replace({ name: 'SearchResults', query: { q: searchQuery.value, category } })
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const handleClickOutside = (event) => {
  const dropdown = document.querySelector('.dropdown')
  if (dropdown && !dropdown.contains(event.target)) {
    closeDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav class="bg-teal-600 p-4 flex justify-between items-center">
    <!-- Logo -->
    <div class="px-4">
      <RouterLink to="/" class="text-white text-lg font-bold">Logo</RouterLink>
    </div>

    <!-- Dropdown for Categories -->
    <div class="dropdown relative inline-block mx-4" @click="toggleDropdown">
      <button class="bg-teal-800 text-white px-4 py-2 rounded">Categories</button>
      <div
        v-if="isDropdownOpen"
        class="absolute left-0 mt-2 w-48 bg-blue-100 rounded shadow-lg z-10"
      >
        <a
          @click.prevent="handleCategory('Electronics')"
          href="#"
          class="block px-4 py-1 hover:bg-blue-200"
          >Electronics</a
        >
        <a
          @click.prevent="handleCategory('Clothings')"
          href="#"
          class="block px-4 py-1 hover:bg-blue-200"
          >Clothings</a
        >
        <a
          @click.prevent="handleCategory('Sports')"
          href="#"
          class="block px-4 py-1 hover:bg-blue-200"
          >Sports</a
        >
        <a
          @click.prevent="handleCategory('Shoes')"
          href="#"
          class="block px-4 py-1 hover:bg-blue-200"
          >Shoes</a
        >
      </div>
    </div>

    <!-- Search Box -->
    <div class="flex-grow mx-4 flex items-center">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search..."
        class="w-full px-3 py-2 rounded-l border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
      />
      <div class="ml-2">
        <button @click="handleSearch" class="bg-teal-800 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
    </div>

    <!-- Cart and Login -->
    <div class="flex space-x-4 px-4">
      <a href="" class="text-white"><i class="pi pi-heart"></i></a>
      <a href="" class="text-white"><i class="pi pi-shopping-cart"></i></a>
      <a href="" class="text-white">Login</a>
    </div>
  </nav>
</template>
