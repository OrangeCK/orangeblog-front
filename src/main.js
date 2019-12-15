import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
import service from './common/js/request'
import API from './common/js/api'
import './router/routerPermission.js'
import '@/common/css/common.css'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.config.productionTip = false

Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})

let startApp = function () {
  axios.get('static/config.json').then((res) => {
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
