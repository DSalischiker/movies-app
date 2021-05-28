<template>
  <div class="genre__container">
    <MovieList :moviesToShow="moviesByGenre" />
  </div>
</template>

<script>
import MovieList from "../components/MovieList.vue";
export default {
  name: "Genre",
  props: ["id"],
  components: {
    MovieList,
  },
  created() {
    this.setGenreInState();
    this.getGenreName();
  },
  data() {
    return {
      genreName: "",
    };
  },
  watch: {
    $route: "setGenreInState",
  },
  methods: {
    setGenreInState() {
      this.$store.commit("setSelectedGenreId", this.id);
      this.$store.dispatch("getMoviesByGenreFromAPI");
    },
    getGenreName() {
      this.genreName = this.$store.state.genres.filter(
        (genre) => genre.id == this.id
      ).name;
      return;
    },
  },
  computed: {
    genreId() {
      return this.$route.params.id;
    },
    moviesByGenre() {
      return this.$store.state.moviesByGenre;
    },
  },
};
</script>

<style lang="scss" scoped>
.genre__container {
  width: 100%;
}
</style>
