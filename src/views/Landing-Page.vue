<template>
  <div class="home">
   
    <Waves />
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
    return {};
  },
  mounted() {
    // LandPg.run();
  },
  methods: {},
};
</script>
<style>

.home {
    width: 100%;
    height: 100vh;
    position: relative;
 
  }
  
</style>
