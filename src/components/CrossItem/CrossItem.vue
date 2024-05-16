<template>
  <div class="container">
    <div v-if="sneakersStore.isLoading" class="bg-white p-8">
      <Skeleton />
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-white p-8">
      <div v-for="sneaker in sneakersStore.sneakers" :key="sneaker.id" class="sneaker-card relative">
        <div class="sneaker-image-wrapper relative">
          <img :src="image" :alt="sneaker.title" class="sneaker-image">
          <span @click="addFavoriteProduct(sneaker)" class="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md transition duration-300 transform hover:scale-110">
            <svg class="heart" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path :class="{ 'hidden': sneakersStore.favorite.includes(sneaker), 'block': !sneakersStore.favorite.includes(sneaker) }" id="svg1" d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path :class="{ 'hidden': !sneakersStore.favorite.includes(sneaker), 'block': sneakersStore.favorite.includes(sneaker) }" id="svg2" d="M9.6567 0.620692C9.83936 0.436333 10.0876 0.331772 10.3471 0.329861C10.6066 0.327949 10.8563 0.428842 11.0416 0.61049C11.227 0.792138 11.3329 1.03977 11.3362 1.29927C11.3395 1.55877 11.24 1.80903 11.0594 1.99536L5.83271 8.52936C5.74292 8.62603 5.63456 8.70362 5.51412 8.75749C5.39368 8.81136 5.26362 8.84041 5.1317 8.8429C4.99979 8.84539 4.86872 8.82127 4.74633 8.77198C4.62394 8.72269 4.51274 8.64924 4.41937 8.55602L0.954039 5.09202C0.76989 4.90779 0.666472 4.65794 0.666534 4.39746C0.666597 4.13697 0.770135 3.88717 0.954372 3.70302C1.13861 3.51888 1.38845 3.41546 1.64894 3.41552C1.90943 3.41558 2.15922 3.51912 2.34337 3.70336L5.08404 6.44469L9.6307 0.651358C9.63897 0.640817 9.64787 0.630798 9.65737 0.621358L9.6567 0.620692Z" fill="white" />
            </svg>
          </span>
        </div>
        <div class="sneaker-info mt-4">
          <h2 class="text-lg font-semibold">{{ sneaker.title }}</h2>
          <div class="flex justify-between items-center mt-2">
            <div class="text-gray-400">Цена:</div>
            <div class="text-lg font-bold">{{ sneaker.price }} $</div>
          </div>
          <button @click="addProduct(sneaker)" class="add-to-cart-button mt-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-md transition duration-300 transform hover:scale-105">
            Добавить в корзину
          </button>
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

const addFavoriteProduct = (sneaker) => {
  const isAlreadyInFavorites = sneakersStore.favorite.some(item => item.id === sneaker.id);

  if (isAlreadyInFavorites) {
    alert('Этот товар уже есть в избранном');
  } else {
    sneakersStore.favorite.push(sneaker);
    alert('Товар добавлен в избранное');
  }
}

const addProduct = (sneaker) => {
  const isAlreadyInCart = sneakersStore.purchases.some(item => item.id === sneaker.id);

  if (isAlreadyInCart) {
    alert('Этот товар уже есть в корзине');
  } else {
    sneakersStore.purchases.push(sneaker);
    alert('Товар добавлен в корзину');
  }
}

</script>

<style scoped>
/* Стили для изображения кроссовок */
.sneaker-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.sneaker-image {
  width: 100%;
  transition: transform 0.3s ease;
}

.sneaker-image:hover {
  transform: scale(1.05);
}

/* Стили для информации о кроссовках */
.sneaker-info {
  padding: 1rem;
}

/* Стили для кнопки "Добавить в корзину" */
.add-to-cart-button {
  cursor: pointer;
}

.add-to-cart-button:hover {
  background-color: #34d399;
}

/* Стили для сердечка */
.heart {
  cursor: pointer;
}

.heart:hover path {
  fill: red;
}

</style>