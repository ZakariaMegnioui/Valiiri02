<template>
<div>
<div class="stack">
  <div class="stack-layer five shadow"></div>
  <div class="stack-layer five pink"></div>
  <div class="stack-layer four orange"></div>
  <div class="stack-layer three teal"></div>
  <div class="stack-layer two blue"></div>
  <div class="stack-layer one purple"></div>
</div>
<div class="text text-gray-200">
  I'm still working on it <br>
  Designed & Built by <a class="underline underline-offset-1" href="https://flowcv.me/zakaria-megnioui" target="_blank" >Zakaria Megnioui</a> 


</div>
</div>

</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>


@use postcss-cssnext;



.stack {
  height: 208px;
  margin: 64px auto 48px;
  position: relative;
  transform-style: preserve-3d;
  width: 128px;
}

.stack-layer {
  animation-name: float;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
  border-radius: 16px;
  height: 128px;
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%) rotateX(60deg) rotateZ(45deg);
  width: 128px;
}

.text {
  text-align: center;
  
 
}

.button {
  -webkit-appearance: none;
  background: #FFFFFF;
  border: 1px solid #C4C7CA;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.07);
  border-radius: 4px;
  display: block;
  font-size: inherit;
  font-family: inherit;
  font-weight: 500;
  margin: 1.5em auto;
  padding: 0.75em 1.5em;
  transition: border-color 200ms;
  
  &:hover {
    border-color: #949698;
  }
}

.blue {
  background-image: linear-gradient(45deg, #584EB0 0%, #42A4B2 100%);
  opacity: 0.9;
  top: 24px;
}
.orange {
  background-image: linear-gradient(-90deg, #A34162 0%, #FF7237 100%);
  opacity: 0.8;
  top: 72px;
}
.pink {
  background-image: linear-gradient(45deg, rgba(182,50,127,0.93) 0%, #7F4EB0 100%);
  opacity: 0.5;
  top: 96px;
}
.purple {
  background-image: linear-gradient(45deg, rgba(182,50,127,0.93) 0%, #7F4EB0 100%);
}
.shadow {
  animation-name: cast;
  background-color: black;
  box-shadow: 0 0 48px 48px black;
  height: 48px;
  opacity: 0.2;
  top: 172px;
  width: 48px;
}
.teal {
  background-image: linear-gradient(-116deg, #37D8D5 0%, #39C48C 100%);
  opacity: 0.9;
  top: 48px;
}

.two {
  animation-delay: 100ms;
}
.three {
  animation-delay: 200ms;
}
.four {
  animation-delay: 300ms;
}
.five {
  animation-delay: 400ms;
}

@keyframes float {
  50% {
    transform: translate(-50%, -24px) rotateX(60deg) rotateZ(45deg);
  }
}

@keyframes cast {
  50% {
    opacity: 0.08;
    transform: scale(1.1) translateX(-50%) rotateX(60deg) rotateZ(45deg);
  }
}
 
</style>