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
        'https://static.street-beat.ru/upload/resize_cache/iblock/ddf/500_500_1/w7b5puybs9gydp36obzd4t2pgz2r985i.jpg',
        'https://images.puma.net/images/371149/25/sv01/fnd/UKR/',
        'https://i.ebayimg.com/images/g/OS4AAOSwTJFjoWP2/s-l640.png',
        'https://tennis-mag.ru/images//media/item_images/%D0%A2%D0%B5%D0%BD%D0%BD%D0%B8%D1%81%D0%BD%D1%8B%D0%B5_%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8_Wilson_Rush_Pro_3.5_Paris_Black_Orange_.original.jpg',
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
  
  
});