import { createStore } from 'vuex'

import { getters } from './getters'
import { app } from './modules/app'
import { user } from './modules/user'
import { teststore } from './modules/teststore'

export default createStore({
  state: {
  },
  getters,
  mutations: {},
  actions: {},
  modules: {
    app,
    user,
    teststore
  }
})

