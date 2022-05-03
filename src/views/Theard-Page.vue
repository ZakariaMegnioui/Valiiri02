<template>
<div class="div">


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
  <!-- component -->
  <div class="testimony py-16" >  
    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 class="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">What's my team say</h2>
        <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div style=" display: grid; place-items: center;" class="topOne bg-gradient-to-r from-gray-300 via-neutral-200 to-slate-200 shadow-md row-span-2 p-6 border border-gray-100 rounded-xl  text-center sm:p-8" >
            <div class="h-full flex flex-col justify-center space-y-4">
              <img class="w-20 h-20 mx-auto rounded-full" :src="require(`@/assets/img/amine.png`)" alt="user avatar" height="220" width="220" loading="lazy">
              <p class="text-gray-600 md:text-xl"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Mohamed amine TZEMMOUT</h6>
                  <span class="text-xs text-gray-500">CEO AJICOD</span>
              </div>
            </div>
          </div>

          <div  style=" display: grid; place-items: center;" class="middelOne bg-gradient-to-r from-gray-300 via-neutral-200 to-slate-200 shadow-md p-6 border border-gray-100 rounded-xl  sm:flex sm:space-x-8 sm:p-8">
            <img class="w-20 h-20 mx-auto rounded-full" :src="require(`@/assets/img/ali.png`)" alt="user avatar" height="220" width="220" loading="lazy">
            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p class="text-gray-600"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Ali Benlhoucine</h6>
                  <span class="text-xs text-gray-500">Back-end Developer</span>
              </div>
            </div>
          </div>
          <div style=" display: grid; place-items: center;" class="lastOne  shadow-md bg-gradient-to-r from-gray-300 via-neutral-200 to-slate-200 p-6 border border-gray-100 rounded-xl  sm:flex sm:space-x-8 sm:p-8">
            <img class="w-20 h-20 mx-auto rounded-full" :src="require(`@/assets/img/mobarak.png`)" alt="user avatar" height="220" width="220" loading="lazy">
            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p class="text-gray-600"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">M'barek Amehr</h6>
                  <span class="text-xs text-gray-500">Front-end Developer</span>
              </div>
            </div>
          </div>
        </div>
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
    this.animateImage();
    this.animateCard();
     },
 methods:{
   animateImage(){
     gsap
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
        opacity:0,

        duration: 1,
        delay: 0,
       
      })
   },
      animateCard(){
        gsap
      .timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".testimony",
          start: "top bottom",
          end: "center top",
          scrub: false,
          repeat: -1,
          toggleActions: "restart none none reset",
        },
      })
      .from(".topOne", {
        x:-200,

        duration: 1,
        opacity:0,
      
       
      })
       .from(".middelOne", {
        x:600,

        duration: 1,
        opacity:0,
        
       
      })
       .from(".lastOne", {
        y:200,

        duration: 1,
        opacity:0,
       
       
      })
      
   }
 }
}
</script>

<style scoped>
@import "@/assets/styles/Theard.css";

</style>