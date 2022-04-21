<template>
  <div class="contact_main overflow-hidden">
    <div class="header h-36 w-3/4 md:w-1/2 m-auto">
      <h1 class="text-2xl lg:text-4xl text-white mb-6">Get In Touch</h1>
      <p
        class="lg:text-base text-xs"
        style="color:#eff0f4"
      >Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
    </div>
    <Contact />
    <a href="https://github.com/ZakariaMegnioui/Valiiri_v2" target="_blank">
      <h2 class="mb-6 lg:text-base md:text-sm text-xs">
        Designed & Built by Zakaria Megnioui
        <br />
        <i class="fa fa-github text-xl"></i>
      </h2>
    </a>
  </div>
</template>

<script>
import Contact from "@/components/contact.vue";
import { gsap} from "gsap";
export default {
  name: "contactview",
  components: {
    Contact,
  },
    mounted() {
      gsap
        .timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: ".contact_main",
            start: "top center",
            // end: "center top",
            scrub: false,
            repeat: -1,
            toggleActions: "restart none none reset",
          },
        })
         .from(".contact_main .header h1", {
          x: -1000,
         
          duration: 0.5,
          delay: 0,
          ease: "back",
        })
         .from(".contact_main .header p", {
          x: 1000,
        
          duration: 0.5,
          delay: 0,
          ease: "back",
        })
        .from(".contact", {
          scale: 0,
          rotation: 360,
          duration: 2,
          delay: 0,
          ease: "back",
        });
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
.contact_main h2 {
  color: #b3b3b3;
  font-family: "Roboto Mono", monospace;
  cursor: pointer;
}
.contact_main h2:hover {
  color: #139487;
}
</style>