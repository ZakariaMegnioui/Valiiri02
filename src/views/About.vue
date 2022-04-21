<template>
  <!-- About section start -->
  <section class="about-section" style=" background-color: #efefef;">
    <div class="big-title flex justify-between lg:text-9xl md:text-7xl text-6xl h-28 w-full">
      <h1 class="w-1/2 text-left">Aboute</h1>
      <h1 class="w-1/2 text-right" style="color:#139487">02</h1>
    </div>
    <div class="container">
      <!-- Social Icons End -->

      <!-- About tabs start -->
      <div class="row">
        <div class="about-tabs">
          <span
            class="tab-item skills"
            :class="index===0 ? 'active  outer-shadow':'' "
            @click="index=0"
            data-target=".skills"
          >Skills</span>
          <span
            class="tab-item exper"
            @click="index=1"
            data-target=".experience"
            :class="index===1 ? 'active  outer-shadow':'' "
          >Experience</span>
          <span
            class="tab-item educ"
            :class="index===2 ? 'active  outer-shadow':'' "
            @click="index=2"
            data-target=".education"
          >Education</span>
        </div>
      </div>
      <!-- About tabs end -->
      <!-- Skill Start -->
      <div class="row">
        <div class="skills tab-content" :class="index===0 ? 'active ':'' ">
          <div class="row">
            <!-- Skill Items Start -->
            <div class="skill-item">
              <p>Vuejs</p>
              <div class="progress inner-shadow">
                <div class="progress-bar" style="width: calc(60% - 14px);">
                  <span class>60%</span>
                </div>
              </div>
            </div>
            <!-- Skill Items End -->
            <!-- Skill Items Start -->
            <div class="skill-item">
              <p>Spring Boot</p>
              <div class="progress inner-shadow">
                <div class="progress-bar" style="width: calc(35% - 14px);">
                  <span>35%</span>
                </div>
              </div>
            </div>
            <!-- Skill Items End -->
            <!-- Skill Items Start -->
            <div class="skill-item">
              <p>React</p>
              <div class="progress inner-shadow">
                <div class="progress-bar" style="width: calc(40% - 14px);">
                  <span>40%</span>
                </div>
              </div>
            </div>
            <!-- Skill Items End -->
            <!-- Skill Items Start -->
            <div class="skill-item">
              <p>Laravel</p>
              <div class="progress inner-shadow">
                <div class="progress-bar" style="width: calc(50% - 14px);">
                  <span>50%</span>
                </div>
              </div>
            </div>
            <!-- Skill Items End -->
            <!-- Skill Items Start -->
            <div class="skill-item">
              <p>TailwindCss</p>
              <div class="progress inner-shadow">
                <div class="progress-bar" style="width: calc(80% - 14px);">
                  <span>80%</span>
                </div>
              </div>
            </div>
            <!-- Skill Items End -->
            <!-- Skill Items Start -->
            <div class="skill-item">
              <p>JavaScript</p>
              <div class="progress inner-shadow">
                <div class="progress-bar" style="width: calc(70% - 14px);">
                  <span>70%</span>
                </div>
              </div>
            </div>
            <!-- Skill Items End -->
          </div>
        </div>
      </div>
      <!-- Skill end -->
      <!-- Experience Start-->
      <div class="row">
        <div class="experience tab-content" :class="index===1 ? 'active ':'' ">
          <div class="row">
            <div class="timeline">
              <div class="row">
                <div class="small_one w-5/6 m-auto block md:hidden">
                  <div class="timeline-item-inner outer-shadow">
                    <i class="fas fa-briefcase icon"></i>
                    <span>sep 18, 2020 - Present</span>
                    <h3>front-end web Developer</h3>
                    <h4>freelancer </h4>
                    <p>
                     I've done some great things with amazing people
                    </p>
                  </div>
                </div>
                 <div class="small_one my-8 w-5/6 m-auto block md:hidden">
                  <div class="timeline-item-inner outer-shadow">
                    <i class="fas fa-briefcase icon"></i>
                     <span> oct 2021</span>
                    <h3>full stack</h3>
                    <h4>Ajicod , Web Development , Digital Marketing</h4>
                    <p>
                     It was a great opportunity to work on big projects with a professional and beautiful team
                    </p>
                  </div>
                </div>
                <!--Timeline  Items Start-->
                <div class="timeline-item hidden md:block">
                  <div class="timeline-item-inner outer-shadow">
                    <i class="fas fa-briefcase icon"></i>
                     <span>sep 18, 2020 - Present</span>
                    <h3>front-end web Developer</h3>
                    <h4>freelancer </h4>
                    <p>
                     I've done some great things with amazing people
                    </p>
                  </div>
                </div>

                <!--Timeline  Items End-->
                <!--Timeline  Items Start-->
                <div class="timeline-item hidden md:block">
                  <div class="timeline-item-inner outer-shadow">
                    <i class="fas fa-briefcase icon"></i>
                    <span> oct 2021</span>
                    <h3>full stack</h3>
                    <h4>Ajicod , Web Development , Digital Marketing</h4>
                    <p>
                     It was a great opportunity to work on big projects with a professional and beautiful team
                    </p>
                  </div>
                </div>
                <!--Timeline  Items End-->
                <!--Timeline  Items Start-->
                
                <!--Timeline  Items End-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Experience End-->

      <!-- Education Start-->
      <div class="row">
        <div class="education tab-content" :class="index===2 ? 'active ':'' ">
          <div class="row">
            <div class="timeline">
              <div class="row">
                <!--Timeline  Items Start-->
                <div class="timeline-item hidden md:block">
                  <div class="timeline-item-inner outer-shadow">
                    <i class="fas fa-graduation-cap icon"></i>
                    <span>18, 2020 - Present</span>
                    <h3>Stack Over Flow</h3>
                   
                   
                  </div>
                </div>
                <!--Timeline  Items End-->
                <!--Timeline  Items Start-->
                <div class="timeline-item hidden md:block">
                  <div class="timeline-item-inner outer-shadow">
                    <i class="fas fa-graduation-cap icon"></i>
                    <span>20 - oct 2021</span>
                    <h3>Youtub</h3>
                   
                  </div>
                </div>

                <!--Timeline  Items End-->
                <!--Timeline  Items Start-->
                <div class="timeline-item hidden md:block">
                  <div class="timeline-item-inner outer-shadow">
                    <i class="fas fa-graduation-cap icon"></i>
                    <span> oct 2022</span>
                    <h3>Laracast</h3>
                    
                    
                  </div>
                </div>
                <div class="small_one block md:hidden  w-5/6 m-auto">
                  <div class="timeline-item-inner outer-shadow">
                    <i class="fas fa-graduation-cap icon"></i>
                    <span>18, 2020 - Present</span>
                    <h3>Stack Over Flow</h3>
                   
                  </div>
                </div>
                <div class="small_one block my-9 md:hidden w-5/6 m-auto">
                  <div class="timeline-item-inner outer-shadow">
                    <i class="fas fa-graduation-cap icon"></i>
                     <span>20 - oct 2021</span>
                    <h3>Youtub</h3>
                   
                  </div>
                </div>
                <div class="small_one block md:hidden w-5/6 m-auto">
                  <div class="timeline-item-inner outer-shadow">
                    <i class="fas fa-graduation-cap icon"></i>
                     <span> oct 2022</span>
                    <h3>Laracast</h3>
                   
                  </div>
                </div>
                <!--Timeline  Items End-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Education End-->
    </div>
  </section>
  <!--#About Section End -->
  <!-- #Main js -->
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "about",
  data() {
    return {
      index: 0,
    };
  },
  mounted() {
    let tl = gsap
      .timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".about-section ",
          start: "top bottom",
          end: "center top",
          scrub: false,
          repeat: -1,
          toggleActions: "restart none none reset",
        },
      })
      .from(".tab-item", {
        opacity: 0,

        duration: 1,
        delay: 0,
        ease: "power1.out",
      })
      .from(".tab-content", {
        scale: 0,

        duration: 3,
        delay: 0,
        ease: "elastic",
      });
  },
};
</script>

<style>
@import "@/assets/styles/About.css";

@media (max-width: 400px) {
  .about-section h1 {
    font-size: 2rem;
  }
}
</style>