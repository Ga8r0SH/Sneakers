import { defineStore } from 'pinia';
import axios from 'axios';

export const useSneakers = defineStore('Sneakers', {
  state: () => {
    return {
      sneakers: [],
      isLoading: true,
      favorite: [],
      purchases: [],
      photo:[
        'https://sportlandia.md/image/cache/webp/catalog/products/00/AH8050-100/1-700x700.webp',
        'https://sportlandia.md/image/cache/webp/catalog/products/01/FN7811-001/1-700x700.webp',
        'https://sportlandia.md/image/cache/webp/catalog/products/00/DJ5172-100/1-700x700.webp',
        'https://soccer-store.ru/images/products/10878/large/1670493576.jpg',
        'https://images.puma.net/images/371149/25/sv01/fnd/UKR/',
        'https://images.prom.ua/4676367376_w640_h640_muzhskie-krossovki-vesna-osen.jpg',
        'https://i.simpalsmedia.com/marketplace/products/original/880de16500fd2c4a9a2e6f1da57eee44.jpg',
        'https://sportlandia.md/image/cache/webp/catalog/products/00/DC0957-100/1-700x700.webp',
        'https://sportlandia.md/image/cache/webp/catalog/products/09/314192-009/1-700x700.webp',
      ]
    }
  },

  actions: {
    async fetchSneakers() {
      try {
        const response = await axios.get('https://604781a0efa572c1.mokky.dev/items');
        this.sneakers = response.data.slice(0, 9);
        this.isLoading = false;
        console.log(this.sneakers)
      } catch (error) {
        console.log('Ошибка', error);
      }
    },

    calculateTotalPurchasePrice() {
      return this.purchases.reduce((total, item) => total + item.price, 0);
    }
  },
  async fetchProfile(){
    try{
      const response = await axios.get('')
    }catch(error){
      console.log(error)
    }
  }
  
});