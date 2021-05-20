<template>
  <div class="movie__list">
    <GenresList />
    <ul>
      <li v-for="(movie, $index) in movies" :key="$index">
        {{ movie.title }} |
        <p @click="selectMovie(movie.id)">{{movie.id}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import GenresList from "../components/GenresList.vue";
export default {
  name: "MovieList",
  components: {
    GenresList,
  },
  mounted() {
    this.$store.dispatch("getMoviesFromAPI");
  },
  methods: {
    selectMovie(id){
      this.$store.commit("setSelectedMovieId", id)
      this.$store.dispatch("getMovieDataFromAPI");
    }
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
};
</script>
