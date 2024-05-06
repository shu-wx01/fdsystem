import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import gambling from '@/store/modules/gambling'
import dynamic_gambling from '@/store/modules/dynamic_gambling'
import continual_gambling from '@/store/modules/continual_gambling'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    gambling,
    dynamic_gambling,
    continual_gambling
  },
  getters
})

export default store
