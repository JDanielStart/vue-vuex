import { createStore } from 'vuex'
import profile from "../modules/profile/index.js"

const store = createStore({
  state() {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { 
    profile
  }
});

export default store;