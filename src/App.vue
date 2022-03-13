<template>
  <div id="app" class="">
   <landing-page/>
   <Second/>
   <About/>
   <Theard/>
   <case-study/>
  </div>
</template>
<script>
import LandingPage from "./views/Landing-Page.vue";
import Second from "./views/Second-Page.vue";
import Theard from "./views/Theard-Page.vue";
import About from "./views/About.vue";
import CaseStudy from "./views/Case-Study.vue";
export default {
  name:'app',
   components:{
      LandingPage,
      Second,
      About,
      Theard,
      CaseStudy,
   }
}
</script>
<style>
#app {
   font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
