import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import App from "../App.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'App',
    component: App,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router ;