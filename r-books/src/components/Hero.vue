<template>
  <header class="hero-container">
      <hero-svg-image class="hero-image"></hero-svg-image>
  </header>
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
@import "../styles/utils.scss";
    .hero-container {
        height: 75vh;
        width: 100%;
        background-image: url("../assets/squares.svg"), linear-gradient(to bottom, $light-blue, $blue);
        border-bottom: 1rem solid $dark-gray;
    }
    .hero-image {
        position: absolute;
        z-index: 2;
        top: 25%;
        left: 49%;
        transform: translate(-50%, -25%);
        background: $blue;
        border-radius: 100%;
    }
   
</style>