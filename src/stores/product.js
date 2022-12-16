import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue';

export const useProductStore = defineStore('product', {
  state: () => ({
    all: [],
    men: [],
    women: [],
    accessory: [],
    electronics: [],
    isLoading: false,
    error: false,
    cart: [],
    product: {},
    prodId: ref()
  }),
  actions: {
    async getProducts() {
      this.isLoading = true
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
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
    },
    async getProduct() {
      this.isLoading = true
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${this.prodId}`)
        console.log(res)
        this.product = res.data
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
