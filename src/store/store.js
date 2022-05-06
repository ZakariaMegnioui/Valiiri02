import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    theam:{
     background: 'bg-gradient-to-l from-purple-900 via-indigo-800 to-indigo-900',
     primary:'text-gray-200',
     sacondary:'text-gray-400'
    }
  },
  
  mutations : {
    SET_BACKGROUND: (state, color) => {
      state.theam = color;
    }
  }
})
export default store;