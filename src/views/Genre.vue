<template>
  <div class="genre__container" >
    <MovieList v-if="!loadingState" :moviesToShow="moviesByGenre" />
      <span class="loading"  v-else>Loading...</span>
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
  methods: {
    setGenreInState() {
      this.$store.dispatch("getMoviesByGenreFromAPI", this.$route.params.id);
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
    loadingState(){
      return this.$store.state.isLoading;
    }
  },
};
</script>

<style lang="scss" scoped>
.genre__container {
  width: 100%;
}
</style>
