import { defineStore } from 'pinia';
import http from './http.js';
import router from '@/router/index.js';

export const authStore = defineStore('authStore', {
  state: () => ({
    status: false,
    user: {
      name: null,
      country: null,
      age:null,
      gender:null,
      email:null,
      title:null
    },
  }),

  actions: {
    async login(email, password) {
      try {
        await http.get('/sanctum/csrf-cookie');
        const response = await http.post('login', { email, password });
        if (response.status === 200) {
          this.status = true;
          router.push({ name: 'homePage' });

          // Если данные пользователя возвращаются в ответе, сохраняем их в состоянии хранилища
          if (response.data.user) {
            const userData = response.data.user;
            console.log(userData)
            this.user.name = userData.name;
            this.user.age = userData.age;
            this.user.country = userData.country;
            this.user.email= userData.email;
            this.user.gender = userData.gender;
            this.user.title = userData.status;
          }
        }
      } catch (error) {
        console.error('Ошибка входа:', error);
      }
    },
  }
});