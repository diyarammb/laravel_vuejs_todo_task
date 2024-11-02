import { defineStore } from 'pinia';
import taskService from '../api/taskService';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      const response = await taskService.getTasks();
      this.tasks = response.data;
    },
    async addTask(task) {
      const response = await taskService.createTask(task);
      this.tasks.push(response.data);
    },
    async updateTask(id, updatedTask) {
      await taskService.updateTask(id, updatedTask);
      const index = this.tasks.findIndex(task => task.id === id);
      if (index !== -1) this.tasks[index] = { ...this.tasks[index], ...updatedTask };
    },
    async deleteTask(id) {
      await taskService.deleteTask(id);
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
  },
});
