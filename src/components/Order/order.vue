<template>
    <div class="checkout-page">
      <h1 class="text-3xl font-bold mb-4">Оформление заказа</h1>
      <!-- Форма для ввода данных для оформления заказа -->
      <form @submit.prevent="submitOrder">
        <!-- Поля для ввода данных о доставке -->
        <div class="mb-4">
          <label for="fullname" class="block text-sm font-medium text-gray-700">ФИО</label>
          <input type="text" id="fullname" v-model="fullname" required class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
        </div>
        <div class="mb-4">
          <label for="address" class="block text-sm font-medium text-gray-700">Адрес</label>
          <input type="text" id="address" v-model="address" required class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-sm font-medium text-gray-700">Телефон</label>
          <input type="tel" id="phone" v-model="phone" required class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
        </div>
        <!-- Кнопка для подтверждения заказа -->
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Подтвердить заказ</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fullname: '',
        address: '',
        phone: ''
      };
    },
    methods: {
      // Метод для отправки данных заказа
      submitOrder() {
        // Ваша логика для отправки данных заказа
        console.log('Данные заказа:', this.fullname, this.address, this.phone);
        // Здесь можно добавить дополнительную логику, например, перенаправление на страницу подтверждения заказа
        // this.$router.push({ name: 'order-confirmation' });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Стили для формы и полей ввода */
  .checkout-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  /* Стили для кнопки */
  .checkout-page button {
    display: inline-block;
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .checkout-page button:hover {
    background-color: #0056b3;
  }
  </style>