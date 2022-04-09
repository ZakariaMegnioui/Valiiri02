<template>
  <div class="case"> <div class="SER transform -translate-y-12 flex justify-between w-full">
        <h1 class=" w-1/2 text-left">Services</h1>
        <h1 class="w-1/2 text-right " style="color:#139487">01</h1>
  </div>

 <div class="wrapper">
  <ul class="background-shapes" >
   <li v-for="(item , i ) in shapes" :key="i" :class="'shape '+item"></li>
  </ul>
</div>
    <div class="row1-container relative">
      <div class="box box-down cyan lg:translate-y-12" :class="hover_service_card">
        <h2>MOBILE FRIENDLY</h2>
        <p>A responsive design make your website accessible o all users, regardless of their device</p>
        <img :src="mobile" />
      </div>

      <div class="box red lg:translate-y-12" :class="hover_service_card">
        <h2 class="uppercase">Front-end Developer</h2>
        <p
          class="lg:mb-3"
        >I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
        <img :src="front_end" alt />
      </div>

      <div class="box box-down blue lg:translate-y-10" :class="hover_service_card">
        <h2 class="uppercase">Website Design</h2>
        <p
          class="lg:mb-3"
        >I value simple content structure, clean design patterns, and thoughtful interactions.</p>
        <img :src="design" alt />
      </div>
    </div>
    <div class="row2-container lg:translate-y-14  " >
      <div class="box orange " :class="hover_service_card">
         <h2 class="uppercase">Website Development</h2>
        <p
          class="lg:mb-3">I use various web technologies to develop attractive websites which converts visitors to customers</p>
        <img :src="web" alt />
      </div>
    </div>
  

  </div>
</template>

<script>
export default {
  data() {
    return {
      shapes:['square','circle','triangle','triangle','circle','square','triangle','triangle','circle','square','triangle','circle','triangle'],
      mobile: require("@/assets/icons/mobile.svg"),
      design: require("@/assets/icons/design.svg"),
      front_end: require("@/assets/icons/front-end.svg"),
      web: require("@/assets/icons/web.svg"),
      hover_service_card:'cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300'
    };
  },
  mounted() {},
};
</script>

<style scoped>
@import "@/assets/styles/Services.scss";
</style>