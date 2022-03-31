<template>
  <div class="home">
    <Waves />

    <div
      class="card-avatar overflow-hidden absolute right-14 top-24 w-80 h-80 flex bg-transparent rounded-full hover:-translate-y-3 duration-500 ease-in-out hover:animate-none animate-pulse"
    >
      <!-- <img
      v-if="!move"
        class="w-full h-full absolute duration-500 ease-in-out"
        :class="move ?'' : 'slide'"
        
        :src="require(`@/assets/img/avatar${imgIn}.png`)"
        alt
      />-->
      <img
        id="myAvatar"
        class="w-full h-full absolute duration-500 ease-in-out"
        :src="require(`@/assets/img/avatar${imgIn}.png`)"
        alt
      />
      <svg
        @click="change"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 absolute top-5 cursor-pointer"
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
      </svg>
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
    };
  },
  methods: {
    change() {
      const items = document.getElementById("myAvatar");

      this.move = !this.move;
      items.classList.remove("slide");

      setTimeout(() => {
        items.classList.add("slide");
        this.imgIn++;
        if(this.imgIn==14){
           this.imgIn=0;
        }
        
      }, 200);
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
.home .slide,
.home .slide2 {
  animation: mymove 1.5s forwards;
}
@keyframes mymove {
  0% {
    transform: translateX(0px);
  }
  10% {
    transform: translateX(900px);
  }
  50% {
    transform: translateY(400px);
  }
  60% {
    transform: translateX(-1000px);
  }
  100% {
    transform: translateY(0px);
    transform: translateX(0px);
  }
}
.card-avatar {
  box-shadow: 0 35px 65px 0 rgba(86, 184, 149, 0.42),
    inset 0 -10px 15px 0 rgba(113, 235, 191, 0.8);
}
</style>
