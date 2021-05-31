<template>
  <div class="movie__list">
    <ul v-if="moviesToShow != []" class="movie__list__grid">
        <MovieCard
        class="movie__list__ul__li"
        v-for="(movie, $index) in movies"
        :key="$index"
        :id="$index"
        :movieData="movie" />

    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from "../components/MovieCard.vue";
export default {
  name: "MovieList",
  props: {
      moviesToShow: {
          type: Array,
          required: true,
      }},
  components: {
    MovieCard,
  },
  computed: {
    movies() {
      return this.moviesToShow;
    },
  },
};
</script>

<style lang="scss" scoped>
.movie__list {
  display: flex;
  width: 100%;

}
.movie__list__grid {
  margin: 10vh auto 0 auto;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  grid-auto-rows: minmax(150px, auto);
  padding: 0;

  .movie__list__ul__li {
    list-style: none;
  }

  @media(max-width: $breakpointLaptop){
    grid-template-columns: repeat(4, 1fr);
  }
  @media(max-width: $breakpointTablet){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: $breakpointMobile){
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
