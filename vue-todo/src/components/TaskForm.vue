<template>
  <div>
    <h1>{{ isEditing ? 'Edit Task' : 'New Task' }}</h1>
    <form @submit.prevent="saveTask">
      <input v-model="task.task" placeholder="Task" required />
      <textarea v-model="task.description" placeholder="Description"></textarea>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import { useTaskStore } from '../stores/taskStore';
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const taskStore = useTaskStore();
    const route = useRoute();
    const router = useRouter();
    const task = ref({ task: '', description: '' });
    const isEditing = route.params.id !== undefined;

    onMounted(async () => {
      if (isEditing) {
        const existingTask = await taskStore.getTask(route.params.id);
        task.value = existingTask;
      }
    });

    const saveTask = async () => {
      if (isEditing) {
        await taskStore.updateTask(route.params.id, task.value);
      } else {
        await taskStore.addTask(task.value);
      }
      router.push('/');
    };

    return { task, saveTask, isEditing };
  },
};
</script>
