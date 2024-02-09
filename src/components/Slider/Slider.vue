<template>
    <div class="bg-white">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
                    <img class="slide-image" :src="slide.image" :alt="'Slide ' + (index + 1)" />
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
            { image: require('@/assets/Group 112.jpg') },
            { image: require('@/assets/Group 112.jpg') },
            { image: require('@/assets/Group 112.jpg') },

            ],
        };
    },
    mounted() {
        new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 5000,
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
    margin-bottom: 45px;
}

.swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius:10px
}
</style>