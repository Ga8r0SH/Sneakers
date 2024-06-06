import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage/Homepage.vue';
import Favoritepage from '../views/Favoritepage/Favoritepage'
import CartPage from '../views/Cartpage/Cartpage.vue'
import Profile from '@/components/Profile/Profile.vue';
import aboutUs from '@/components/aboutUs/aboutUs.vue';
import auth from '@/components/formAuth/auth.vue';
import pagePay from '@/components/Order/pagePay.vue'


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
  },
  {
    path:'/profile',
    name:'profilePage',
    component:Profile
  },
  {
    path:'/aboutUs',
    name:'aboutUs',
    component:aboutUs
  },
  {
    path:'/auth',
    name:'auth',
    component:auth
  },
  {
    path:'/Pay',
    name: 'Pay',
    component:pagePay
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
