<template>
  <div>
      
    <div :class="open?'overlay-slide-down' :'overlay-slide-up'" class="overlay-navigation">
      <nav  role="navigation">
        <ul>
          <li :class="open?'slide-in-nav-item' :'slide-in-nav-item-reverse'" >
            <a href="#" data-content="The beginning">Home</a>
          </li>
          <li :class="open?'slide-in-nav-item-delay-1' :'slide-in-nav-item-delay-1-reverse'" >
            <a href="#" data-content="Curious?">About</a>
          </li>
          <li :class="open?'slide-in-nav-item-delay-2' :'slide-in-nav-item-delay-2-reverse'" >
            <a href="#" data-content="I got game">Skills</a>
          </li>
          <li :class="open?'slide-in-nav-item-delay-3' :'slide-in-nav-item-delay-3-reverse'" >
            <a href="#" data-content="Only the finest">Works</a>
          </li>
          <li :class="open?'slide-in-nav-item-delay-4' :'slide-in-nav-item-delay-4-reverse'" >
            <a href="#" data-content="Don't hesitate">Contact</a>
          </li>
        </ul>
      </nav>
    </div>

    <section >
      <div @click="activate"  class="open-overlay">
        <span :class="open ? 'animate-top-bar': 'animate-out-top-bar'" class="bar-top"></span>
        <span :class="open ? 'animate-middle-bar': 'animate-out-middle-bar'" class="bar-middle"></span>
        <span :class="open ? 'animate-bottom-bar': 'animate-out-bottom-bar'" class="bar-bottom"></span>
      </div>
    </section>
  </div>
</template>

<script>
export default {

data() {
    return {
      open: false,
    };
  },
  mounted(){
  // LandPg.run();
  },
  methods: {
    activate() {
      this.open = !this.open;
    }
  },
};
</script>
<style scoped>
@import "@/assets/styles/Nav.css";
</style>