<template>
  <div class="task-list">
    <h2>Create Task</h2>
    <form @submit.prevent>
      <div class="mb-1">
        <label for="task-name">Task name: </label>
        <input type="text" id="task-name" v-model="newTask.name" />
      </div>
      <div class="mb-1">
        <label for="task-type">Take Type: </label>
        <select name="task-type" id="task-type" v-model="newTask.type">
          <option value="personal">Personal</option>
          <option value="work">Work</option>
        </select>
      </div>
      <button @click="addTask">Add Task</button>
    </form>
    <h2>Task List</h2>
    <div>
      <button @click="listFilter = 'all'">All</button> |
      <button @click="listFilter = 'todo'">Todo</button> |
      <button @click="listFilter = 'done'">Done</button>
    </div>
    <ul>
      <li v-for="(task, index) in filteredTasks" :key="`task-${index}`">
        <input type="checkbox" v-model="task.isComplete" /> {{ task.name }} ({{
          task.type
        }})
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  // TODO
});
</script>

<style scoped>
.task-list {
  max-width: 800px;
  margin: 0 auto;
}

ul {
  list-style: none;
}
.mb-1 {
  margin-bottom: 1rem;
}
</style>
