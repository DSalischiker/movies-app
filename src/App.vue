<template>
  <div id="app">
    <AppHeader />

    <RouterView />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: "App",
  components: {
    AppHeader,
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  font-family: sans-serif;
}
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
