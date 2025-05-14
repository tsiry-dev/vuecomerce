<script setup>
import { useRoute } from 'vue-router';


const route = useRoute();

</script>

<template>
<footer v-if="route.name !== 'NotFound'"   class="bg-black text-white p-15 flex justify-around">
  <h3 class="text-white text-3xl font-bold">VueComerce</h3>
  <div class="flex space-x-10 text-xl">
       <a href="">Home</a>
       <a href="">Products</a>
       <a href="">Login</a>
       <a href="">Register</a>
  </div>
</footer>
</template>

<style scoped>
</style>
