<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, computed } from 'vue';
import { fetchProductById } from '@/services/products';
import { useCartStore } from '@/stores/cart';


const cartStore = useCartStore();

const route = useRoute();
const router = useRouter();

const product = ref(null);
const isLoading = ref(false);

const getProduct = async () => {
  isLoading.value = true;

  try {
    const data = await fetchProductById(route.params.id);

    if (!data) {
      router.replace({ name: 'NotFound' });
      return;
    }

    product.value = data;
    console.log(data);

  } catch (error) {
    console.error('Erreur lors du chargement du produit :', error);
    router.replace({ name: 'NotFound' });
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getProduct();
});


const inCart = computed(() => {
  return cartStore.allCarts.find(c => c.id === product.value.id);
});




const addToCart = () => {
  const obj = {
    id: product.value.id,
    title: product.value.title,
    price: product.value.price,
    image: product.value.image,
    count: 1
  }
  cartStore.addInCart(obj);

  localStorage.setItem('cart', JSON.stringify(cartStore.allCarts));
  console.log(cartStore.allCarts);

}

const handleRemoveFromCart = () => {
  cartStore.removeFromCart(product.value.id);
  localStorage.setItem('cart', JSON.stringify(cartStore.allCarts));
}

</script>

<template>
  <div class="my-15">
    <!-- Loading Skeleton -->
    <div v-if="isLoading" class="flex p-5 gap-15">
      <div class="flex-1">
        <div class="w-full h-[25rem] object-contain animate-pulse bg-gray-300"></div>
      </div>
      <div class="flex-1">
        <div class="animate-pulse bg-gray-300 w-[20%] h-[2rem] mb-2 rounded-2xl"></div>
        <div class="animate-pulse bg-gray-300 w-full h-[2rem] mb-2"></div>
        <div class="animate-pulse bg-gray-300 w-full h-[12rem] mb-2"></div>
        <div class="animate-pulse bg-gray-300 w-[20%] h-[2rem] mb-2"></div>
      </div>
    </div>

    <!-- Product Display -->
    <div v-else-if="product" class="flex p-5 gap-15">
      <div class="flex-1">
        <img class="w-full h-[25rem] object-contain" :src="product.image" :alt="product.title">
      </div>
      <div class="flex-1">
        <span class="p-2 bg-blue-800 text-white rounded-2xl">{{ product.category }}</span>
        <h2 class="mt-5 text-2xl font-bold">{{ product.title }}</h2>
        <p class="text-gray-800 text-xl">{{ product.description }}</p>
        <div class="mt-3 text-3xl font-bold">{{ product.price }} $</div>
        <div class="mt-3 flex gap-3">
          <button
          @click="addToCart"
          :disabled="inCart"
          class="px-2 py-1 text-xl rounded-lg text-white bg-blue-800 cursor-pointer" to="/">
            {{ inCart ? 'In cart' : 'Add to cart' }}
          </button>
          <button
          @click="handleRemoveFromCart"
          v-if="inCart"
          class="px-2 py-1 text-xl rounded-lg text-white bg-red-800 cursor-pointer" to="/">
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
