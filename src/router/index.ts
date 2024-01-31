import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SamplePageVue from '@/views/SamplePage.vue'
import ProfilePageVue from '@/views/ProfilePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sample',
      name: 'sample',
      component: SamplePageVue
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePageVue
    }
  ]
})

export default router
