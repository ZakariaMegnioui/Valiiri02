<template>
  <div id="app">
    <div class="intro">
      <Intro />
      <!-- <div class="transform translate-y-28  flex justify-around align-middle flex-col w-full h-1/3">
 <h1 class="introtext text-gray-400 text-3xl">Valiiri02
      </h1>
      <p class="text-base text-gray-200 ">
       Hi, I'm Zakaria Megniouia a self-taught Software Developer.
        </p>
      <span class="text-base text-gray-200 ">
      ' I'm still working on it'
        </span>
      </div> -->
     
    </div>
    <div class="portfolio">
      <div
        class="w-full h-28 top-0 flex justify-between mb-10 fixed z-50 transition-all duration-1000 delay-500"
        :class="up ? 'top-0' : '-top-52'"
      >
        <div
          ref="logoo"
          class="logoo lg:w-16 lg:h-16 md:w-14 md:h-14 w-12 h-12 transform z-10 ml-4 md:ml-16"
        >
          <img @click="scrollNav('home')" src="@/assets/img/logo.png" alt />
        </div>
        <div
          ref="nav"
          class="mainnav lg:w-16 lg:h-16 md:w-14 md:h-14 w-10 h-10 mr-4 md:mr-16 z-50 flex"
        >
          <Nav @select="select" />
        </div>
      </div>
      <header class="w-full md:h-20 h-7 lg:h-2 bg-gradient-to-r from-purple-900 via-indigo-800 to-indigo-900"></header>
      <div id="home">
        <landing-page />
      </div>
      <Second />
      <div id="services" class="mb-4">
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
import Intro from "./components/intro.vue";

import Nav from "./components/Nav.vue";
import { gsap } from "gsap";
export default {
  name: "app",
  components: {
    Intro,
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
      start: true,
      scrollePosition: 0,
      up: true,
      metaInfo: {
        title: "About Us",
      },
    };
  },
  mounted() {
    this.scroll();
    window.addEventListener("scroll", this.onScroll);
    this.seence();
    this.intro();
    this.headerAnimation(".logoo", -200);
  },
  methods: {
    headerAnimation(clas, y) {
      gsap.fromTo(
        clas,
        {
          y: y,
          immediateRender: true,
        },
        {
          y: 0,
          duration: 1.5,
          ease: "elastic",
          delay: 6,
        }
      );
    },
    intro() {
      gsap.fromTo(
        ".intro",
        {
          y: 0,

          immediateRender: true,
        },
        {
          
          y: -809,

          duration: 2,

          delay:20,
        }
      );
      this.start = true;
    },
    seence() {
      gsap.fromTo(
        ".portfolio",
        {
          height:0,
          
        },
        {
             height: 100+'%',
          duration: 2,

          delay: 3.5,
        }
      );
      this.start = true;
    },
    onScroll(e) {
      const windowTop =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
      if (windowTop > this.scrollePosition) {
        this.scrollePosition = windowTop;
        this.up = false;
      } else {
        this.scrollePosition = windowTop;
        this.up = true;
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

.intro {
   display: flex;
	 align-items: center;
   justify-content: center;
	 background: linear-gradient(to bottom right, #070630 0%, #060454 100%);
   overflow: hidden;
	 min-height: 100vh;
   width: 100%;
   position: absolute;
  z-index: 99999;
  
}


</style>
