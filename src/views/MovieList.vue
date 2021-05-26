<template>
  <div class="movie__list">
    <ul class="movie__list__grid">
      <li
        class="movie__list__ul__li"
        v-for="(movie, $index) in movies"
        :key="$index"
      >
        <MovieCard :id="$index" />
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from "../components/MovieCard.vue";
export default {
  name: "MovieList",
  components: {
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
.movie__list {
  display: flex;
  width: 100%;
}
.movie__list__grid {
  margin-top: 4em;
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
