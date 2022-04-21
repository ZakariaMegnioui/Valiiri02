<template>
  <div class="theard hidden md:block">
    


<div class="images-leaning ">
  <div class="image">
    <img  src="@/assets/img/react.png" alt="Eleanor from The Good Place" />
  </div>
  <div class="image">
    <img  src="@/assets/img/laravel.png" alt="Chidi from The Good Place" />
  </div>
  <div class="image">
    <img  src="@/assets/img/vue.png" alt="Jason from The Good Place" />
  </div>
  <div class="image">
    <img  src="@/assets/img/spring.png" alt="Tahani from The Good Place" />
  </div>
  
</div>
  </div>
</template>

<script>
import {gsap} from 'gsap';
export default {
 name:'cardsshadow'
 ,
 mounted(){
    let tl = gsap
      .timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".theard",
          start: "top bottom",
          end: "center top",
          scrub: false,
          repeat: -1,
          toggleActions: "restart none none reset",
        },
      })
      .from(".image", {
        scale: 0,

        duration: 4,
        delay: 0,
       ease: "elastic",
      })
 }
}
</script>

<style scoped>
@import "@/assets/styles/Theard.css";

</style>