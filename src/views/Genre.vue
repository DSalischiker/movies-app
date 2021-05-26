<template>
    <div>
        GENRE
    </div>
</template>

<script>
export default {
    name: "Genre",
    props: ["id"],
  created() {
    this.$store.commit("setSelectedGenreId", this.id);
    /* this.$store.dispatch("getGenreFromAPI"); */
  },
  methods: {
      /* getMoviesByGenre(){
          const genreMovies = this.$store.state.movies.filter(movie => movie.genre_ids.includes(this.genreId));
          return genreMovies;
      } */
  },
  computed: {
    genreId() {
      return this.$route.params.id;
    },
    /* genreMovies() {
      return this.getMoviesByGenre();
    }, */
  },
}
</script>

<style lang="scss" scoped>

</style>