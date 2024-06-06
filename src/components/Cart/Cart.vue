<template>
    <div v-if="cartProduct.length == 0">
      <CartEmpty />
    </div>
    <div v-else class="px-16 bg-white relative">
      <button  v-if="authStoreCart.status" class=" absolute  top-10 right-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="redirect">Оформить заказ</button>
      <div class="py-10 flex">
        <button @click="goBack">
          <div class="px-3 py-2 bg-white rounded-xl border">
            <svg width="12" height="17" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 11L1 6L6 1" stroke="grey" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </button>
        <h1 class="uppercase font-extrabold text-[32px] pl-5">Мои покупки</h1>
      </div>
      <div>
        <h1 class="font-bold text-[20px] mb-8">Общая сумма заказов: {{ totalPrice }} $</h1>
      </div>
      <div>
        <div class="flex justify-center flex-wrap bg-white pl-16 pr-16 rounded-b-lg">
          <div v-for="sneaker in cartProduct" :key="sneaker.id" class="max-w-52 my-6 ml-8 mr-8 border p-10 rounded-2xl shadow-lg relative">
            <div class="flex justify-center mb-5">
              <img :src="sneaker.imageUrl" :alt="sneaker.title">
            </div>
            <div class="items-center mb-5 font-semibold min-h-24">
              {{ sneaker.title }}
            </div>
            <div class="flex justify-center items-center">
              <div class="flex align-middle">
                <h1 class="text-gray-400 text-center pr-8">Цена:</h1>
                <p class="text-[14px] font-bold flex items-center">{{ sneaker.price }}$</p>
              </div>
            </div>
            <div @click="removeFromCart(sneaker)" class="flex justify-center mt-4 absolute top-0 right-4 bg-red-700 rounded-xl p-[2px] cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5L15 15M15 5L5 15" stroke="#fff" stroke-width="2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { useSneakers } from '@/stores/Sneakers';
  import Footer from '../Footer/Footer.vue';
  import CartEmpty from './CartNotFaund.vue';
import { authStore } from '@/stores/authStore';
  
  const router = useRouter();
  const sneakersStore = useSneakers();
  const totalPrice = sneakersStore.calculateTotalPurchasePrice();
  const cartProduct = sneakersStore.purchases;

  const authStoreCart = authStore();


  const redirect = ()=>{
    router.push('/pay')
  }
  
  const goBack = () => {
    router.go(-1);
  };
  
  const removeFromCart = (sneaker) => {
    const index = cartProduct.findIndex(item => item.id === sneaker.id);
    if (index !== -1) {
      sneakersStore.purchases.splice(index, 1);
      alert('Товар удален из корзины');
    }
  };
  </script>