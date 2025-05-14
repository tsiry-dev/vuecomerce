<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { useCartStore } from '@/stores/cart';

const route = useRoute();

const cartStore = useCartStore();



</script>

<template>


<nav v-if="route.name !== 'NotFound'" class="bg-white dark:bg-orange-400 fixed w-full z-20 top-0 start-0 border-b border-gray-300">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VueComerce</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <RouterLink to="/login" class="bg-blue-800 mx-4 text-white px-2 py-1 rounded-2xl">Login</RouterLink>
      <RouterLink to="/register" class="bg-blue-800 text-white px-2 py-1 rounded-2xl">Register</RouterLink>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
         <RouterLink to="/"class="text-blue-800 font-bold text-xl">Home</RouterLink>
         <RouterLink to="/products"class="text-blue-800 font-bold text-xl">Products</RouterLink>
         <RouterLink to="/about"class="text-blue-800 font-bold text-xl">About</RouterLink>
         <RouterLink to="/cart"class="text-blue-800 font-bold text-xl">Cart ({{ cartStore.allCarts.length }})</RouterLink>
    </ul>
  </div>
  </div>
</nav>

</template>

<style scoped>
</style>
