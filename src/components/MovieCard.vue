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
      <h3 class="movie-card__title truncate">{{ this.movie.title }}</h3>
      <StarRating
        class="stars"
        :rating="rating"
        :increment="SRConfig.increment"
        :star-size="SRConfig.starSize"
        :read-only="SRConfig.readOnly"
        :fixed-points="SRConfig.fixedPoints"
        :round-start-rating="SRConfig.roundStartRating"
        :active-color="SRConfig.activeColor"
        :animate="SRConfig.animate"
        :text-class="SRConfig.textClass"
        :padding="SRConfig.padding / 2"
      /></div
  ></RouterLink>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "MovieCard",
  props: ["id", "movieData"],
  components: {
    StarRating,
  },
  data() {
    return {
      increment: 0.1,
      starSize: 15,
      readOnly: true,
      fixedPoints: 1,
      roundStartRating: false,
      activeColor: "#744081",
      animate: true,
      textClass: "rating-text",
    };
  },
  methods: {
    selectMovie(id) {
      this.$store.commit("setSelectedMovieId", id);
    },
  },
  computed: {
    movie() {
      return this.movieData;
    },
    rating() {
      //Esto puede ser un getter en store
      return this.movieData.vote_average / 2;
    },
    SRConfig() {
      return this.$store.getters.getStarRatingConfig;
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-card {
  text-decoration: none;
}
.movie-card__container {
  margin: 0 auto 1em auto;
  width: 100%;
  text-align: center;
  color: #222222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.02);
    transition: all ease-in-out 0.1s;
  }
}

.movie-card__title {
  margin: 1em 0 0 0;
  font-size: 12px;
  font-weight: 500;
}

.movie-card__img {
  object-fit:cover;
  border-radius: 8px;
  width: 100%;
  height: auto;
  box-shadow: rgba(105, 100, 100, 0.35) 0px 5px 15px;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>
<style lang="scss">
.rating_text {
  background-color: gold;
}
</style>
