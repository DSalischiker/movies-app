<template>
  <div class="movie__list">
    <GenresList />
    <ul>
      <li v-for="(movie, $index) in movies" :key="$index">
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import GenresList from "../components/GenresList.vue";
export default {
  name: "MovieList",
  components: {
    GenresList,
  },
  mounted() {
    this.$store.dispatch("getMoviesFromAPI");
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
};
</script>
