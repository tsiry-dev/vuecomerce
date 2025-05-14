// stores/counter.js
import { defineStore } from 'pinia'

//STATE
//ACTIONS
//GETTERS
export const useCounterStore = defineStore('counter', {
  state () {
    return {
      count: 5
    }
  },

  getters:{
      getCount() {
         return this.count;
      }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
     increment () {
        this.count++
     }
  },
})
