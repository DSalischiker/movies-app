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
      :rating="rating"
      increment="0.1"
      star-size="15"
      read-only="true"
      fixed-points="1"
      round-start-rating="false"
      active-color="#744081"
      animate="true"
      text-class="rating-text"
      />
      </div
  ></RouterLink>
</template>

<script>
import StarRating from 'vue-star-rating';
export default {
  name: "MovieCard",
  props: ["id", "movieData"],
  components: {
    StarRating,
  },
  created() {},
  methods: {
    selectMovie(id) {
      this.$store.commit("setSelectedMovieId", id);

    },
  },
  computed: {
    movie() {
      return this.movieData;
    },
    rating(){
      return this.movieData.vote_average /2;
    }
  },
};
</script>

<style lang="scss" scoped>
.movie-card{
  text-decoration: none;

}
.movie-card__container{
  margin: 0 auto;
  max-width: 200px;
  text-align: center;
  color: #222222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.movie-card__img {
  border-radius: 8px;
  width: 200px;
  height: auto;
}
.truncate{
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1; /* number of lines to show */
   -webkit-box-orient: vertical;
}

.rating-text{
  background-color: gold !important;
}
</style>
