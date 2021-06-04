<template>
  <div id="movie__app">
    <!-- ENVOLVER TODO EN OTRO COMPONENTE PARA DEJAR LIMPIO app.vue -->
    <AppHeader />

    <div class="app__content">
      <GenresList />
      <div class="app__content__container">
        <transition name="fade">
          <RouterView :key="$route.fullPath"/>
        </transition>
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import GenresList from "./GenresList.vue";
import AppFooter from "./AppFooter.vue";
export default {
  name: "MovieApp",
  components: {
    AppHeader,
    GenresList,
    AppFooter,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  ::selection{
    background-color: $primaryColor;
    color: white;
  }
}
html,
body {
  margin: 0;
  padding: 0;
}
body {
  font-family: sans-serif;
  h1{
    font-size: $h1Size;
  }
  h2{
    font-size: $h2Size;
  }
  h3{
    font-size: $h3Size;
  }
  h4{
    font-size: $h4Size;
  }
  h5{
    font-size: $h5Size;
  }
  h6{
    font-size: $h6Size;
  }
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
.app__content__container{
  width: 100%;
  display: flex;
  flex-direction: column;
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
