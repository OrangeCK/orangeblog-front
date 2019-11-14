import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeMenu: sessionStorage.getItem('activeMenu')
  },
  mutations: {
    SET_ActiveMenu: (state, value) => {
      state.activeMenu = value
      window.sessionStorage.setItem('activeMenu', value)
    }
  },
  actions: {
  },
  modules: {
  }
})
