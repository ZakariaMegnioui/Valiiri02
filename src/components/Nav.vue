<template>
  <div class="navigation">
    <div @click="activate" :class="open ?'turnafter turnbefor':''" class="hamburger-slim cursor-pointer "></div>

    <div class="navigation__background" :class="open ? 'scale ' : ''">&nbsp;</div>

    <nav class="navigation__nav fixed" :class="open ? 'w-full opacity-100 top top-0 left-0' : 'w-0 opacity-0 -left-96 -top-96'">
      <ul class="navigation__list md:text-5xl text-2xl lg:text-7xl" >
        <li @click="selector('home')"  class="navigation__item">
          <a  class="navigation__link">
            <span>01</span>Home
          </a>
        </li>
        <li @click="selector('services')"  class="navigation__item">
          <a  class="navigation__link">
            <span>02</span>Services
          </a>
        </li>
        <li @click="selector('about')"  class="navigation__item">
          <a  class="navigation__link">
            <span>03</span>About Me
          </a>
        </li>
        <li @click="selector('work')"  class="navigation__item">
          <a  class="navigation__link">
            <span>04</span>Case Study
          </a>
        </li>
        <li @click="selector('contact')"  class="navigation__item">
          <a  class="navigation__link">
            <span>05</span>Contact
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  
  name: 'navbar',

  data() {
    return {
      open: false,
    };
  },
  mounted() {
    // LandPg.run();
        this.headerAnimation(".hamburger-slim", -200);

  },
  methods: {
     headerAnimation(clas, y) {
      gsap.fromTo(
        clas,
        {
          y: y,
          immediateRender: true
        },
        {
          y: 0,
          duration: 1.5,
          ease: "elastic",
          delay:6
        }
      );
    },
    activate() {
      this.open = !this.open;
    },
    selector(item){
      this.$emit('select', item)
      this.open=false;
    }
  },
};
</script>
<style scoped>
@import "@/assets/styles/Nav.css";
</style>