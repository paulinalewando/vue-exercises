<template>
  <!-- Rewrite component using Composition API (use Exercise3Solution component) -->
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
import Vue from "vue";
import { Task } from "../types";

export default Vue.extend({
  name: "Exercise3",
  data() {
    return {
      newTask: {
        name: "",
        type: "personal",
      } as Task,
      tasks: [] as Task[],
      listFilter: "all",
    };
  },
  computed: {
    filteredTasks(): Task[] {
      if (this.listFilter === "done") {
        return this.tasks.filter((item: Task) => item.isComplete === true);
      } else if (this.listFilter === "todo") {
        return this.tasks.filter((item: Task) => item.isComplete === false);
      } else {
        return this.tasks;
      }
    },
  },
  methods: {
    addTask() {
      this.tasks.push({
        ...this.newTask,
        isComplete: false,
      });
    },
  },
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
