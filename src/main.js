import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import service from './common/js/request'
import API from './common/js/api'
import './router/routerPermission.js'
import '@/common/css/common.css'
import Element from 'element-ui'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import VueWechatTitle from 'vue-wechat-title'

Vue.config.productionTip = false

Vue.use(VueWechatTitle)
Vue.use(Element)
Vue.use(preview, {
  fullscreenEl:false
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
