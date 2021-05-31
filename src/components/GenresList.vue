<template>
  <div class="genres__container">
    <ul class="genres__ul">
      <h3 class="genres__ul__title">Genres</h3>
      <RouterLink
        v-for="(genre, $index) in genres"
        :key="$index"
        class="genre__link"
        :to="{
          name: 'Genre',
          params: { id: genre.id },
        }"
        @click="selectedGenre(genre.id)"
      >
        <li class="genres__ul__li">
          <i class="ri-movie-2-line"></i>
          <a class="genres__ul__li__a">{{ genre.name }}</a>
        </li>
      </RouterLink>
    </ul>
  </div>
</template>

<script>
import "remixicon/fonts/remixicon.css";

export default {
  name: "GenresList",
  created() {
    this.$store.dispatch("getGenresFromAPI");
  },
  methods: {
    selectedGenre(genreId) {
      this.$store.commit("setSelectedGenreId", genreId);
    },
  },
  computed: {
    genres() {
      return this.$store.state.genres;
    },
  },
};
</script>

<style lang="scss" scoped>
.genres__container {
  background-color: $sideBarColor;
  width: 20%;
  min-width: 250px;
  height: 90vh;
  top: 10vh;
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}
.genres__ul {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .genres__ul__title {
    color: $textsColor;
  }
  .genre__link {
    width: 100%;
    text-decoration: none;
  }
  .genres__ul__li {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5em;
    text-transform: uppercase;
    letter-spacing: 2px;
    height: 1.7rem;
    list-style: none;
    cursor: pointer;
    padding: 0rem 0.7rem;
    i {
      font-size: 12px;
      color: $textsColor;
    }
    &:hover {
      background-color: $primaryColorHover;
      .genres__ul__li__a, i{
        color: white;
      }
    }
  }
  .genres__ul__li__a {
    font-size: 12px;
    text-decoration: none;
    color: $textsColor;
  }
}
</style>
