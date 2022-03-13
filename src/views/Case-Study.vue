<template>
  <div class="case">
      <div class="hero-center-section">
		<div class="left-text">nature</div>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-8">
					<div class="img-wrap">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/nature.jpg" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="hero-center-section">
		<div class="left-text">travel</div>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-8">
					<div class="img-wrap">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/travel.jpg" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="hero-center-section">
		<div class="left-text">fashion</div>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-8">
					<div class="img-wrap">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/fashion.jpg" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="hero-center-section">
		<div class="left-text">animals</div>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-8">
					<div class="img-wrap">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/animals.jpg" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="hero-center-section">
		<div class="left-text">business</div>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-8">
					<div class="img-wrap">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/business.jpg" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="hero-center-section">
		<div class="left-text">art</div>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-8">
					<div class="img-wrap">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/art.jpg" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
		
		
	<div class="section padding-top-bottom over-hide z-bigger">
		<ul class="slide-buttons">
			<li class="">
				<a href="#0" class="hover-target" data-hover="nature">nature</a>
			</li>
			<li class="">
				<a href="#0" class="hover-target"  data-hover="travel">travel</a>
			</li>
			<li class="">
				<a href="#0" class="hover-target" data-hover="fashion">fashion</a>
			</li>
			<li class="">
				<a href="#0" class="hover-target" data-hover="animals">animals</a>
			</li>
			<li class="">
				<a href="#0" class="hover-target" data-hover="business">business</a>
			</li>
			<li class="">
				<a href="#0" class="hover-target" data-hover="art">art</a>
			</li>
		</ul>
	</div>
		
	<!-- Page cursor
	================================================== -->
	
	<div class='cursor' id="cursor"></div>
	<div class='cursor2' id="cursor2"></div>
	<div class='cursor3' id="cursor3"></div> 
		
	<!-- Link to page
	================================================== -->

	<a href="https://front.codes" class="link-to-page hover-target" target="_blank"><img src="https://assets.codepen.io/1462889/fcy.png" alt=""></a>
			
	<!-- Dark/light switch
	================================================== -->
	
	<div class="bottom-right">								
		<div class="switch">
			<div class="circle hover-target"></div>
		</div>									
	</div>
  </div>
</template>

<script>
export default {
 mounted(){
     

/* Please ❤ this if you like it! */



(function($) { "use strict";
	
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }


	//Switch light/dark
	
	$(".switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$(".switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$(".switch").addClass("switched");
		}
	});
	
	$(document).ready(function() {	
		
		/* Hero Case study images */			
		
		$('.slide-buttons li:nth-child(1)').on('mouseenter', function() {
			$('.slide-buttons li.active').removeClass('active');
			$('.hero-center-section.show').removeClass("show");
			$('.hero-center-section:nth-child(1)').addClass("show");
			$('.slide-buttons li:nth-child(1)').addClass('active');
		})
		$('.slide-buttons li:nth-child(2)').on('mouseenter', function() {
			$('.slide-buttons li.active').removeClass('active');
			$('.hero-center-section.show').removeClass("show");
			$('.hero-center-section:nth-child(2)').addClass("show");
			$('.slide-buttons li:nth-child(2)').addClass('active');
		})
		$('.slide-buttons li:nth-child(3)').on('mouseenter', function() {
			$('.slide-buttons li.active').removeClass('active');
			$('.hero-center-section.show').removeClass("show");
			$('.hero-center-section:nth-child(3)').addClass("show");
			$('.slide-buttons li:nth-child(3)').addClass('active');
		})
		$('.slide-buttons li:nth-child(4)').on('mouseenter', function() {
			$('.slide-buttons li.active').removeClass('active');
			$('.hero-center-section.show').removeClass("show");
			$('.hero-center-section:nth-child(4)').addClass("show");
			$('.slide-buttons li:nth-child(4)').addClass('active');
		})
		$('.slide-buttons li:nth-child(5)').on('mouseenter', function() {
			$('.slide-buttons li.active').removeClass('active');
			$('.hero-center-section.show').removeClass("show");
			$('.hero-center-section:nth-child(5)').addClass("show");
			$('.slide-buttons li:nth-child(5)').addClass('active');
		})
		$('.slide-buttons li:nth-child(6)').on('mouseenter', function() {
			$('.slide-buttons li.active').removeClass('active');
			$('.hero-center-section.show').removeClass("show");
			$('.hero-center-section:nth-child(6)').addClass("show");
			$('.slide-buttons li:nth-child(6)').addClass('active');
		})
		$('.slide-buttons li:nth-child(1)').trigger('mouseenter')   
		
	});
	
})(jQuery); 
 }
}
</script>

<style scoped>
@import "@/assets/styles/CaseS.scss";

</style>