<script setup>
import { RouterLink , RouterView} from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import { onMounted , ref} from 'vue';
import { fetchProducts } from '@/services/products';
import { useProductStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';


const productStore = useProductStore();
const cartStore = useCartStore();



const getProducts = async () => {
    productStore.setLoading(true);
    try {
      const products = await fetchProducts();
      productStore.addProduct(products);
      console.log(products);
    }catch(error){
      console.log(error);
      productStore.error = 'Error fetching products';
    }finally{
      productStore.setLoading(false);
    }
}

const cartInit = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartStore.addCarts(cart);
}

onMounted(() => {
  getProducts();
  cartInit();
});


</script>

<template>
    <NavBar />
   <main class="pt-25 w-[95%] xl:w-[80rem] mx-auto">
     <RouterView />
   </main>


   <Footer />
</template>

<style scoped>
</style>
