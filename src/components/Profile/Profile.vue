<template>
    <div class="container">
        <div>
            <Header />
        </div>
        <div class="flex justify-between bg-white pt-7 pl-16 pr-16 pb-7">
            <div>
                <div class="">
                    <div class="flex justify-center">
                        <img class="rounded-full w-[256px]"src="https://masterpiecer-images.s3.yandex.net/c30a268c79ab11ee81ebda477c0f1ee2:upscaled" alt="">
                    </div>
                    <div>
                        <p class=" text-2xl text-center font-medium mt-8">{{ auth.user.name }}</p>
                        <p class=" mt-4 mb-4 text-center">{{ auth.user.title }}</p>
                    </div>
                    <div class="flex justify-center">
                        <svg class="ml-5 cursor-pointer" width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"></path> </g></svg>
                        <svg class="ml-5 cursor-pointer" fill="#000000" height="32px" width="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path> <path d="M146.8,313.7c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H51.2v38.3h26.5v133h49.6v-133h39.3l2.9-38.3h-42.2v-29.9C127.3,317.4,136.5,313.7,146.8,313.7z"></path> </g> </g></svg>
                        <svg class="ml-5 cursor-pointer" fill="#000000" width="32px" height="32px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fill-rule="evenodd"></path> </g></svg>
                        <svg class="ml-5 cursor-pointer" width="32px" height="32px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>messanger</title> <desc>Created with sketchtool.</desc> <g id="brand" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="messanger" fill="#000000"> <path d="M12.9419305,14.4132711 L10.3816186,11.7534625 L5.45094503,14.4802487 L10.8567589,8.74367787 L13.4170708,11.4034864 L18.3477192,8.67670029 L12.9419305,14.4132711 Z M11.8993321,2 C6.43210743,2 2,6.14444891 2,11.2568612 C2,14.1651845 3.43438829,16.7602069 5.67764614,18.457241 L5.67764614,22 L9.05594606,20.1261138 C9.95655399,20.3782306 10.911016,20.5137223 11.8993321,20.5137223 C17.366582,20.5137223 21.7986642,16.3692734 21.7986642,11.2568612 C21.7986642,6.14444891 17.366582,2 11.8993321,2 L11.8993321,2 Z" id="Shape"> </path> </g> </g> </g></svg>                    </div>
                </div>
            </div>
            <div class="w-[750px] border p-4 ml-3">
                <div class="mx-3">
                    
                    <h1 class=" font-bold text-2xl">Данные пользователя</h1>
                    <div class=" text-lg pt-5 border-b-2">Страна:<span class="ml-5 font-semibold">{{ auth.user.country }}</span></div>
                    <div class=" text-lg pt-5 border-b-2">Пол:<span class="ml-5 font-semibold">{{ auth.user.gender }}</span></div>
                    <div class=" text-lg pt-5 border-b-2">Полных лет:<span class="ml-5 font-semibold">{{ auth.user.age }}</span></div>
                    <div class=" text-lg pt-5 border-b-2">Email:<span class="ml-5 font-semibold">{{ auth.user.email }}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import Header from '../Header/Header.vue';
import { authStore } from '@/stores/authStore';

const auth = authStore();




</script>

<style></style>