<template>
  <div>
    MOVIE SINGLE
    {{ movieData.title }}
  </div>
</template>

<script>
export default {
  name: "MovieSingle",
  props: ['id'],
  data() {
    return {
      movieId: this.$route.params.id,
      movies: this.$store.state.movies,
    };
  },
  computed: {
    movieData() {
      return this.movies.find(
        (movie) => movie.id === this.movieId
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
