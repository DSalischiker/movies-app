<template>
  <div class="single__container">
    <img
      class="movie-card__img"
      :src="`https://image.tmdb.org/t/p/w500${this.movieData.poster_path}`"
      alt=""
    />
    <div class="single__data">
      <h1 class="single__data__title">{{ this.movieData.title }}</h1>
      <p class="single__data__subtitle">{{ this.movieData.tagline }}</p>
      <div class="single__data__meta">
        <p class="single__data__text rating">{{ this.movieData.vote_average }}</p>
        <span
          v-for="(language, $index) in this.movieData.spoken_languages"
          :key="$index"
          >{{ language.english_name }}</span
        >
        <span>{{ this.movieData.runtime }} MIN</span>
        <span>{{ this.getReleaseYear() }}</span>
      </div>
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
.single__container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 65%;
  margin: 10vh auto 0 auto;
  .movie-card__img {
    border-radius: 8px;
    height: 90%;
  }
}
.single__data {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  margin-left: 2em;

  .single__data__title {
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 400;
  }

  .single__data__subtitle {
    font-size: 16px;
  }

  .single__data__meta{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;

    .rating{

    }
  }
}
</style>
