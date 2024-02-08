import { createStore } from 'vuex'
import profile from "./modules/profile/index.js"
import channels from "./modules/channels/index.js"
import messages from "./modules/messages"
import { COMMIT_SET_STATUS } from '../common/mutation-types.js';

const store = createStore({
  state() {
    return {
      status: "",
    }
  },
  getters: {},
  mutations: {
    [COMMIT_SET_STATUS](state, value) {
      state.status = value
    }
  },
  actions: {},
  modules: { 
    profile,
    channels,
    messages
  }
});

export default store;