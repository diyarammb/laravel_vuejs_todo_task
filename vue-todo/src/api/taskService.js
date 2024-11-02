import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getTasks() {
    return apiClient.get('/tasks');
  },
  getTask(id) {
    return apiClient.get(`/tasks/${id}`);
  },
  createTask(task) {
    return apiClient.post('/tasks', task);
  },
  updateTask(id, task) {
    return apiClient.put(`/tasks/${id}`, task);
  },
  deleteTask(id) {
    return apiClient.delete(`/tasks/${id}`);
  },
};
