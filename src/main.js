import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 라우터만든거 from './router.js'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
createApp(App).use(라우터만든거).mount('#app')
