<script setup>
import ProductItem from '@/components/ProductItem.vue';
import { useProductStore } from '@/stores/products';
import { computed } from 'vue';

const productStore = useProductStore();

const productsHome = computed(() => {
    return productStore.products?.slice(0,3);
});

</script>

<template>
   <header class="background-image: url('https://i.pinimg.com/736x/85/d5/2c/85d52c7ddfbf966d7361084256daf436.jpg')">
      <h1 class="text-6xl text-gray-600">VueComerce <br> <span class="text-8xl text-blue-800">STORE</span></h1>
      <p class="text-gray-600 text-xl mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique architecto cum facilis quam delectus ratione dolores sit quibusdam, sunt saepe fugit recusandae corrupti quaerat cupiditate. Necessitatibus laborum rem at ex quos quae maxime cum veniam fuga? Reprehenderit corrupti ducimus dolorem, earum ipsam asperiores dignissimos similique?
      </p>
   </header>

   <section class="mt-10 mb-15">
       <h2 class="text-center text-3xl text-amber-800">Product view</h2>

      <div v-if="productStore.isLoading" class="flex-3 mb-15">
        <div  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
              <div class="" v-for="i in 3">
                <div class="p-4 animate-pulse bg-gray-300 w-full h-[15rem]"></div>
                <div class="h-[3rem] animate-pulse bg-gray-300 w-full mt-3"></div>
                <div class="h-[2rem] animate-pulse bg-gray-300 w-[20%] mt-3"></div>
              </div>
        </div>
      </div>


       <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
           <ProductItem v-for="product in productsHome" :product="product" :key="product.id" />
       </div>
   </section>
</template>

<style scoped>
</style>
