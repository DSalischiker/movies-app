<template>
  <div class="genres__container">
    <ul>
      <li v-for="(genre, $index) in genres" :key="$index">
          {{genre.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GenresList",
  mounted() {
    this.$store.dispatch("getGenresFromAPI");
  },
  computed: {
    genres() {
      return this.$store.state.genres;
    },
  },
};
</script>

<style lang="scss" scoped></style>
