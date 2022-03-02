<template>
  <div class="main">
<div class="screen " id="fold-effect">
	<div class="wrapper-3d">
		<div class="fold fold-top">
			<div class="fold-align">
				<div class="fold-content">
					<div class="marquee">
						<div class="track">
							Creators.Creators.<span class="-focus">Creators.</span>Creators.Creators.Creators.Creators.Creators.
						</div>
					</div>

					<div class="marquee">
						<div class="track">
							Thinkers.Thinkers.<span class="-focus">Thinkers.</span>Thinkers.Thinkers.Thinkers.Thinkers.Thinkers.
						</div>
					</div>

					<div class="marquee">
						<div class="track">
							Innovators.Innovators.<span class="-focus">Innovators.</span>Innovators.Innovators.Innovators.Innovators.Innovators.
						</div>
					</div>

					<div class="marquee">
						<div class="track">
							Rebels.Rebels.Rebels.<span class="-focus">Rebels.</span>Rebels.Rebels.Rebels.Rebels.
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="fold fold-center" id="center-fold">
			<div class="fold-align">
				<div class="fold-content" id="center-content">
					<div class="marquee">
						<div class="track">
							Creators.Creators.<span class="-focus">Ceative.</span>Ceative.Ceative.Ceative.Ceative.Ceative.
						</div>
					</div>

					<div class="marquee">
						<div class="track">
							Thinkers.Thinkers.<span class="-focus">Thinkers.</span>Thinkers.Thinkers.Thinkers.Thinkers.Thinkers.
						</div>
					</div>

					<div class="marquee">
						<div class="track">
							Innovators.Innovators.<span class="-focus">Innovators.</span>Innovators.Innovators.Innovators.Innovators.Innovators.
						</div>
					</div>

					<div class="marquee">
						<div class="track">
							Rebels.Rebels.Rebels.<span class="-focus">Rebels.</span>Rebels.Rebels.Rebels.Rebels.
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="fold fold-bottom">
			<div class="fold-align">
				<div class="fold-content">
					<div class="marquee">
						<div class="track">
							Creators.Creators.<span class="-focus">Creators.</span>Creators.Creators.Creators.Creators.Creators.
						</div>
					</div>

					<div class="marquee">
						<div class="track">
							Thinkers.Thinkers.<span class="-focus">Thinkers.</span>Thinkers.Thinkers.Thinkers.Thinkers.Thinkers.
						</div>
					</div>

					<div class="marquee">
						<div class="track">
							Innovators.Innovators.<span class="-focus">Innovators.</span>Innovators.Innovators.Innovators.Innovators.Innovators.
						</div>
					</div>

					<div class="marquee">
						<div class="track">
							Rebels.Rebels.Rebels.<span class="-focus">Rebels.</span>Rebels.Rebels.Rebels.Rebels.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
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
  gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.marquee').forEach((el, index) => {
	const w = el.querySelector('.track');
	console.log(w.scroll())
	const [x, xEnd] = (index % 2 == 0) ? [-500, -1500] : [-500, 0];
	gsap.fromTo(w, {  x  }, {
		x: xEnd,
		scrollTrigger: {
			scrub: 1
		}
	});
});

const centerContent = document.getElementById('center-content');
const centerFold = document.getElementById('center-fold');
const foldsContent = Array.from(document.querySelectorAll('.fold-content'));

let targetScroll = -(
  document.documentElement.scrollTop || document.body.scrollTop
);
let currentScroll = targetScroll;

const tick = () => {
  const overflowHeight = centerContent.clientHeight - centerFold.clientHeight;

  document.body.style.height = `${overflowHeight + window.innerHeight}px`;

  targetScroll = -(
    document.documentElement.scrollTop || document.body.scrollTop
  );
  currentScroll += (targetScroll - currentScroll) * 0.1;
  foldsContent.forEach(content => {
    content.style.transform = `translateY(${currentScroll}px)`;
  });
  requestAnimationFrame(tick);
};
tick();

  },
}
</script>

<style>
@import "@/assets/styles/Second.scss";
</style>