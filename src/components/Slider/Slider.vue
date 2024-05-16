<template>
    <div class="bg-white">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
                    <img class="slide-image object-contain w-full h-full" :src="slide.image" :alt="'Slide ' + (index + 1)" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/bundle';

export default {
    data() {
        return {
            slides: [
                { image: 'https://sport-marafon.ru/upload/iblock/ad2/182345-00.jpg' },
                { image: "https://хасл.рф/images/NewsGPT/Pro-advert_Depicting_distinct_design_elements_of_Jordan_sneaker_53b7a121-e776-46df-99d8-1b1a7f716093.png" },
                { image: "https://outmaxshop.ru/images/Pro-advert_Display_of_Air_Jordan_4_sneakers_featuring_sporty_el_0e613bd5-5066-41fe-ba90-2b3db8418073.png" },
            ],
        };
    },
    mounted() {
        new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 3000,
            },
        });
    },
};
</script>
  
<style scoped>
.swiper-container {
    margin: 0 auto;
    max-width: 1152px;
    overflow: hidden;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
    margin-bottom: 50px;
    background-size: contain;
    max-width: 1250px;
    height: 500px; 
}

.swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
</style>