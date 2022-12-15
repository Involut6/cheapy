import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    all: [],
    men: [],
    women: [],
    accessory: [],
    electronics: [],
    isLoading: false,
    error: false,
  }),
  actions: {
    async getProducts() {
      this.isLoading = true
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        console.log(res)
        this.all = res.data
        this.men = res.data.filter((item) => item.category === "men's clothing")
        this.women = res.data.filter((item) => item.category === "women's clothing")
        this.accessory = res.data.filter((item) => item.category === "jewelery")
        this.electronics = res.data.filter((item) => item.category === "electronics")
      } catch (err) {
        if (err) {
          this.error = true;
        }
      } finally {
        this.isLoading = false;
      }
    }
  }
})
