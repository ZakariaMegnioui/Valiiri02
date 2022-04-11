<template>
  <div class="contact_main overflow-hidden ">
    <div class="h-36   w-1/2 m-auto">
      <h1 class="text-4xl text-white mb-6">Get In Touch</h1>
      <p class="text-base" style="color:#eff0f4"> Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
    </div>
    <Contact />
    <a href="https://github.com/ZakariaMegnioui/Valiiri_v2" target="_blank">
    <h2 class="mb-6" > Designed & Built by Zakaria Megnioui <br>  <i class="fa fa-github text-xl"></i></h2>
    </a>
  </div>
</template>

<script>
import Contact from "@/components/contact.vue";

export default {
  components: {
    Contact,
  },
};
</script>

<style scoped>
.contact_main {
  width: 100%;
  min-height: 100vh;
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
}
.contact_main h2{
    color:#b3b3b3; 
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
}
.contact_main h2:hover{
    color: #139487;
}
</style>