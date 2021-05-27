<template>
  <div id="app">
    <!-- ENVOLVER TODO EN OTRO COMPONENTE PARA DEJAR LIMPIO app.vue -->
    <MovieApp />
  </div>
</template>

<script>
import MovieApp from "./components/MovieApp.vue";
export default {
  name: "App",
  components: {
    MovieApp,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,700&display=swap');
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

<style scoped></style>
