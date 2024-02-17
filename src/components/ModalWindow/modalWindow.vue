<template>
    <div v-if="stateModal" class="modal">
        <div  class="modal-content relative">
            <span @click="closeModal" class="absolute top-[10px] right-[20px] cursor-pointer">x</span>
            <ul class="my-5 mx-7">
                <li class="py-5" v-for="product in filteredProducts" :key="product.id">{{ product.title }} - {{ product.price }} $</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
    filteredProducts: Array
});

const stateModal = ref(true);

const closeModal = () => {
    stateModal.value = false;
    emit('close');
};

// Определяем событие close
const emit = defineEmits(['close']);
</script>
  
<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:9999
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 80%;
    max-height: 80%;
    overflow-y: auto;
}
</style>