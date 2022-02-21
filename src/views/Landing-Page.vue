<template>
  <div class="about">


    <div class="overlay-navigation">
      <nav role="navigation">
        <ul>
          <li>
            <a href="#" data-content="The beginning">Home</a>
          </li>
          <li>
            <a href="#" data-content="Curious?">About</a>
          </li>
          <li>
            <a href="#" data-content="I got game">Skills</a>
          </li>
          <li>
            <a href="#" data-content="Only the finest">Works</a>
          </li>
          <li>
            <a href="#" data-content="Don't hesitate">Contact</a>
          </li>
        </ul>
      </nav>
    </div>

    <section @click="activate" class="home">
      <div class="open-overlay">
        <span :class="open ? 'animate-top-bar': 'animate-out-top-bar'" class="bar-top"></span>
        <span :class="open ? 'animate-middle-bar': 'animate-out-middle-bar'" class="bar-middle"></span>
        <span :class="open ? 'animate-bottom-bar': 'animate-out-bottom-bar'" class="bar-bottom"></span>
      </div>
    </section>
  </div>
</template>
<script>
import * as LandPg from '@/assets/js/landingPage.js'

export default {
  name: "Nav",
  data() {
    return {
      open: false,
    };
  },
  mounted(){
  // LandPg.run();
  },
  methods: {
    activate() {
      this.open = !this.open;
      var overlay_navigation = $(".overlay-navigation"),
        nav_item_1 = $("nav li:nth-of-type(1)"),
        nav_item_2 = $("nav li:nth-of-type(2)"),
        nav_item_3 = $("nav li:nth-of-type(3)"),
        nav_item_4 = $("nav li:nth-of-type(4)"),
        nav_item_5 = $("nav li:nth-of-type(5)");

      overlay_navigation.toggleClass("overlay-active");
      if (overlay_navigation.hasClass("overlay-active")) {
        overlay_navigation
          .removeClass("overlay-slide-up")
          .addClass("overlay-slide-down");
        nav_item_1
          .removeClass("slide-in-nav-item-reverse")
          .addClass("slide-in-nav-item");
        nav_item_2
          .removeClass("slide-in-nav-item-delay-1-reverse")
          .addClass("slide-in-nav-item-delay-1");
        nav_item_3
          .removeClass("slide-in-nav-item-delay-2-reverse")
          .addClass("slide-in-nav-item-delay-2");
        nav_item_4
          .removeClass("slide-in-nav-item-delay-3-reverse")
          .addClass("slide-in-nav-item-delay-3");
        nav_item_5
          .removeClass("slide-in-nav-item-delay-4-reverse")
          .addClass("slide-in-nav-item-delay-4");
      } else {
        overlay_navigation
          .removeClass("overlay-slide-down")
          .addClass("overlay-slide-up");
        nav_item_1
          .removeClass("slide-in-nav-item")
          .addClass("slide-in-nav-item-reverse");
        nav_item_2
          .removeClass("slide-in-nav-item-delay-1")
          .addClass("slide-in-nav-item-delay-1-reverse");
        nav_item_3
          .removeClass("slide-in-nav-item-delay-2")
          .addClass("slide-in-nav-item-delay-2-reverse");
        nav_item_4
          .removeClass("slide-in-nav-item-delay-3")
          .addClass("slide-in-nav-item-delay-3-reverse");
        nav_item_5
          .removeClass("slide-in-nav-item-delay-4")
          .addClass("slide-in-nav-item-delay-4-reverse");
      }
    },
  },
};
</script>
<style>
@import '@/assets/styles/Nav.css';
</style>