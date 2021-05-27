<template>
  <div class="home__container">
  <MovieList :moviesToShow="movies"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieList from "../components/MovieList.vue";
export default {
  name: "Home",
  components: {
    MovieList,
  },
  created() {
    this.$store.dispatch("getMoviesFromAPI");
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
};
</script>

<style lang="scss" scoped>
.home__container{
  width: 100%;
}
.movie__list {
  display: flex;
  width: 100%;
}
.movie__list__grid {
  /* margin-top: 4em; */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  grid-auto-rows: minmax(150px, auto);

  .movie__list__ul__li {
    list-style: none;
  }
}
</style>
