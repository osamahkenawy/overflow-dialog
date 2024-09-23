// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LiveMap from '../pages/company/live-map/LiveMap.vue';
import Home from '../pages/company/Home.vue';

// Define routes
const routes = [
  { path: '/', name: 'Home', component: Home },

  { path: '/live-map', name: 'LiveMap', component: LiveMap },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
