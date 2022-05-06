<template>
  <div class="hidden md:block">
    <section class="section top-section flex flex-col align-middle justify-center">
      <div
        class="circel number2 lg:h-80 lg:w-80 md:w-60 w-32 md:h-60 rounded-full absolute -top-5 right-0"
        :class="setBackground.background"
      ></div>
      <div
        class="circel number1 lg:h-80 lg:w-80 md:w-60 w-32 md:h-60 rounded-full absolute bottom-0 left-0"
        :class="setBackground.background"
      ></div>
      <div class="content-container content-theme-light">
        <div class="content-inner">
          <div class="content-center">
            <h1>VALIIRI</h1>
            <p>
              Whether you think you can or you think you can't, you're right.
              <a href="http://finestpixels.com/" target="_blank"></a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section bottom-section" :class="setBackground.background">
      <div
        class="circel number3 h-80 w-80 rounded-full absolute -bottom-20 left-0"
        style="background:#efefef; "
      ></div>
      <div
        class="circel number5 h-80 w-80 rounded-full absolute -top-5 right-0"
        style="background:#efefef; "
      ></div>
      <div
        class="circel number6 h-80 w-80 rounded-full absolute -top-20 left-16"
        style="background:#efefef; "
      ></div>
      <div
        class="circel number4 h-80 w-80 rounded-full absolute -bottom-5 right-32"
        style="background:#efefef; "
      ></div>

      <div class="content-container content-theme-dark">
        <div class="content-inner">
          <div class="content-center">
            <h1>VALIIRI</h1>
            <p>
              Whether you think you can or you think you can't, you're right.
              <a href="http://finestpixels.com/" target="_blank"></a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      open: false,
    };
  },
  computed: {
    setBackground() {
      //  this.$store.commit('user/SET_DIALOG', false)

      return this.$store.state.theam;
    },
  },
  mounted() {
    // LandPg.run();

    this.animate(".number1", innerWidth * 1, 0, ".top-section", 0);
    this.animate(".number2", -innerWidth * 1, 0, ".top-section", 0);
    this.animate(".number3", 0, 0, ".bottom-section", 32);
    this.animate(".number4", 0, 0, ".bottom-section", 0);
    this.animate(".number5", 0, 0, ".bottom-section", 10);
    this.animate(".number6", 0, 0, ".bottom-section", 20);
  },
  methods: {
    animate(element, valuex, scale, parent, delay) {
      let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: parent,
          start: "center bottom",
          scrub: true,
          pin: false,
          end: "10% 10%",
        },
      });
      tl.from(element, {
        x: valuex,
        scale: scale,
        rotation: 360,
        duration: 9,
        delay: delay,
        ease:'back'
      });
    },
  },
};
</script>

<style>
@import "@/assets/styles/Second.scss";
</style>