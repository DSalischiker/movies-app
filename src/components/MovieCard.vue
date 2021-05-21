<template>
  <RouterLink
    class="movie-card"
    :to="{
      name: 'MovieSingle',
      params: { id: this.movie.id },
    }"
  >
    <div class="movie-card__container" @click="selectMovie(movie.id)">
      <h1 class="movie-card__title">{{ this.movie.title }}</h1>
      <p class="movie-card__description">{{ this.movie.vote_average }}</p>
      <img
        class="movie-card__img"
        :src="`https://image.tmdb.org/t/p/w500${this.movie.poster_path}`"
        alt=""
      /></div
  ></RouterLink>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["id"],
  created() {},
  methods: {
    selectMovie(id) {
      this.$store.commit("setSelectedMovieId", id);
      this.$store.dispatch("getMovieDataFromAPI");
    },
  },
  computed: {
    movie() {
      return this.$store.state.movies[this.id];
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-card__img {
  width: 150px;
  height: auto;
}
</style>
