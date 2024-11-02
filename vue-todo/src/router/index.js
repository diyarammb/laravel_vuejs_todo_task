import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '../views/TaskList.vue';
import TaskForm from '../views/TaskForm.vue';

const routes = [
  { path: '/', component: TaskList },
  { path: '/task/new', component: TaskForm },
  { path: '/task/:id/edit', component: TaskForm, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
