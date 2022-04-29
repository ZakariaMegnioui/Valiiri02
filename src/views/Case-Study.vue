<template>
  <div class="project" :class="setBackground">
    <div class="flex lg:text-9xl md:text-7xl text-6xl h-28 justify-between w-full opacity-20">
      <h1 class="w-1/2 text-left text-gray-500">Work</h1>
      <h1 class="w-1/2 text-right" style="color:#139487">03</h1>
    </div>
    <div class="card w-2/5 relative md:m-14  m-16" v-for="(project , i) in projects" :ref="'card'+i" :key="i">
      <div class="imgBox">
        <img :src="require(`@/assets/img/${project.main}`)" alt />
        <div class="video">
          <video autoplay muted loop id="bg">
            <source :src="require(`@/assets/videos/${project.video}`)" type="video/mp4" />
          </video>
        </div>
      </div>
      <div class="details">
        <div class="content w-full md:w-1/2">
          <h2 class="md:text-base text-sm lg:text-lg">
            {{project.title}}
            <br />
            <span class="md:text-sm text-xs lg:text-base">{{project.domain}}</span>
          </h2>
          <ul class="md:flex text-xs justify-between w-full hidden">
            <li v-for="( tech , i) in project.tech" :key="i">{{tech}}</li>
          </ul>

          <div class="social-icons">
            <a href="#">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a :href="project.link" target="_blank">
              <i class aria-hidden="true">
                <img style="width:1.5vw;" :src="link" alt />
              </i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- component -->
    <div class=" bottomCards mx-auto container md:px-24 px-7 lg:py-20 lg:px-36">
      <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
      <div class="text-white text-xl lg:text-2xl">
        <h1 class="mb-20">Other Noteworthy Projects</h1>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <div class="rounded" v-for="( row , i ) in others" :key="i">
          <div
            v-for="(card , i) in row"
            :ref="'smallCard'+i"
            :key="i"
            class="w-full hover:scale-105 h-80 flex drop-shadow-xl flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4 transition-all duration-100 ease-in-out"
          >
            <div>
              <h3
                class="text-gray-800 dark:text-gray-100 leading-7 px-3 text-center font-semibold w-full"
              >{{card.title}}</h3>
            </div>
            <div class="w-full h-36 flex justify-center">
              <img :src="card.icon" />
            </div>
            <div>
              <div class="mb-3 flex items-center">
                <div
                  class="border border-gray-300 dark:border-gray-700 rounded-full px-3 py-1 dark:text-gray-400 text-gray-600 text-xs flex items-center"
                  aria-label="due on"
                  role="contentinfo"
                >
                  <p class="ml-2 dark:text-gray-400">{{card.subtitle}}</p>
                </div>
                <a :href="card.url" class="w-8 h-8 mr-1" target="_blank">
                  <button
                    class="h-full w-full rounded-full dark:text-gray-800 bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    aria-label="edit note"
                    role="button"
                  >
                    <i class="fa fa-github duration-500 ease-in-out text-2xl text-white" id></i>
                  </button>
                </a>
                <a :href="card.iconLink" class="w-6 h-6" target="_blank" v-show="card.iconLink">
                  <button
                    class="w-full h-full rounded-full dark:text-gray-800 bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    aria-label="edit note"
                    role="button"
                  >
                    <img class="h-full w-full" :src="link" alt />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        @click="showMore"
        class="transition-all p-2 pl-5 pr-5 m-6 duration-700 transform hover:bg-emerald-700 text-base rounded-lg focus:border-4"
        style="border:2px solid #00A99D; color:#00A99D"
      >{{show?'Show Less':'Show More' }}</button>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "casestudy",
  data() {
    return {
      link: require("@/assets/icons/link.svg"),
      show: false,
      projects: [
        {
          title: "Royimmo",
          domain: "immobilier",
          main: "PR1.jpg",
          video: "roya.mp4",
          link: "https://royaimmo.ma/",
          tech: ["Laravel", "Vue JS", "tailwind", "element ui", "mysql"],
        },
        {
          title: "Ajicod",
          domain: "Development web",
          main: "PR2.jpg",
          video: "ajicod.mp4",
          link: "https://ajicod.com/en",
          tech: ["Laravel", "bootstrap", "mysql"],
        },
        {
          title: "AWID Livraison",
          domain: "Delivery",
          main: "PR3.jpg",
          video: "awid.mp4",
          link: "https://awidlivraison.com/",
          tech: ["Laravel", "Vue JS", "tailwind", "element ui", "mysql"],
        },
      ],
      others: [
        [
          {
            title:
              "A simple page web app for weather bilt with react js , openweathermap ",
            iconLink: "https://weatherr-app-react-js.netlify.app",
            icon: require("@/assets/icons/cloud.svg"),
            subtitle: "React js 2020",
            url: "https://github.com/ZakariaMegnioui/Weather-Web-App",
          },
          {
            title: "Netflix Landing reaction with tailwind ",
            iconLink: "https://netflex-landing-page.netlify.app",
            icon: require("@/assets/icons/netflix.svg"),
            subtitle: "Tailwind 2022",
            url: "https://github.com/ZakariaMegnioui/Netflix-landing-page",
          },
        ],
        [
          {
            title: "Building a backend app with spring boot , jwt , mvs , jee ",
            iconLink: "",
            icon: require("@/assets/icons/spring.svg"),
            subtitle: "spring boot 2021",
            url: "https://github.com/ZakariaMegnioui/spring-security-JWT",
          },
          {
            title: "Online Courses Dashboard with tailwindCSS",
            iconLink: "https://dashboard-tailwind3css.netlify.app",
            icon: require("@/assets/icons/dashboard.svg"),
            subtitle: "Tailwind 2022",
            url: "https://github.com/ZakariaMegnioui/tailwind-Dashboard-online-courses",
          },
        ],
        [
          {
            title:
              "Building a management system for livestock breeding and calculating productivity and genetic values  ",
            iconLink: "",
            icon: require("@/assets/icons/cow.svg"),
            subtitle: "Laravel Vue js ",
            url: "https://github.com/ZakariaMegnioui/Cow-management-System-",
          },
          {
            title: "clone a youtube page just using tailwind css",
            iconLink: "https://youtub6tailwind.netlify.app",
            icon: require("@/assets/icons/youtube.svg"),
            subtitle: "tailwind CSS 2021",
            url: "https://github.com/ZakariaMegnioui/youtube-clone",
          },
        ],
      ],
      more: [
        {
          title: " simple todo list with react js ",
          iconLink: "https://toodo-lisyt.netlify.app",
          icon: require("@/assets/icons/todo.svg"),
          subtitle: "React js 2020",
          url: "https://github.com/ZakariaMegnioui/todo-list-",
        },

        {
          title: "Building a Movies website with react js , MDB",
          iconLink: "https://movie-db-react-js.netlify.app/",
          icon: require("@/assets/icons/movie.svg"),
          subtitle: "React Js 2020",
          url: "https://github.com/ZakariaMegnioui/Movie-Time",
        },
        {
          title: "Crud php app , php , mvc , mysql",
          iconLink: "",
          icon: require("@/assets/icons/crud.svg"),
          subtitle: "php 2022",
          url: "https://github.com/ZakariaMegnioui/pdomvc",
        },
      ],
    };
  },
   computed: {
    setBackground() {

      return this.$store.state.background;
    },
   },
  mounted() {
    this.animate(this.$refs.card0, 0.1);
    this.animate(this.$refs.card1 ,0.1);
    this.animate(this.$refs.card2 ,0.1);
    this.animate2(".bottomCards" ,  2);
    // this.animate2(this.$refs.smallCard1 , 2.4);
    // this.animate2(this.$refs.smallCard2 , 3);
  
  },
  methods: {
    animate(element , duration) {
      gsap
        .timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            // end: "center top",
            scrub: false,
            repeat: -1,
            toggleActions: "restart none none reset",
          },
        })
        .from(element, {
          opacity: 0,
          duration: duration ,
          delay: 0,
          ease: "power1.out",
        });
    },
      animate2(element , duration) {
      gsap
        .timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            // end: "center top",
            scrub: false,
            repeat: -1,
            toggleActions: "restart none none reset",
          },
        })
        .from(element, {
         scale: 0,
          duration: duration ,
          delay: 0,
          ease: "back",
        });
    },
    showMore() {
      this.show = !this.show;
      if (this.show) {
        this.others[0].push(this.more[0]);
        this.others[1].push(this.more[1]);
        this.others[2].push(this.more[2]);
      } else {
        this.others[0].pop();
        this.others[1].pop();
        this.others[2].pop();
      }
    },
  },
};
</script>

<style>
@import "@/assets/styles/Case-Study.scss";
</style>