<template>
  <div class="home__container">
    <MovieList v-if="!loadingState" :moviesToShow="movies" />
    <Loading v-else />
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

import MovieList from "../components/MovieList.vue";
import Loading from "../components/Loading.vue";

export default {
  name: "Home",
  components: {
    Loading,
    MovieList,
  },
  created() {
    this.getMovies();
  },
  methods: {
    ...mapActions({
    getMovies: "getMovies"
    })
  },
  computed: {
    ...mapState({
    movies: "movies",
    loadingState: "isLoading",
    })
  },
};
</script>

<style lang="scss" scoped>
.home__container {
  width: 100%;
  height: 100%;
  display: flex;
}
.movie__list {
  display: flex;
  width: 100%;
  height: 100%;
}
.movie__list__grid {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  grid-auto-rows: minmax(150px, auto);

  .movie__list__ul__li {
    list-style: none;
  }
}
</style>
