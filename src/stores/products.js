// stores/counter.js
import { defineStore } from 'pinia'

//STATE
//ACTIONS
//GETTERS
export const useProductStore = defineStore('products', {
  state () {
    return {
      products: null,
      isLoading: false,
      error: null
    }
  },

  getters:{},

  actions: {
     addProduct(data) {
        this.products = data
     },
     setLoading(bool){
        this.isLoading = bool;
     }
  },
})
