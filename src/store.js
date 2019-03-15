import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerStore: false
  },
  mutations: {
    setDrawer (state, payload) {
      state.drawerStore = payload
    }
  },
  actions: {

  }
})
