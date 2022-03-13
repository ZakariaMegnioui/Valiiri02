<template>
  
    <!-- About section start -->
<section class="about-section ">
      <h1>Aboute</h1>
  <div class="container">

    <!-- Social Icons End -->

    <!-- About tabs start -->
    <div class="row">
      <div class="about-tabs">
        <span class="tab-item " :class="index===0 ? 'active  outer-shadow':'' " @click="index=0" data-target=".skills">Skills</span>
        <span class="tab-item" @click="index=1" data-target=".experience" :class="index===1 ? 'active  outer-shadow':'' ">Experience</span>
        <span class="tab-item" :class="index===2 ? 'active  outer-shadow':'' " @click="index=2" data-target=".education">Education</span>
      </div>
    </div>
    <!-- About tabs end -->
    <!-- Skill Start -->
    <div class="row">
      <div class="skills tab-content " :class="index===0 ? 'active ':'' ">
        <div class="row">
          <!-- Skill Items Start -->
          <div class="skill-item">
            <p>html</p>
            <div class="progress inner-shadow">
              <div class="progress-bar" style="width: calc(90% - 14px);">
                <span>90%</span>
              </div>
            </div>
          </div>
          <!-- Skill Items End -->
          <!-- Skill Items Start -->
          <div class="skill-item">
            <p>css3</p>
            <div class="progress inner-shadow">
              <div class="progress-bar" style="width: calc(80% - 14px);">
                <span>80%</span>
              </div>
            </div>
          </div>
          <!-- Skill Items End -->
          <!-- Skill Items Start -->
          <div class="skill-item">
            <p>javaScript</p>
            <div class="progress inner-shadow">
              <div class="progress-bar" style="width: calc(60% - 14px);">
                <span>60%</span>
              </div>
            </div>
          </div>
          <!-- Skill Items End -->
          <!-- Skill Items Start -->
          <div class="skill-item">
            <p>bootstrap</p>
            <div class="progress inner-shadow">
              <div class="progress-bar" style="width: calc(50% - 14px);">
                <span>50%</span>
              </div>
            </div>
          </div>
          <!-- Skill Items End -->
          <!-- Skill Items Start -->
          <div class="skill-item">
            <p>git and Github</p>
            <div class="progress inner-shadow">
              <div class="progress-bar" style="width: calc(80% - 14px);">
                <span>80%</span>
              </div>
            </div>
          </div>
          <!-- Skill Items End -->
          <!-- Skill Items Start -->
          <div class="skill-item">
            <p>react</p>
            <div class="progress inner-shadow">
              <div class="progress-bar" style="width: calc(20% - 14px);">
                <span>20%</span>
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
      <div class="experience tab-content"  :class="index===1 ? 'active ':'' " >
        <div class="row">
          <div class="timeline">
            <div class="row">
              <!--Timeline  Items Start-->
              <div class="timeline-item">
                <div class="timeline-item-inner outer-shadow">
                  <i class="fas fa-briefcase icon"></i>
                  <span>sep 18, 2018 - Present</span>
                  <h3>full Stack Web Developer </h3>
                  <h4>name company, Republica Dominicana</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem similique
                    quod ut illum commodi nisi nemo fuga placeat iure.</p>
                </div>
              </div>
              <!--Timeline  Items End-->
              <!--Timeline  Items Start-->
              <div class="timeline-item">
                <div class="timeline-item-inner outer-shadow">
                  <i class="fas fa-briefcase icon"></i>
                  <span>sep 2016 - oct 2017 </span>
                  <h3>web designer</h3>
                  <h4>name company, Republica Dominicana</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem similique
                    quod ut illum commodi nisi nemo fuga placeat iure.</p>
                </div>
              </div>
              <!--Timeline  Items End-->
              <!--Timeline  Items Start-->
              <div class="timeline-item">
                <div class="timeline-item-inner outer-shadow">
                  <i class="fas fa-briefcase icon"></i>
                  <span>sep 2014 - oct 2016</span>
                  <h3>web designer UX</h3>
                  <h4>name company, Republica Dominicana</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem similique
                    quod ut illum commodi nisi nemo fuga placeat iure.</p>
                </div>
              </div>
              <!--Timeline  Items End-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Experience End-->

    <!-- Education Start-->
    <div class="row">
      <div class="education tab-content"  :class="index===2 ? 'active ':'' " >
        <div class="row">
          <div class="timeline">
            <div class="row">
              <!--Timeline  Items Start-->
              <div class="timeline-item">
                <div class="timeline-item-inner outer-shadow">
                  <i class="fas fa-graduation-cap icon"></i>
                  <span> 18, 2018 - Present</span>
                  <h3>university</h3>
                  <h4>intec university, Republica Dominicana</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem similique
                    quod ut illum commodi nisi nemo fuga placeat iure.</p>
                </div>
              </div>
              <!--Timeline  Items End-->
              <!--Timeline  Items Start-->
              <div class="timeline-item">
                <div class="timeline-item-inner outer-shadow">
                  <i class="fas fa-graduation-cap icon"></i>
                  <span>sep 2016 - oct 2017 </span>
                  <h3>high scholl and technical education</h3>
                  <h4>polytechnic Padre Fantino, Republica Dominicana(Sanchez Ramirez)</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem similique
                    quod ut illum commodi nisi nemo fuga placeat iure.</p>
                </div>
              </div>
              <!--Timeline  Items End-->
              <!--Timeline  Items Start-->
              <div class="timeline-item">
                <div class="timeline-item-inner outer-shadow">
                  <i class="fas fa-graduation-cap icon"></i>
                  <span>sep 2014 - oct 2016</span>
                  <h3>education initial</h3>
                  <h4>Domitila Grullon, Republica Dominicana(La Vega)</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem similique
                    quod ut illum commodi nisi nemo fuga placeat iure.</p>
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
export default {
  name:'about',
  data(){
    return{
     index:0,
    }
  },
 mounted(){

 }
}
</script>

<style>
@import "@/assets/styles/About.css";
</style>