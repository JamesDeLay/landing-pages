<template>
  <div class="hero-container">
  </div>
</template>

<script>
export default {

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
</style>