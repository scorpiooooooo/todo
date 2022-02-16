import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import home from './modules/home.js'

Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
    home
  },
  getters
})
