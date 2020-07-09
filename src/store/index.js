import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    money: 0,
    errar: 0
  },
  mutations: {
    addMoney(state, m){
      state.money = m;
    },
    addErrar(state, paramsErro){
      if(paramsErro.etapa !== 4){
        state.errar = paramsErro.money/2;
      }else{
        state.errar = 0;
      }
    },

  },
  actions: {
  },
  modules: {
  }
})
