<template>
    <div>
        <div class=" max-w-screen-xl m-auto">
            <Header />
            <Slider />
            <Search />
            <CrossItem />
            <SliderComents/>
            <Map/>
            <Feedback/>
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/Header/Header.vue';
import Slider from '@/components/Slider/Slider.vue';
import Search from '@/components/Search/Search.vue';
import CrossItem from '@/components/CrossItem/CrossItem.vue';
import Footer from '@/components/Footer/Footer.vue';
import SliderComents from '@/components/SliderComents/Slider.vue';
import Map from '@/components/map/Map.vue';
import Feedback from '@/components/FormFeedback/FormFeedback.vue';
</script>