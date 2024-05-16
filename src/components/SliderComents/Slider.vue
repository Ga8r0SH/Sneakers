<template>
        <h1 class=" text-center flex justify-center bg-white font-extrabold text-2xl border-t-2 pt-5">Отзывы наших клиентов</h1>

  <Carousel :autoplay="3000" class=" bg-white pb-5">
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item bg-white flex justify-center">
        <div class="user-photo flex align-middle text-center items-center rounded-full">
          <img class=" rounded-full w-20 h-20 text-center":src="slide.photo" alt="User Photo">
        </div>
        <div class="user-comment flex align-middle text-center items-center px-4 w-[700px] py-2">
          <p>{{ slide.comment }}</p>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        { id: 1, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThwp3lA_eWSmudIMIOHfGkLYxWwBfyO1TxZRgxEHqY6A&s', comment: 'Это предложение демонстрирует понимание того, что не только добавление элементов в слайд, но и их стилизация имеет ключевое значение для обеспечения правильного отображения информации в карусели.' },
        { id: 2, photo: 'https://kartinki.pics/uploads/posts/2022-03/1648194097_2-kartinkin-net-p-krasivie-kartinki-malchikov-2.jpg', comment: 'Это предложение демонстрирует понимание того, что не только добавление элементов в слайд, но и их' },
        { id: 1, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThwp3lA_eWSmudIMIOHfGkLYxWwBfyO1TxZRgxEHqY6A&s', comment: 'Это предложение демонстрирует понимание того, что не только добавление элементов в слайд, но и их стилизация имеет ключевое значение для обеспечения правильного отображения информации в карусели.' },
        { id: 2, photo: 'https://kartinki.pics/uploads/posts/2022-03/1648194097_2-kartinkin-net-p-krasivie-kartinki-malchikov-2.jpg', comment: 'Это предложение демонстрирует понимание того, что не только добавление элементов в слайд, но и их' },
        { id: 1, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThwp3lA_eWSmudIMIOHfGkLYxWwBfyO1TxZRgxEHqY6A&s', comment: 'Это предложение демонстрирует понимание того, что не только добавление элементов в слайд, но и их стилизация имеет ключевое значение для обеспечения правильного отображения информации в карусели.' },
        { id: 2, photo: 'https://kartinki.pics/uploads/posts/2022-03/1648194097_2-kartinkin-net-p-krasivie-kartinki-malchikov-2.jpg', comment: 'Это предложение демонстрирует понимание того, что не только добавление элементов в слайд, но и ихЭто предложение демонстрирует понимание того, что не только добавление элементов в слайд, но и ихЭто предложение демонстрирует понимание того, что не только добавление элементов в слайд, но и ихЭто предложение демонстрирует понимание того, что не только добавление элементов в слайд, но и ихЭто предложение демонстрирует понимание того, что не только добавление элементов в слайд, но и их' },
        // Add more slides as needed
      ]
    }
  }
})
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  display: flex;
}

</style>