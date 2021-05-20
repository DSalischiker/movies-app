<template>
  <div class="movie__list">
    <ul>
      <li v-for="(movie, $index) in movies" :key="$index">
        {{movie.title}}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MovieList",
  mounted(){
    this.$store.dispatch('getAPIData');
  },
  computed:{
    movies() {
      return this.$store.state.movies;
    }
  },
  components: {

  },
};
</script>
