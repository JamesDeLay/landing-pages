<template>
  <main id="app">
    <navigation></navigation>
    <hero></hero>
  </main>
</template>
<script>
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
export default {
  name: "app",
  components: {
    'hero': Hero,
    'navigation': Navigation
  }
};
</script>
<style lang="sass">
</style>