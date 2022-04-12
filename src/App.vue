<template>
  <div id="app" class="">
   <div class="home_section">
   <landing-page/>
   </div>
   <Second/>
   <div id="service_section">
    <Services/>
    </div>
      <Qoutes/>
      <div class="about_section">
   <About/>
   </div>
   <Theard/>
   <div id="case_section">
   <case-study/>
   </div>
   <div id="contact_section">
   <ContactView/>
   </div>
  </div>
</template>
<script>
import LandingPage from "./views/Landing-Page.vue";
import Second from "./views/Second-Page.vue";
import Theard from "./views/Theard-Page.vue";
import About from "./views/About.vue";
import Services from "./views/Services.vue";
import Qoutes from './views/Qoutes.vue';
import CaseStudy from './views/Case-Study.vue';
import ContactView from './views/Contact_view.vue';

export default {
  name:'app',
   components:{
      LandingPage,
      Second,
    
      About,
      Theard,
      Services,
      Qoutes,
      CaseStudy,
      ContactView,
      CaseStudy,
   },
   methods:{
      scroll(id) {  
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
      }
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
