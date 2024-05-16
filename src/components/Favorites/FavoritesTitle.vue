<template>
    <div v-if="favoriteProduct.length == 0">
        <Notfound />
    </div>
    <div v-else>
        <div class="flex justify-start px-16 bg-white items-center py-10">
            <button @click="goBack">
                <div class="px-3 py-2 bg-white rounded-xl border ">
                    <svg width="12" height="17" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="grey" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
            </button>
            <h1 class="font-bold text-[32px] ml-5">Мои закладки</h1>
        </div>
        <div class="">
            <div class="flex justify-center flex-wrap bg-white pl-16 pr-16 rounded-b-lg ">
                <div v-for="sneaker in favoriteProduct "
                    class="max-w-52 my-6 ml-8 mr-8 border p-10 rounded-2xl shadow-lg relative" :key="sneaker.id">
                    <span class="flex justify-center mt-4 absolute top-0 right-4 bg-red-700 rounded-xl p-[2px] cursor-pointer"
                        @click="removeFromFavorites(sneaker)">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5L15 15M15 5L5 15" stroke="#FFF" stroke-width="2" />
                        </svg>
                        
                    </span>
                    <div class="flex justify-center mb-5 ">
                        <img :src="image" alt="">
                    </div>
                    <div class="items-center mb-5 font-semibold min-h-24">
                        {{ sneaker.title }}
                    </div>
                    <div class="flex justify-between items-center ">
                        <div>
                            <h1 class="text-gray-400">Цена:</h1>
                            <p class="text-[14px] font-bold">{{ sneaker.price }}$</p>
                        </div>
                        <div class="pl-8">
                            <button @click="addProduct(sneaker)" class="border px-2 py-2 rounded-lg hover:bg-green-400">
                                <svg width="12" height="12" viewBox="0 0 12 12" id='svg1' fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668 0.332909C0.885214 5.13122 0.332909 5.68054 0.332909 6.46332C0.332909 7.2461 0.885214 7.79541 1.668 7.79541H5.13114V11.2585C5.13114 12.0423 5.68045 12.5916 6.46324 12.5916C7.24603 12.5916 7.79533 12.0423 7.79533 11.2585V7.79541H11.2585C12.0413 7.79541 12.5906 7.2461 12.5906 6.46332C12.5906 5.68054 12.0413 5.13122 11.2585 5.13122H10.6653Z"
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
                                        <filter id="filter0_d_60_204" x="0.666534" y="0.329834" width="10.6698"
                                            height="10.5132" filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="2" />
                                            <feColorMatrix type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                result="effect1_dropShadow_60_204" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_204"
                                                result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script setup>
import Notfound from './Notfaund.vue'
import image from '../../assets/sneakers.png'
import { useRouter } from 'vue-router';
import { useSneakers } from '@/stores/Sneakers';
import Footer from '../Footer/Footer.vue';

const router = useRouter();

const goBack = () => {
    router.go(-1);
};

const sneakersStore = useSneakers();

const favoriteProduct = sneakersStore.favorite;

const addProduct = (sneaker) => {
    const isAlreadyInCart = sneakersStore.purchases.some(item => item.id === sneaker.id); // Проверяем, есть ли товар уже в корзине по его уникальному идентификатору

    if (isAlreadyInCart) {
        alert('Этот товар уже есть в корзине');
    } else {
        sneakersStore.purchases.push(sneaker);
        alert('Товар добавлен в корзину');
    }
}

const removeFromFavorites = (sneaker) => {
    const index = favoriteProduct.findIndex(item => item.id === sneaker.id);
    if (index !== -1) {
        sneakersStore.favorite.splice(index, 1);
        alert('Товар удален из избранного');
    }
};
</script>