import { createWebHistory, createRouter } from "vue-router";
import brandintroduce from './components/brandintroduce.vue';
import CustomerService from './components/CustomerService.vue';
import storelocation from './components/storelocation.vue';
import galary from './components/galary.vue';
import notice from './components/notice.vue';

const routes = [
  {
    path: "/brandintroduce",
    component: brandintroduce.vue,
  },
  {
    path: "/CustomerService",
    component: CustomerService.vue,
  },
  {
    path: "/storelocation",
    component: storelocation.vue,
  },
  {
    path: "/galary",
    component: galary.vue,
  },
  {
    path: "/notice",
    component: notice.vue,
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 