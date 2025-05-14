import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFound from '@/views/NotFound.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/products',
      name: 'products',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductView.vue'),
    },
        {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
        {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
        {
      path: '/products/:id',
      name: 'product.show',
      component: () => import('@/views/ProductShowView.vue'),
    },
      { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
      { path: '/cart', name: 'cart', component: CartView },

  ],
})

export default router
