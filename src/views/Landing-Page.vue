<template>
  <div class="home">
    <Waves />

    <div
      class="card-avatar overflow-hidden absolute right-14 top-24 w-80 h-80 flex bg-transparent rounded-full hover:-translate-y-3 duration-500 ease-in-out hover:animate-none animate-pulse"
    >
    
      <img
        id="myAvatar"
        class="w-full h-full absolute duration-500 ease-in-out"
        :src="require(`@/assets/img/avatar${imgIn}.png`)"
        alt
      />
      <!-- <svg xmlns="http://www.w3.org/2000/svg"    class="h-6 w-6 absolute top-4 cursor-pointer animate-pulse"
        style="color:rgba(113, 235, 191, 0.8)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg> -->
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute top-4 cursor-pointer animate-pulse"
        style="color:rgba(113, 235, 191, 0.8)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      <!-- <svg
     
    
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 absolute top-4 cursor-pointer animate-pulse"
        style="color:rgba(113, 235, 191, 0.8)"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg> -->
    </div>

    <Nav />
  </div>
</template>
<script>
import * as LandPg from "@/assets/js/landingPage.js";
import Nav from "@/components/Nav.vue";
// import Logo from "@/components/Logo.vue";
import Waves from "@/components/Waves.vue";
export default {
  name: "home",
  components: {
    Nav,
    Waves,
    // Logo,
  },
  data() {
    return {
      imgIn: 1,
      move: false,
      spin:''
    };
  },
  mounted(){
   this.change()
  },
  methods: {
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
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100vh;
  position: relative;
}
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
