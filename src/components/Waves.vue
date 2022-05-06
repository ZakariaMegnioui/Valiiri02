<template>
  <div class="main flex flex-col" :class="setBackground.background">
    <!--Hey! This is the original version
    of Simple CSS Waves-->

    <div class="header w-full flex flex-col lg:flex-row" style="height:80vh">
      <div class="share-buttons fixed top-36 left-3 lg:left-6">
        <div class="share-button">
          <div class="share-button-secondary">
            <div class="share-button-secondary-content">Zakaria_Megnioui</div>
          </div>
          <a href="https://www.linkedin.com/in/valiiri/" target="_blank">
            <div class="share-button-primary">
              <i class="share-button-icon fa fa-linkedin"></i>
            </div>
          </a>
        </div>

        <div class="share-button">
          <div class="share-button-secondary">
            <div class="share-button-secondary-content">@ZakariaMegnioui</div>
          </div>
          <a href="https://www.facebook.com/profile.php?id=100078127189264" target="_blank">
            <div class="share-button-primary">
              <i class="share-button-icon fa fa-facebook"></i>
            </div>
          </a>
        </div>

        <div class="share-button">
          <div class="share-button-secondary">
            <div class="share-button-secondary-content">@zakaria.menioui</div>
          </div>
          <a href="https://www.instagram.com/zakaria.megnioui/" target="_blank">
            <div class="share-button-primary">
              <i class="share-button-icon fa fa-instagram"></i>
            </div>
          </a>
        </div>

        <div class="share-button">
          <div class="share-button-secondary">
            <div class="share-button-secondary-content">@ZakariaMegnioui</div>
          </div>
          <a href="https://github.com/ZakariaMegnioui" target="_blank">
            <div class="share-button-primary">
              <i class="share-button-icon fa fa-github"></i>
            </div>
          </a>
        </div>

        <div class="share-button">
          <div class="share-button-secondary">
            <div class="share-button-secondary-content">fromvaliiri@gmail.com</div>
          </div>
          <div class="share-button-primary">
            <i class="share-button-icon fa fa-google-plus"></i>
          </div>
        </div>
      </div>
      <div class="text-left lg:h-full h-2/3 lg:w-2/3 w-full ml-8 flex justify-center flex-col">
        <h1
          class="title z-20 name w-4/5 text-2xl md:text-5xl"
          :class="setBackground.primary"
          data-text="Zakaria Megnioui"
        >
          <p class="font-bold mb-2 text-xs md:text-sm md:mb-5" style="color:#139487 ">Hi, my name is</p>Zakaria Megnioui
        </h1>

        <h1
          class="title z-20 domain text-2xl md:text-5xl w-4/5 mt-2 md:mt-4"
          :class="setBackground.sacondary"
        >
          I build things for the web.
          <p
            class="font-bold text-xs md:text-sm mt-2 md:mt-4"
            :class="setBackground.sacondary"
          >I am a self-taught front and backend developer located in Morocco. I like making fun ,interactive things with code. Well-organized person, problem solver, independent employee with high attention to detail..</p>
        </h1>

        <div id="container " class="button z-20 w-4/5 mt-5 lg:mt-11">
          <a href="https://flowcv.me/zakaria-megnioui" target="_blanck">
            <button class="open-button w-36 hidden lg:block md:w-48">
              <span class="circle w-full h-8 md:w-12 md:h-12" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>

              <span class="button-text tracking-widest">Resume</span>
            </button>
            <button
              style="background: #139487;"
              class="open-button px-6 py-1 rounded-md text-white block lg:hidden"
            >Resume</button>
          </a>
        </div>
      </div>
      <div class="lg:h-full h-1/3 w-full lg:w-1/3 flex justify-center">
        <div
          class="card-avatar overflow-hidden w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 flex bg-transparent rounded-full hover:-translate-y-3 duration-500 ease-in-out hover:animate-none animate-pulse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 absolute cursor-pointer animate-pulse"
            style="color:rgba(113, 235, 191, 0.8)"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <img
            id="myAvatar"
            class="w-full h-full transition-all duration-500 ease-in-out"
            :src="require(`@/assets/img/avatar${imgIn}.png`)"
            alt
          />
        </div>
      </div>
    </div>

    <div class="bottom w-full hidden md:block" style="height :20vh;">
      <svg
        class="waves"
        :class="setBackground.background"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#efefef" />
        </g>
      </svg>
    </div>
    <!--Header ends-->

    <!--Content starts-->
    <div class="content mouse flex absolute -bottom-10 lg:bottom-5 z-20">
      <div class="scroll-down2"></div>
    </div>
    <!--Content ends-->
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import { gsap } from "gsap";

export default {
  name: "waves",

  components: {
    Logo,
  },
  data() {
    return {
      imgIn: 1,
      move: false,
    };
  },
  computed: {
    setBackground() {
      return this.$store.state.theam;
    },
  },
  mounted() {
    this.change();
    this.textAnimation(".name", -2000, 3, 6.5);
    this.textAnimation(".domain", 11000, 3, 6.8);
    this.buttonAnimation(".button", 1000, 3, 7.6);
    this.textAnimation(".share-button", -2000, 2, 7.8);
    this.textAnimation(".card-avatar", 1000, 5, 5);
    this.buttonAnimation(".mouse", -2000, 2, 5);
  },
  methods: {
    textAnimation(clas, x, duration, delay) {
      gsap.fromTo(
        clas,
        {
          x: x,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: duration,
          ease: "power1.out",
          delay: delay,
        }
      );
    },
    buttonAnimation(clas, y, duration, delay) {
      gsap.fromTo(
        clas,
        {
          y: y,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: duration,
          ease: "power1.out",
          delay: delay,
        }
      );
    },

    change() {
      const items = document.getElementById("myAvatar");

      this.move = !this.move;
      items.classList.add("slide");
      items.classList.remove("slideIn");
      setTimeout(() => {
        items.classList.add("slideIn");
        this.imgIn++;
        if (this.imgIn == 17) {
          this.imgIn = 0;
        }
      }, 300);
      setTimeout(this.change, 9000);
    },
  },
};
</script>

<style scoped>
@import "@/assets/styles/Waves.css";

.home .slide {
  animation: Out 2s forwards;
}
.home .slideIn {
  animation: In 1.5s forwards;
}
@keyframes In {
  from {
    transform: translateX(-1000px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes Out {
  0% {
    transform: translateX(0px);
  }

  100% {
    opacity: 0;

    transform: translateX(2000px);
  }
}
.card-avatar {
  box-shadow: 0 35px 65px 0 rgba(86, 184, 149, 0.42),
    inset 0 -10px 15px 0 rgba(113, 235, 191, 0.8);
}
</style>


