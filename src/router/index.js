// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/company/Home.vue';

// Define routes
const routes = [
  { path: '/', name: 'Home', component: Home },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
