<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = '404 - Page not found'

  // Optionnel : envoyer une erreur à un service de logs
  // console.error('404 Not Found: ' + window.location.pathname)
})
</script>

<template>
  <h1 class="text-center text-3xl">Not found</h1>
  <div class="text-center my-4">
    <RouterLink to="/" class="text-center text-xl bg-blue-800 text-white p-2">Back to home</RouterLink>
  </div>
</template>

<style scoped>
</style>
