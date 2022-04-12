<template>
  <div class="home">
        
    <Waves @isopen='isopen' />

  <dialog class="modal h-full w-9/12 m-auto  bg-gray-900" id="modal">
    <div @click="isopen(false)" class=" h-8 w-8 p-2  float-right " style="color:#139487; ">
 
<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full  cursor-pointer"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
    </div>
     
  <Contact/>
    </dialog>
   

  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
// import Logo from "@/components/Logo.vue";
import Waves from "@/components/Waves.vue";
import Contact from "@/components/contact.vue";
export default {
  name: "home",
  components: {
    Nav,
    Waves,
    Contact,
    // Logo,
  },
  data() {
    return {
     
      spin:'',
      close:true,
    };
  },
  methods: {
    
    isopen(e){
      console.log('this is open')
      if ( e) {
        const modal = document.querySelector("#modal");
         modal.showModal();
      } else {
        modal.close();
      }
    }
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
 
}
.modal{
  border: none;
  box-shadow: 0 0 1rem rgb(0 0 0 / .3);
}
.modal::backdrop{
  background: rgba(0 0 0 / .8);
}
</style>
