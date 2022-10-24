import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/Main.vue'
import AboutView from '../views/AboutView.vue'
import StoreInfo from '../views/StoreInfo.vue'
import Doma from '../components/information/Doma.vue'
import Mokryun from'../components/information/Mokryun.vue'
import Hyungchon from '../components/information/Hyungchon.vue'
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
  },
  {
    path: '/storeinfo',
    name: 'StoreInfo',
    component: StoreInfo
  },
  {
    path: '/doma',
    name: 'Doma',
    component: Doma
  },
  {
    path: '/hyungchon',
    name: 'Hyungchon',
    component: Hyungchon
  },
  {
    path: '/mokryun',
    name: 'Mokryun',
    component: Mokryun
  },

]

export const router = new VueRouter({

  //localhost
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
