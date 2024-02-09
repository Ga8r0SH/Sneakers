import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage/Homepage.vue';
import Favoritepage from '../views/Favoritepage/Favoritepage'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: Homepage
  },
  {
    path: '/favoritePage',
    name: 'favoritepage',
    component: Favoritepage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
