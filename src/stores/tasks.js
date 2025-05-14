// stores/counter.js
import { defineStore } from 'pinia'

//STATE
//ACTIONS
//GETTERS
export const useTaskStore = defineStore('tasks', {
  state () {
    return {
      tasks: []
    }
  },

  getters:{
    getAllTasks() {
      return this.tasks;
    }
  },

  actions: {
    createTask(task) {
      this.tasks.push(task);
    }
  },
})
