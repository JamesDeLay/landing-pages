<template>
  <section class="grid authors">
      <div class="col-sm-4">Test</div>
      <div class="col-sm-4">Test</div>
      <div class="col-sm-4">Test</div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../styles/utils.scss";
.authors {
    @include grid;
    margin-top: 2rem;
    padding: 1rem;
}
</style>