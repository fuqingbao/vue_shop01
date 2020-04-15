import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
/*引入axios*/
import axios from'axios'
/*引入全局变量*/
import './assets/css/global.css'
Vue.config.productionTip = false
//设置axios的根路径
axios.defaults.baseURL='http://119.23.53.78:8888/api/private/v1/login'
//挂载axios
Vue.prototype.$http=axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
