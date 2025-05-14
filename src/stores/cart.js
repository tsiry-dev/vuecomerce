// stores/counter.js
import { defineStore } from 'pinia'

//STATE
//ACTIONS
//GETTERS
export const useCartStore = defineStore('carts', {
  state () {
    return {
       carts: [],
    }
  },

  getters:{
     allCarts() {
        return this.carts;
     }
  },

  actions: {
     addInCart(data) {
        this.carts.push(data);
     },
     removeFromCart(id){
        this.carts = this.carts.filter(c => c.id !== id);
        console.log(id);
     },
     addCarts(data){
        this.carts = data;
     }
  },
})
