import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import PageLayout from '../layouts/PageLayout.vue';
import ClothingView from '../views/ClothingView.vue';
import ElectronicsView from '../views/ElectronicsView.vue';
import AccessoriesView from '../views/AccessoriesView.vue';
import ProductDetailView from '../views/ProductDetailView.vue';
import CartView from '../views/CartView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'page-layout',
      component: PageLayout.vue,
      children: [
        {
          path: '/',
          name: 'Home',
          component: HomeView
        },
        {
          path: '/clothing',
          name: 'clothing',
          component: ClothingView,
        },
        {
          path: '/electronics',
          name: 'electronics',
          component: ElectronicsView
        },
        {
          path: '/accessories',
          name: 'accessories',
          component: AccessoriesView
        },
        {
          path: '/clothing/:id',
          name: 'clothing-details',
          component: ProductDetailView,
          props: true
        },
        {
          path: '/electronics/:id',
          name: 'electronics-details',
          component: ProductDetailView,
          props: true
        },
        {
          path: '/accessories/:id',
          name: 'accessories-details',
          component: ProductDetailView,
          props: true
        },
        {
          path: '/cart',
          name: 'cart',
          component: CartView,
        }
      ]
    },
  ],
})

export default router
