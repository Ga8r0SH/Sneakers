<template class="">
    <div class="flex flex-col items-center justify-center min-h-screen ">
        <h1 class="text-2xl font-bold my-5">Оплата заказа</h1>
        <div class="max-w-md w-full bg-gradient-to-r from-blue-900 to-yellow-500 shadow-md rounded-lg p-6 mb-8">
            <img src="@/assets/visa.png" alt="VISA" class="w-20 mx-auto mb-4">
            <input type="text" v-model="numberCart"
                class="card-number w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
                placeholder="Номер карты 1800 4975" maxlength="16"></input>
            <div class="flex justify-between items-center mb-4">
                <label for="card-expiry" class="text-sm font-medium text-gray-300" >Срок действия:</label>
                <input placeholder="21/04/2024" type="text" id="card-expiry" maxlength="10" v-model="cardExpiry"
                    class="w-2/5 px-4 py-2 border border-gray-300 rounded-md text-sm">
            </div>
            <p class="text-sm font-medium mb-4">
                <label for="card-holder" class="text-gray-300">Владелец карты:</label>
                <input placeholder="Иван Иванов" type="text" id="card-holder" v-model="cardHolderName"
                    class="w-full px-4 py-2 border mt-2 border-gray-300 rounded-md text-sm">
            </p>
            <p class="text-sm font-medium mb-4">
                <label for="cvv" class="mr-5 text-gray-300">CVC:</label>
                <input placeholder="123" type="text" maxlength="3" id="cvv" v-model="cvv"
                    class="w-2/5 px-4 py-2 border border-gray-300 rounded-md text-sm">
            </p>
            <p class=" text-gray-300 text-[10px] pb-5">ПОСЛЕДНИЕ 3 ЦИФРЫ НА ОБОРОТНОЙ СТОРОНЕ КАРТЫ</p>
            <label for="email" class="text-sm font-medium text-gray-300">Mail:</label>
            <input type="email" id="email" v-model="email"
                class="w-full px-4 py-2 border border-gray-300 rounded-md mb-4">

            <label for="amount" class="text-2xl font-semibold text-gray-300">Общая сумма: {{ totalPrice }} лей</label>

            <button @click="submitPayment"
                class="w-full bg-blue-500 text-white font-semibold py-5 mt-5 rounded-md hover:bg-blue-600 transition duration-300">Оплатить</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSneakers } from '@/stores/Sneakers';
const sneakerStore = useSneakers();

let totalPrice = sneakerStore.calculateTotalPurchasePrice();

const email = ref('');
const amount = ref('');
const cardExpiry = ref('');
const cardHolderName = ref('');
const cvv = ref('');
const numberCart = ref('')

const submitPayment = () => {
    alert(`Оплата отправлена. Email: ${email.value}, Сумма: ${amount.value}`);
    email.value = '';
    amount.value = '';
    cardExpiry.value = '';
    cardHolderName.value = '';
    cvv.value = '';
    numberCart.value = ''
    totalPrice = 0;
};


</script>
<!-- 
<style scoped>
.container {
    width: 500px;
    margin: 0 auto;
    text-align: center;
    background-color: linear-gradient(to right, #1a1f71, #f7b600)

}

.card {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
}

.card img {
    width: 100px;
}

.card-number {
    font-size: 18px;
    margin-bottom: 10px;
}

.valid-thru,
.card-holder,
.cvv {
    margin-bottom: 10px;
}

.valid-thru input,
.card-holder input,
.cvv input {
    width: 150px;
    padding: 5px;
    border: 1px solid #ccc;
}

.last-digits {
    font-size: 12px;
}

.form {
    display: flex;
    flex-direction: column;
}

.form label {
    margin-bottom: 5px;
}

.form input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
}

.form button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}
</style> -->