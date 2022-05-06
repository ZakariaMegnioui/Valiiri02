<template>
  <div class="work mt-10">
    <div class="container" >
      <div class="box flex justify-center" :class='setBackground.background'>
        <h1>“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'qoutes'
  ,
  
  computed: {
    setBackground() {
      return this.$store.state.theam;
    },
  },
};
</script>

<style>
@import "@/assets/styles/Qoutes.scss";
</style>