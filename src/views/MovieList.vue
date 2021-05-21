<template>
  <div class="movie__list">
    <GenresList />
    <ul>
      <li class="movie__list__ul__li" v-for="(movie, $index) in movies" :key="$index">
        <MovieCard :id="$index"/>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import GenresList from "../components/GenresList.vue";
import MovieCard from "../components/MovieCard.vue";
export default {
  name: "MovieList",
  components: {
    GenresList,
    MovieCard,
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
  .movie__list__ul__li{
    list-style: none;
  }
</style>
