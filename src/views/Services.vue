<template>
  <div class="case">
    <div class="opacity-25 lg:text-9xl md:text-7xl text-3xl h-28 flex justify-between w-full">
      <h1 class="w-1/2 text-left">Services</h1>
      <h1 class="w-1/2 text-right" style="color:#139487">01</h1>
    </div>

 

<ul class="card_services lg:mb-24 h-full lg:h-5/6">
  <li class="card" :class="hover_service_card" style="--accent-color: #D00903">
    <div class="icon"><i class="fa fa-html5"></i></div>
    <div class="title">Front-end </div>
    <div class="content">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</div>
  </li>
  <li class="card" :class="hover_service_card" style="--accent-color: #EC9E38">
    <div class="icon"><i class="fa fa-internet-explorer"></i></div>
    <div class="title">Web Development</div>
    <div class="content">I use various web technologies to develop attractive websites which converts visitors to customers.</div>
  </li>
  <li class="card" :class="hover_service_card" style="--accent-color: #64BECF">
    <div class="icon"><i class="fa fa-mobile"></i></div>
    <div class="title">MOBILE FRIENDLY</div>
    <div class="content">A responsive design make your website accessible o all users, regardless of their device .</div>
  </li>
</ul>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
   
     
      hover_service_card:
        " md:w-2/3 lg:w-1/5 w-full  lg:pb-0 pb-24  cursor-pointer  transition ease-in-out delay-150 hover:scale-105   duration-500",
    };
  },
  mounted() {
    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".case",
        start: "top bottom",
        end: "center top",
        scrub: false,
        repeat: -1,
        toggleActions: "restart none none reset",
      },
    })
    .from(".card_services", {
     
      scale:0,
      duration: 2,
      delay: 0,
       ease: "back",
    })
   
  },
};
</script>

<style scoped>
@import "@/assets/styles/Services.scss";


</style>