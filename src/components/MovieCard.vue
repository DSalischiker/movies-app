<template>
  <RouterLink
    class="movie-card"
    :to="{
      name: 'MovieSingle',
      params: { id: this.movie.id },
    }"
  >
    <div class="movie-card__container" @click="selectMovie(movie.id)">
      <img
        class="movie-card__img"
        :src="`https://image.tmdb.org/t/p/w500${this.movie.poster_path}`"
        alt=""
      />
      <h3 class="movie-card__title">{{ this.movie.title }}</h3>
      <p class="movie-card__description">{{ this.movie.vote_average }}</p>
      </div
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
.movie-card{
  text-decoration: none;
  max-width: 25%;
}
.movie-card__container{
  margin: 0 auto;
  max-width: 150px;
  text-align: center;
  color: #222222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.movie-card__img {
  width: 150px;
  height: auto;
}
</style>
