import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/Main.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/mainpage'
  },
  {
    path:'/mainpage',
    component: MainPage,
    name: 'mainpage',
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

export const router = new VueRouter({

  //localhost
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
