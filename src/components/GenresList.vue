<template>
  <div class="genres__container">
    <ul class="genres__ul">
      <h3>Genres</h3>
      <RouterLink
        v-for="(genre, $index) in genres"
        :key="$index"
        class="genre__link"
        :to="{
          name: 'Genre',
          params: { id: genre.id },
        }"
      >
        <li class="genres__ul__li">
          <a class="genres__ul__li__a" href="#" to="/">{{ genre.name }}</a>
        </li>
      </RouterLink>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GenresList",
  created() {
    this.$store.dispatch("getGenresFromAPI");
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
  background-color: #dbdbdb;
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
  h3 {
    color: #474747;
  }
  .genre__link{
    width: 100%;
    text-decoration: none;
  }
  .genres__ul__li {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    height: 1.7rem;
    list-style: none;
    cursor: pointer;

    padding: 0rem 0.7rem;
    &:hover {
      background-color: #cccccc;
    }
  }
  .genres__ul__li__a{
    font-size: 12px;
    text-decoration: none;
    color: #474747;
  }
}
</style>
