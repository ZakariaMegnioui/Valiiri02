<template>
  <div class>
    <!--Hey! This is the original version
    of Simple CSS Waves-->

    <div class="header">
      <!-- <Logo/> -->
      <!--Content before waves-->

      <div class="inner-header">
        <!--Just the logo.. Don't mind this-->
        <svg
          version="1.1"
          class="logoo absolute left-12 top-9"
          baseProfile="tiny"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 500 500"
          xml:space="preserve"
        >
          <path
            fill="#FFFFFF"
            stroke="#000000"
            stroke-width="10"
            stroke-miterlimit="10"
            d="M57,283"
          />
          <g>
            <path
              d="M250.4,0.8C112.7,0.8,1,112.4,1,250.2c0,137.7,111.7,249.4,249.4,249.4c137.7,0,249.4-111.7,249.4-249.4
C499.8,112.4,388.1,0.8,250.4,0.8z M383.8,326.3c-62,0-101.4-14.1-117.6-46.3c-17.1-34.1-2.3-75.4,13.2-104.1
c-22.4,3-38.4,9.2-47.8,18.3c-11.2,10.9-13.6,26.7-16.3,45c-3.1,20.8-6.6,44.4-25.3,62.4c-19.8,19.1-51.6,26.9-100.2,24.6l1.8-39.7		c35.9,1.6,59.7-2.9,70.8-13.6c8.9-8.6,11.1-22.9,13.5-39.6c6.3-42,14.8-99.4,141.4-99.4h41L333,166c-12.6,16-45.4,68.2-31.2,96.2	c9.2,18.3,41.5,25.6,91.2,24.2l1.1,39.8C390.5,326.2,387.1,326.3,383.8,326.3z"
            />
          </g>
        </svg>
        <div class="w-4 flex flex-col absolute top-32 left-12 opacity-100">
          <i class="fa fa-instagram" id="apple"></i>
          <i class="fa fa-linkedin" id="twitter"></i>
          <i class="fa fa-github-square github" id="github"></i>
          <i class="fa fa-facebook-square" id="facebook"></i>
        </div>
        <div class="text-left absolute left-48 top-28">
          <p class="font-bold mb-1" style="color:#139487 ">Hi, my name is</p>
          
          <h1 style="font-size:3rem " class="title text-gray-400" data-text="Zakaria Megnioui" >Zakaria Megnioui</h1>

          <h1 style="font-size:3rem" class="title text-gray-500">I build things for the web.</h1>
          <p
            class="font-bold text-gray-500 w-3/6 mt-1"
          >I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>

          <div id="container" class="mb-12 mt-8 -translate-x-3">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Contact Me</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Waves Container -->
      <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#efefef" />
          </g>
        </svg>
      </div>

      <!--Waves end-->
    </div>
    <!--Header ends-->

    <!--Content starts-->
    <div class="content flex">
      <div class="scroll-down2"></div>
    </div>
    <!--Content ends-->
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
export default {
  components: {
    Logo,
  },
};
</script>

<style scoped>
@import "@/assets/styles/Waves.css";
</style>


