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
        background-size: repeat;
        background-image: url("../assets/squares.svg"), linear-gradient(to bottom, $light-blue, $blue);
        border-bottom: 2px solid black;
    }

    .hero-image {
        height: 500px;
        position: absolute;
        z-index: 2;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -25%);
        background-image: linear-gradient(to bottom, $light-blue, $blue);
        border-radius: 100%;
        border: 8px solid $yellow;
        padding: .5rem;
    }
</style>