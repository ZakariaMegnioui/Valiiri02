import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./input.css";
import gsap from "gsap";
import store from './store/store.js';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
Vue.mixin({
  created: function () {
    this.gsap = gsap;
  }
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
