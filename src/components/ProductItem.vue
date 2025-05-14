<script setup>

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <div v-if="product">
    <div class="transition duration-500 rounded-lg shadow-md bg-gray-100 border-1 border-gray-300 hover:bg-gray-200">
      <img class="h-[20rem] w-full object-cover" :src="product.image" alt="">

      <div class="px-2 p-2">
          <h3 class="mb-5 text-xl font-bold text-gray-900">{{ (product.title).slice(0,20) + '...' }}</h3>
        <RouterLink
        :to="{ name: 'product.show', params: { id: product.id }}"
        class="px-2 py-1 text-xl rounded-lg text-white bg-blue-800">View</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
