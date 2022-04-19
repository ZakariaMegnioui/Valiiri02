<template>
  <div id="app">
    <div class="w-full h-28 top-0 flex justify-between mb-10 fixed z-50 transition-all duration-1000 delay-500" :class="up ? 'top-0' : '-top-52'">
      <div class="lg:w-16 lg:h-16 md:w-14 md:h-14 w-12 h-12 transform z-10 ml-16">
        <img @click="scrollNav('home')" src="@/assets/img/logo.png" alt />
      </div>
      <div class="lg:w-16 lg:h-16 md:w-14 md:h-14 w-10 h-10 mr-16 z-50 flex">
        <Nav @select="select" />
      </div>
    </div>
    <header class="w-full h-2 bg-black"></header>
    <div id="home">
      <landing-page />
    </div>
    <Second />
    <div id="services">
      <Services />
    </div>
    <Qoutes />
    <div id="about">
      <About />
    </div>
    <Theard />
    <div id="work">
      <case-study />
    </div>
    <div id="contact">
      <ContactView />
    </div>
  </div>
</template>
<script>
import LandingPage from "./views/Landing-Page.vue";
import Second from "./views/Second-Page.vue";
import Theard from "./views/Theard-Page.vue";
import About from "./views/About.vue";
import Services from "./views/Services.vue";
import Qoutes from "./views/Qoutes.vue";
import CaseStudy from "./views/Case-Study.vue";
import ContactView from "./views/Contact_view.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "app",
  components: {
    LandingPage,
    Second,
    Nav,
    About,
    Theard,
    Services,
    Qoutes,
    CaseStudy,
    ContactView,
    CaseStudy,
  },
  data() {
    return {
      open: false,
      scrollePosition: 0,
      up:true,
    };
  },
  mounted() {
    this.scroll();
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      const windowTop =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
      if (windowTop > this.scrollePosition) {
        this.scrollePosition = windowTop;
        this.up=false;
      } else {
        this.scrollePosition = windowTop;
            this.up=true;
      }
    },
    select(val) {
      this.scrollNav(val);
    },
    scrollNav(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.scrolledToBottom = true; // replace it with your code
        }
      };
    },
  },
};
</script>
<style>
@import "@/assets/styles/Logo.css";
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  background-color: #efefef;
}
header {
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
