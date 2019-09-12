<template>
  <div class="hero-container">
      <hero-svg-image class="hero-image"></hero-svg-image>
  </div>
</template>

<script>
import HeroSVG from './HeroSVG.vue';
export default {
    components: {
        "hero-svg-image": HeroSVG
    }
}
</script>

<style lang="scss">
    .hero-container {
        height: 65vh;
        width: 100%;
    }

    .hero-container::before {
        content: "";
        height: 65vh;
        width: 100%;
        background-size: repeat;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url("../assets/squares.svg"), linear-gradient(to bottom, rgb(66, 67, 133), rgba(47, 48, 97, 1));
        border-bottom: 2px solid black;
    }

    .hero-image {
        height: 500px;
        position: absolute;
        z-index: 2;
    }
</style>