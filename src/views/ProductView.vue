<script setup>
import ProductItem from '@/components/ProductItem.vue';
import { ref , computed} from 'vue';

import { useProductStore } from '@/stores/products';

const price = ref(10);

const productStore = useProductStore();

const categories = computed(() => {
    const allCategories = productStore.products?.map(p => p.category);
    const uniqueCategories = [...new Set(allCategories)];
    return uniqueCategories
});

const productsFiltered = computed(() => {
    return productStore.products?.filter(p => p.category === category) ?? productStore.products;
});

const handleFilterByCategory = (category) => {
    console.log(category);
}

</script>

<template>
  <h1 class="text-center text-3xl mb-5">Products</h1>


  <div class="flex gap-5">
       <aside class="w-[30%]">
          <h2 class="text-3xl">By Categories</h2>

          <div class="flex flex-wrap justify-center py-5">
              <span v-if="productStore.isLoading" class="bg-blue-100 text-blue-800 mb-3 text-lg font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Loading...</span>
            <span
            v-for="category in categories"
            @click="handleFilterByCategory(category)"
            class="bg-blue-100 cursor-pointer text-blue-800 mb-3 text-lg font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
             {{ category }}
          </span>

          </div>


          <div>
           <h2 class="text-3xl mb-3">By price</h2>
             <input min="10" max="500" v-model="price" id="large-range" type="range" value="50" class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700">

             <div class="text-center text-3xl">{{ price }} $</div>
         </div>
       </aside>

       <div v-if="productStore.error" class="flex-3 mb-15">
         <div class="flex flex-col items-center justify-center">
           <h1 class="text-3xl text-red-500">Error!!!</h1>
           <p class="text-xl text-red-500">{{ productStore.error }}</p>
           <button class="mt-5 bg-blue-500 text-white px-4 py-2 rounded-lg" @click="getProducts">Try again</button>
          </div>
       </div>

       <div v-else class="flex-3">
          <div v-if="productStore.isLoading" class="flex-3 mb-15">
            <div  class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5  w-full">
                  <div class="" v-for="i in 12">
                    <div class="p-4 animate-pulse bg-gray-300 w-full h-[15rem]"></div>
                    <div class="h-[3rem] animate-pulse bg-gray-300 w-full mt-3"></div>
                    <div class="h-[2rem] animate-pulse bg-gray-300 w-[20%] mt-3"></div>
                  </div>
            </div>
          </div>

          <div v-else class="flex-3 mb-15">
              <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                  <ProductItem v-for="product in productStore.products" :key="product.id" :product="product" />
              </div>
          </div>
       </div>

  </div>
</template>

<style scoped>
</style>




