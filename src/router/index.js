import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage/Homepage.vue';
import Favoritepage from '../views/Favoritepage/Favoritepage'
import CartPage from '../views/Cartpage/Cartpage.vue'

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
  },
  {
    path:'/cartPage',
    name:'cartPage',
    component:CartPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
