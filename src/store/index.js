import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeName: sessionStorage.getItem('activeName')
  },
  mutations: {
    SET_ActiveName: (state, value) => {
      state.activeName = value
      window.sessionStorage.setItem('activeName', value)
    }
  },
  actions: {
  },
  modules: {
  }
})
