import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import PageLayout from '../layouts/PageLayout.vue';
import ClothingView from '../views/ClothingView.vue';

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
          component: ClothingView
        }
      ]
    },
  ]
})

export default router
