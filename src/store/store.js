import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    background: 'bg-gradient-to-l from-purple-900 via-indigo-800 to-indigo-900'
  },
  
  mutations : {
    SET_BACKGROUND: (state, color) => {
      state.background = color;
    }
  }
})
export default store;