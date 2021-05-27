<template>
  <div class="movie__list">
    <ul v-if="moviesToShow != []" class="movie__list__grid">
      <li
        class="movie__list__ul__li"
        v-for="(movie, $index) in movies"
        :key="$index"
      >
        <MovieCard :id="$index" :movieData="movie" />
      </li>
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
  margin-top: 4em;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1em;
  grid-auto-rows: minmax(150px, auto);

  .movie__list__ul__li {
    list-style: none;
  }
}
</style>
