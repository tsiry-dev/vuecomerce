<script setup>
import { useCounterStore } from '@/stores/counter'
import { useTaskStore } from '@/stores/tasks'
import { ref } from 'vue'

const title = ref('');

const counter = useCounterStore();
const tasks = useTaskStore();

console.log(counter);
console.log(tasks.getAllTasks);



const handleCreateTask = () => {
  tasks.createTask({
      id: crypto.randomUUID(),
      title: title.value,
      completed: false
  });

  title.value = '';
}


</script>

<template>
  <h2>About</h2>

  <div class="text-center text-3xl">
    {{ counter.getCount }}
  </div>

  <button
  @click="counter.increment"
  class="p-2 bg-amber-950 text-white text-2xl"
  >Increment</button>


  <div>
    {{ tasks.getAllTasks }}
  </div>


  <div class="p-15">
      <form @submit.prevent="handleCreateTask">
        <input v-model="title" class="bg-gray-400 p-4 text-2xl" type="text" name="" id="">
          <button
              class="p-2 bg-amber-950 text-white text-2xl"
              >Add</button>
      </form>
  </div>
</template>

<style scoped>
</style>
