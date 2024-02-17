
<template>
    <div class="flex justify-center bg-white">
        <div class="px-16 align-middle text-center">
            <div class="my-8 flex justify-center">
                <img :src="SmileSad" alt="">
            </div>
            <div>
                <H1 class="uppercase font-extrabold text-[32px] mb-6">У вас нет заказов </H1>
                <p class="text-gray-500">Вы нищеброд?</p>
                <p class="text-gray-500">Оформите хотя бы один заказ</p>
            </div>
            <div class="flex justify-center align-middle my-12">
                <button @click='goBack' class="bg-green-400 px-9 py-3 flex rounded-2xl text-white items-center">
                    <svg class="mr-2 align-middle" width="12" height="12" viewBox="0 0 16 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    Вернуться назад
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import SmileSad from '../../assets/SmileSad.png';
import { useRouter } from 'vue-router';
const router = useRouter();

const goBack = () => {
    router.go(-1)
}

</script>