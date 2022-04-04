<template>
  <div class="project">
   
<div class="c-magic-area c-magic-area--menu" data-target-class=".c-main-menu__link" data-tween-back="true" aria-hidden="true"></div>
<div class="c-magic-area c-magic-area--content" data-target-class=".c-article__link" data-tween-back="false" aria-hidden="true"></div>

<main id="page" class="o-page">
  <header class="o-header">
    <h1 class="c-logo"><a class="c-logo__link" href="https://frontend30.com" target="_blank">Ryan Yu</a></h1>
    <nav class="c-main-menu" aria-labelledby="mainmenulabel">
      <h2 id="mainmenulabel" class="u-visually-hidden">Main Menu</h2>
      <ul class="c-main-menu__list">
        <li><a class="c-main-menu__link" href="#">Home</a></li>
        <li><a aria-current="page" class="is-magic-active c-main-menu__link" href="#">Portfolio</a></li>
        <li><a class="c-main-menu__link" href="#">About</a></li>
        <li><a class="c-main-menu__link" href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="o-main-section">
    <h2 class="c-main-heading">Portfolio</h2>

    <article class="c-article">
      <a class="c-article__link" href="#">
        <div>
          <header>
            <h3 class="c-article__heading">Ink transition with PNG sprite</h3>
          </header>
          <div class="c-article__content">
            Animate images with ink transition in PNG sprite.
          </div>
        </div>
        <div class="c-article__img-wrapper">
          <img class="c-article__img" src="https://assets.codepen.io/204808/shin-yun-bok-ink.png" alt="Ink transition with PNG sprite" />
        </div>
      </a>
    </article>

    <article class="c-article">
      <a class="c-article__link" href="#">
        <div>
          <header>
            <h3 class="c-article__heading">Responsive Mondrian art with CSS grid</h3>
          </header>
          <div class="c-article__content">
            Make a responsive Mondrian art with CSS grid layout.
          </div>
        </div>
        <div class="c-article__img-wrapper">
          <img class="c-article__img" src="https://assets.codepen.io/204808/css-grid-mondrian.png" alt="Responsive Mondrian art with CSS grid" />
        </div>
      </a>
    </article>

    <article class="c-article">
      <a class="c-article__link" href="#">
        <div>
          <header>
            <h3 class="c-article__heading">Space rocket with requestAnimationFrame</h3>
          </header>
          <div class="c-article__content">
            Create the space rocket animation with stars in different perspective.
          </div>
        </div>
        <div class="c-article__img-wrapper">
          <img class="c-article__img" src="https://assets.codepen.io/204808/17.Space-Rocket-with-requestAnimationFrame.png" alt="Responsive Mondrian art with CSS grid" />
        </div>
      </a>
    </article>
  </section>
</main>

<div class="c-author">
  Built with 💛 &nbsp; by <a target="_blank" class="c-author__link" href="https://frontend30.com/cp-magicarea">Ryan Yu</a>
</div>

<div class="c-fe30">
  <div class="c-fe30__inner">
    <a class="c-fe30__photo" href="https://frontend30.com/cp-magicarea" target="_blank"><img class="c-fe30__img" src="https://assets.codepen.io/204808/ryan-yu-profile.png" alt="Ryan Yu" /></a>
    <p>Hey 👋 &nbsp; Would you like to learn how to build the <strong>Magic area on hover/focus</strong>?</p>
    <p>Check it out at <a href="https://frontend30.com/cp-magicarea" class="c-fe30__link" target="_blank">frontend30.com</a>.</p>
  </div>
</div>

  </div>
</template>

<script>
export default {
  mounted(){
    const magicAreas = [...document.querySelectorAll(".c-magic-area")];

const getAreaDetails = (area) => {
  const width = area.clientWidth;
  const height = area.clientHeight;

  const position = area.getBoundingClientRect();
  const top = position.top + window.scrollY;
  const left = position.left;
  console.log(position.top);
  return {
    left,
    height,
    top,
    width
  };
};

const setTweenArea = (link, magicArea) => {
  const { left, height, top, width } = getAreaDetails(link);

  gsap.set(magicArea, {
    top,
    left,
    width,
    height
  });
};

const tweenMagicArea = (target, magicArea) => {
  const { left, height, top, width } = getAreaDetails(target);

  gsap.to(magicArea, 0.5, {
    left,
    top,
    width,
    height,
    ease: Power3.easeInOut
  });
};

const getMagicActiveElement = (links) => {
  return links.filter((link) => {
    return (
      link.classList.contains("is-magic-active") ||
      link.getAttribute("aria-current") === "page"
    );
  });
};

const moveMagicArea = (links, magicArea, isTweenBack) => {
  const magicActiveElement = getMagicActiveElement(links);

  links.map((link) => {
    link.addEventListener("mouseenter", function (e) {
      tweenMagicArea(e.target, magicArea);
    });

    link.addEventListener("focus", function (e) {
      tweenMagicArea(e.target, magicArea);
    });

    if (isTweenBack && magicActiveElement.length) {
      link.addEventListener("mouseleave", function (e) {
        tweenMagicArea(magicActiveElement[0], magicArea);
      });

      link.addEventListener("focusout", function (e) {
        tweenMagicArea(magicActiveElement[0], magicArea);
      });
    }
  });
};

const setMagic = (links, magicArea) => {
  // check if .is-magic-active || aria-current="page"
  const magicActiveElement = getMagicActiveElement(links);

  if (magicActiveElement.length) {
    setTweenArea(magicActiveElement[0], magicArea);
  } else {
    setTweenArea(links[0], magicArea);
  }
};

// const onResize = (links, magicArea) => {
//   setMagic(links, magicArea);
// };

const initMagic = ({ isResize } = { isResize: false }) => {
  if (!magicAreas.length) return;

  magicAreas.map((magicArea) => {
    const targetMagicArea = magicArea.getAttribute("data-target-class");

    const links = [...document.querySelectorAll(targetMagicArea)];

    if (!links.length) return;

    setMagic(links, magicArea);

    if (!isResize) {
      const isTweenBack = magicArea.getAttribute("data-tween-back") === "true";

      moveMagicArea(links, magicArea, isTweenBack);
    }
  });
};

initMagic();

window.addEventListener(
  "resize",
  _.throttle(function () {
    initMagic({ isResize: true });
  }, 100)
);

VanillaTilt.init(document.querySelector(".c-fe30__inner"), {
  max: 20,
  perspective: 1000,
  speed: 300
});

  }
  ,

methods(){}
}
</script>

<style>
@import "@/assets/styles/Case-Study.scss";
</style>