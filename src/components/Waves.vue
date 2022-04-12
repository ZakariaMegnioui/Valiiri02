<template>
  <div class="main flex flex-col  ">
    <!--Hey! This is the original version
    of Simple CSS Waves-->

    <div class="header  w-full flex flex-col lg:flex-row   " style="height:80vh">
     <div class="text-left lg:h-full h-2/3 lg:w-2/3 w-full   flex justify-center flex-col" >
        
          
          <h1  class="title w-4/5 text-2xl  md:text-5xl  text-gray-400" data-text="Zakaria Megnioui" >   <p class="font-bold mb-2 text-xs md:text-sm md:mb-5" style="color:#139487 ">Hi, my name is</p>  Zakaria Megnioui</h1>

          <h1  class="title text-2xl md:text-5xl w-4/5 text-gray-500 mt-2 md:mt-4">I build things for the web. <p
            class="font-bold  text-xs md:text-sm  text-gray-500  mt-2 md:mt-4"
          >I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
</h1>
          
          <div id="container" class="w-4/5  mt-5 lg:mt-11">
            <button class="open-button w-36 hidden sm:block md:w-48" @click="click">
              <span class="circle w-full h-8 md:w-12 md:h-12" aria-hidden="true">
                <span class="icon arrow"> </span>
              </span>
           
              <span class="button-text ">Contact Me </span>
             
            </button>
            <button @click="click"  style="background: #139487;" class="open-button px-6 py-1 rounded-md text-white block sm:hidden">
              Contact Me
            </button>
          </div>
        </div>
        <div class="lg:h-full h-1/3 w-full lg:w-1/3 flex justify-center">
     
    <div
      class="card-avatar overflow-hidden w-2/5 h-4/5  md:w-60 md:h-60 lg:w-80 lg:h-80 flex bg-transparent rounded-full hover:-translate-y-3 duration-500 ease-in-out hover:animate-none animate-pulse"
    >
   <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute transform -translate-y-32 cursor-pointer animate-pulse"
        style="color:rgba(113, 235, 191, 0.8)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      <img
        id="myAvatar"
        class="w-full h-full duration-500 ease-in-out"
        :src="require(`@/assets/img/avatar${imgIn}.png`)"
        alt
      />
   

   
    </div>
        </div>
    </div>
    <div class="bottom w-full " style="height :20vh;">
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
    <!--Header ends-->

    <!--Content starts-->
    <div class="content flex transform -translate-y-12">
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
  data(){
    return{
    imgIn: 1,
      move: false,
    }
  }
  ,
  mounted(){
   this.change()
  },
  methods: {
    click(){
    
      this.$emit('isopen', true)
    },
    change() {
      const items = document.getElementById("myAvatar");

      this.move = !this.move;
      items.classList.remove("slideIn");
        items.classList.add("slide");


      setTimeout(() => {
        items.classList.add("slideIn");
        this.imgIn++;
        if(this.imgIn==17){
           this.imgIn=0;
        }
        
      }, 100);
        setTimeout(this.change, 8000);
    },
   
    }
  

};

</script>

<style scoped>
@import "@/assets/styles/Waves.css";

.home .slide {
  animation: Out 2s linear;
}
.home .slideIn {
  animation: In 1.5s forwards;

}
@keyframes In {
  from {
  transform: translateX(-1000px)
}
to{
    transform: translateX(0px)

}
}
@keyframes Out {
  0% {
    transform: translateX(0px);
    
  }
 
  100% {
    transform: translateX(2000px);
  }
  
}
.card-avatar {
  box-shadow: 0 35px 65px 0 rgba(86, 184, 149, 0.42),
    inset 0 -10px 15px 0 rgba(113, 235, 191, 0.8);
}

</style>


