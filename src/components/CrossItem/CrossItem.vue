<template>
  <div>
    <div v-if="sneakersStore.isLoading" class="bg-white">
      <sceleton />
    </div>
    <div v-else class="flex justify-between flex-wrap bg-white pl-16 pr-16 rounded-b-lg">
      <div v-for="sneaker in sneakersStore.sneakers"
        class="max-w-52 my-6 ml-8 mr-8 border p-10 rounded-2xl shadow-lg relative" :key="sneaker.id">
        <div class="flex justify-center mb-5 ">
          <img :src="image" alt="">
          <span @click="addfavoriteProducts(sneaker)" class="absolute top-[15px] left-[20px] p-1 rounded hover:bg-red-100">
            <svg class="heart" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z"
                stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </div>
        <div class="items-center mb-5 font-semibold min-h-24">
          {{ sneaker.title }}
        </div>
        <div class="flex justify-between items-center ">
          <div>
            <h1 class="text-gray-400">Цена:</h1>
            <p class="text-[14px] font-bold">{{ sneaker.price }} $</p>
          </div>
          <div class="pl-8">
            <button @click="addProduct(sneaker)" class="border px-2 py-2 rounded-lg hover:bg-green-400">
              <svg width="12" height="12" viewBox="0 0 12 12" id='svg1' fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                  fill="#a8a8a8" />
              </svg>
              <svg class="hidden" width="12" height="12" viewBox="0 0 12 12" id="svg2" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_60_204)">
                  <path
                    d="M9.6567 0.620692C9.83936 0.436333 10.0876 0.331772 10.3471 0.329861C10.6066 0.327949 10.8563 0.428842 11.0416 0.61049C11.227 0.792138 11.3329 1.03977 11.3362 1.29927C11.3395 1.55877 11.24 1.80903 11.0594 1.99536L5.83271 8.52936C5.74292 8.62603 5.63456 8.70362 5.51412 8.75749C5.39368 8.81136 5.26362 8.84041 5.1317 8.8429C4.99979 8.84539 4.86872 8.82127 4.74633 8.77198C4.62394 8.72269 4.51274 8.64924 4.41937 8.55602L0.954039 5.09202C0.76989 4.90779 0.666472 4.65794 0.666534 4.39746C0.666597 4.13697 0.770135 3.88717 0.954372 3.70302C1.13861 3.51888 1.38845 3.41546 1.64894 3.41552C1.90943 3.41558 2.15922 3.51912 2.34337 3.70336L5.08404 6.44469L9.6307 0.651358C9.63897 0.640817 9.64787 0.630798 9.65737 0.621358L9.6567 0.620692Z"
                    fill="white" />
                </g>
                <defs>
                  <filter id="filter0_d_60_204" x="0.666534" y="0.329834" width="10.6698" height="10.5132"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha" />
                    <feOffset dy="2" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_204" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_204" result="shape" />
                  </filter>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import image from '../../assets/sneakers.png'
import sceleton from '../Sceleton/Sceleton.vue';
import { useSneakers } from '../../stores/Sneakers.js';
import { onMounted } from 'vue';

const sneakersStore = useSneakers();

onMounted(() => {
  sneakersStore.fetchSneakers();
})

const addfavoriteProducts = (sneaker) => {
  const isAlreadyInFavorites = sneakersStore.favorite.some(item => item.id === sneaker.id); // Проверяем, есть ли товар уже в избранном по его уникальному идентификатору

  if (isAlreadyInFavorites) {
    alert('Этот товар уже есть в избранном');
  } else {
    sneakersStore.favorite.push(sneaker);
    alert('Товар добавлен в избранное');
  }
}

const addProduct = (sneaker) => {
  const isAlreadyInCart = sneakersStore.purchases.some(item => item.id === sneaker.id); // Проверяем, есть ли товар уже в корзине по его уникальному идентификатору

  if (isAlreadyInCart) {
    alert('Этот товар уже есть в корзине');
  } else {
    sneakersStore.purchases.push(sneaker);
    alert('Товар добавлен в корзину');
  }
}

</script>

<style>
button:hover #svg1 {
  display: none;
}

button:hover #svg2 {
  background-color: rgb(60, 230, 60);
  display: block;
}

.heart:hover path {
  fill: red;
}
</style>