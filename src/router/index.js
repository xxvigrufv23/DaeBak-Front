import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/Main.vue'
import AboutView from '../views/AboutView.vue'
import StoreInfo from '../views/StoreInfo.vue'
import Customer from '../views/Customer.vue'
import Doma from '../components/information/Doma.vue'
import Mokryun from'../components/information/Mokryun.vue'
import Hyungchon from '../components/information/Hyungchon.vue'
import Gallery from '../views/Gallery.vue'
import Gallery1 from '../components/GalleryInformation/Gallery1.vue'
import Gallery2 from '../components/GalleryInformation/Gallery2.vue'
import Gallery3 from '../components/GalleryInformation/Gallery3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/mainpage'
  },
  {
    path:'/mainpage',
    component: MainPage,
    name: 'Mainpage',
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/storeinfo',
    name: 'StoreInfo',
    component: StoreInfo,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/gallery1',
    name: 'Gallery1',
    component: Gallery1,
  },
  {
    path: '/gallery2',
    name: 'Gallery2',
    component: Gallery2,
  },
  {
    path: '/gallery3',
    name: 'Gallery3',
    component: Gallery3,
  },
  {
    path: "/doma",
    name: "Doma",
    component: Doma,
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
  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  },

]

export const router = new VueRouter({

  //localhost
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
