import { defineStore } from 'pinia';
import axios from 'axios';

export const useSneakers = defineStore('Sneakers', {
  state: () => {
    return {
    sneakers:
      [ ],
    isLoading: true
  }},

  actions: {
    async fetchSneakers() {
      try {
        const response = await axios.get('https://604781a0efa572c1.mokky.dev/items');
        this.sneakers = response.data.slice(0, 10);
        this.isLoading = false;
      } catch (error) {
        console.log('Ошибка', error);
      }
    }
  }
});