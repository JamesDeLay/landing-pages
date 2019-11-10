<template>
  <main id="app">
    <navigation></navigation>
    <hero></hero>
    <authors></authors>
  </main>
</template>
<script>
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import Authors from "./components/Authors"
export default {
  name: "app",
  components: {
    'hero': Hero,
    'navigation': Navigation,
    'authors': Authors
  }
};
</script>
<style lang="sass">
</style>