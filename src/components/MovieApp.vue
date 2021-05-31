<template>
  <div id="movie__app">
    <!-- ENVOLVER TODO EN OTRO COMPONENTE PARA DEJAR LIMPIO app.vue -->
    <AppHeader />

    <div class="app__content">
      <GenresList />
      <transition name="fade">
        <RouterView />
      </transition>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import GenresList from "./GenresList.vue";
export default {
  name: "MovieApp",
  components: {
    AppHeader,
    GenresList,
  },
};
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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: $titlesFontFamily;
    color: $primaryColor;
  }
  p,
  span,
  li {
    font-family: $textsFontFamily;
    color: $textsColor;
  }
}
</style>

<style scoped>
.app__content {
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
