<template>
  <div class="genre__container" >
    <MovieList v-if="!loadingState" :moviesToShow="moviesByGenre" :genreName="this.getGenreName()"/>
      <Loading v-else />
  </div>
</template>

<script>
import MovieList from "../components/MovieList.vue";
import Loading from "../components/Loading.vue";
import {mapState, mapActions} from "vuex";
export default {
  name: "Genre",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    Loading,
    MovieList,
  },
  created() {
    this.getMoviesByGenre(this.genreId);
    this.getGenreName();
  },
  data() {
    return {
      genreName: "",
    };
  },
  methods: {
    ...mapActions({
      getMoviesByGenre: "getMoviesByGenre",
    }),
    getGenreName() {
      this.genreName = this.genres.filter((genre) => genre.id == this.id)[0].name;
      return this.genreName;
    },
  },
  computed: {
    ...mapState({
      genres: "genres",
      moviesByGenre: "moviesByGenre",
      loadingState: "loadingState",
    }),
    genreId() {
      return this.$route.params.id;
    },
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
