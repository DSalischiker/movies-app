<template>
  <div class="genre__container" >
    <MovieList v-if="!loadingState" :moviesToShow="moviesByGenre" :genreName="this.getGenreName()"/>
      <Loading v-else />
  </div>
</template>

<script>
import MovieList from "../components/MovieList.vue";
import Loading from "../components/Loading.vue";
export default {
  name: "Genre",
  props: ["id"],
  components: {
    MovieList,
    Loading,
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
      this.genreName = this.$store.state.genres.filter((genre) => genre.id == this.id)[0].name;
      return this.genreName;
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
  height: 100%;
  display: flex;
}
</style>
