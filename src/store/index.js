import { createStore } from 'vuex'
import auth from './auth'

export default createStore({
  state: {
    // storing objects or plain strings
  },
  mutations: {
    // updating those objects and strings 
  },
  actions: {
    // requests and commits mutations
  },
  modules: {
    auth
  }
})
