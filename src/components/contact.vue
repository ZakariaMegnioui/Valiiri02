<template>
  <div class="contact-area " :class="open ? 'active ': ''" >
  <div class="contact md:w-3/6 w-5/6 lg:w-2/6" >
    <main>
      <section class="dark:bg-gray-800  ">
        <div class="content flex md:flex-row flex-col text-center md:text-left  ">
          <img src="@/assets/img/demo.png" class="rounded-full w-20 h-20  " alt="Profile Image">

          <aside class="w-5/6 md:w-3/6">
            <h1>Zakaria Megnioui</h1>
            <p>Hi, I'm Zakaria Megniouia a Software Developer.</p>
          </aside>
          
          <button @click="open=!open" :class="open ? 'active' : ''">
            <span>Say Hello</span>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path> </g> </svg>
          </button>
        </div>

        <div :class="open ? 'active' : ''" class="title dark:bg-gray-900"><p>Say Hello</p></div>
      </section>

      
    </main>

    <nav :class="open ? 'active' : ''" class="">
      <a class="gmail" onclick="location.href='mailto:fromvaliiri@gmail.com';">
        <div :class="iconClass" class="icon">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z" fill-rule="evenodd"/></svg>
        </div>

        <div class="content">
          <h1>Email</h1>
          <span class="absolute left-12 md:left-0 md:relative">fromvaliiri@gmail.com</span>
        </div>
        
        <svg  class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
      </a>

      <a href="https://www.instagram.com/zakaria.megnioui/" target="_blank" class="facebook">
        <div :class="iconClass"  class="icon  ">
            <i class="fa fa-instagram text-2xl md:text-4xl m mt-1  text-white w-full h-full" ></i>
        </div>

        <div class="content">
          <h1>instagram</h1>
          <span>@zakaria.megnioui</span>
        </div>
        
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
      </a>

      <a href="https://www.linkedin.com/in/valiiri/" target="_blank" class="twitter">
        <div :class="iconClass"  class="icon">
            <i class="fa fa-linkedin  text-2xl md:text-4xl  m mt-1  text-white w-full h-full" ></i>

        </div>

        <div class="content">
          <h1>linkedin</h1>
          <span>@ZAKARIA MEGNIOUI</span>
        </div>
        
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
      </a>
    </nav>
  </div>
</div>
</template>

<script>
export default {
  name: 'contact',

    data(){
        return{
            open:false,
            iconClass:'md:h-12 md:w-12 h-10 w-10'
        }
    },
  methods:{
    //  contect(){
    //      this.open=!this.open;
    //  }
  }
};
</script>

<style>
@import "@/assets/styles/Contact.scss";
.add{
    min-height: 100vh;
     
}

</style>