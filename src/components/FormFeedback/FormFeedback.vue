<template>
  <div class="bg-white border-t-2">
    <div class="feedback-form py-10 ">
      <h3 class="font-extrabold text-[21px] pb-4">Свяжитесь с нами</h3>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Имя:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="message">Сообщение:</label>
          <textarea id="message" rows="5" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    submitForm() {
          this.formData = {
            name: "",
            email: "",
            message: ""
          };
        } 
    }
  
};
</script>

<style scoped>
.feedback-form {
  max-width: 500px;
  margin: auto;
}

.feedback-form h3 {
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>