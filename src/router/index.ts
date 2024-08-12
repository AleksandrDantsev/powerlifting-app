import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import MeasurementsBody from "../pages/MeasurementsBody.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MeasurementsBody',
    component: MeasurementsBody,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router ;