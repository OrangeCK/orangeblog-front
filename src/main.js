import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
import service from './common/js/request'
import API from './common/js/api'
import './router/routerPermission.js'

Vue.config.productionTip = false

let startApp = function () {
  axios.get('./static/config.json').then((res) => {
    Vue.prototype.API = API.API(res.data)
    Vue.prototype.service = service
    Vue.prototype.$axios = axios
  })
}

export default startApp()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
