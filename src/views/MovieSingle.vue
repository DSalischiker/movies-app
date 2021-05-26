<template>
  <div>
    <div class="movie-single__container">
      MOVIE SINGLE
      <img
        class="movie-card__img"
        :src="`https://image.tmdb.org/t/p/w500${this.movieData.poster_path}`"
        alt=""
      />
      <h1>{{ this.movieData.title }}</h1>
      <p>{{ this.movieData.tagline }}</p>
      <p>{{ this.movieData.vote_average }}</p>
      <span
        v-for="(language, $index) in this.movieData.spoken_languages"
        :key="$index"
        >{{ language.english_name }}</span
      >
      <span>{{ this.movieData.runtime }} MIN</span>
      <span>{{ this.getReleaseYear() }}</span>
      <h4>Synopsis</h4>
      <p>{{ this.movieData.overview }}</p>
      <h4>Genres</h4>
      <ul>
        <li v-for="(genre, $index) in this.movieData.genres" :key="$index">
          {{ genre.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieSingle",
  props: ["id"],
  created() {
    this.$store.commit("setSelectedMovieId", this.movieId);
    this.$store.dispatch("getMovieDataFromAPI");
  },
  methods: {
    getReleaseYear() {
      if (this.movieData.release_date) {
        const releaseYear = this.movieData.release_date.substring(0, 4);
        return releaseYear;
      }
    },
  },
  computed: {
    movieId() {
      return this.$route.params.id;
    },
    movieData() {
      return this.$store.state.selectedMovieData;
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-single__container {
  top: 10vh;
}
</style>
