<template>
  <div id="app">
    <!-- ENVOLVER TODO EN OTRO COMPONENTE PARA DEJAR LIMPIO app.vue -->
    <AppHeader />
    <div class="app__content">
    <GenresList/>
    <RouterView />
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import GenresList from './components/GenresList.vue';
export default {
  name: "App",
  components: {
    AppHeader,
    GenresList,
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
.app__content{
  display: flex;
  width: 100%;
  margin-top: 10vh;
}
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
