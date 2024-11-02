<template>
  <div>
    <h1>Task List</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <router-link :to="`/task/${task.id}/edit`">{{ task.task }}</router-link>
        <button @click="deleteTask(task.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTaskStore } from '../stores/taskStore';

export default {
  setup() {
    const taskStore = useTaskStore();
    taskStore.fetchTasks();

    return {
      tasks: taskStore.tasks,
      deleteTask: taskStore.deleteTask,
    };
  },
};
</script>
