<template>
  <div class="home">
        
    <Waves />


   

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
