<template>
    <div class="bg-white flex justify-between pb-8">
      <div class="ml-16">
        <div class="text-[32px] font-bold">Все кроссовки</div>
      </div>
      <div class="mr-16 relative">
        <svg class="absolute top-[16px] left-[10px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" />
        </svg>
        <input v-model="query" @input="handleInput" class="py-3 min-w-[240px] border rounded-lg pl-10" type="text" placeholder="Поиск..." style="width: 240px;" />
      </div>
    </div>
    <div v-if="showModal">
      <div v-if="filteredProducts.length > 0">
        <ModalWindow :filteredProducts="filteredProducts" />
      </div>
      <div v-else>
        <p class="text-center">Товаров не найдено</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { useSneakers } from '@/stores/Sneakers';
  import ModalWindow from '../ModalWindow/modalWindow.vue';
  
  const sneakersStore = useSneakers();
  
  const query = ref('');
  const filteredProducts = ref([]);
  const showModal = ref(false);
  
  const searchProducts = () => {
    if (query.value.length > 0) {
      filteredProducts.value = sneakersStore.sneakers.filter(product => product.title.includes(query.value));
      showModal.value = true;
    } else {
      filteredProducts.value = [];
      showModal.value = false;
    }
  }
  
  const handleInput = () => {
    showModal.value = true;
    searchProducts();
  }
  
  watch(query, searchProducts);
  </script>