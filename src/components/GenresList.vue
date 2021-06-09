<template>
  <div class="genres__container">
    <ul  class="genres__ul">
      <h3 class="genres__ul__title">Genres</h3>
      <div class="genres__ul__li__container">
      <RouterLink
        v-for="(genre, $index) in genres"
        :key="$index"
        class="genre__link"
        :to="{
          name: 'Genre',
          params: { id: genre.id },
        }"
      >
        <li
          :class="[{ selected: isSelected(genre.id) }]"
          class="genres__ul__li"
        >
          <i class="ri-movie-2-line"></i>
          <a class="genres__ul__li__a">{{ genre.name }}</a>
        </li>
      </RouterLink>
      </div>
    </ul>
  </div>
</template>

<script>
import "remixicon/fonts/remixicon.css";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "GenresList",
  created() {
    this.getGenres();
  },
  methods: {
    ...mapActions({
      getGenres: "getGenres",
    }),
    ...mapMutations({
      selectedGenre: "setSelectedGenreId",
    }),
    isSelected(id) {
      if (id == this.$route.params.id) {
        return true;
      }
    },
  },
  computed: {
    ...mapState({
      genres: "genres",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";
.genres__container {
  background-color: $sideBarColor;
  width: 20%;
  height: 90vh;
  top: 10vh;
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-weight: 600;

  @media (max-width: $breakpointTablet) {
    width: 100%;
    min-width: 75px;
    height: fit-content;
    position:unset;

    .genres__ul {
      .genres__ul__title{
        margin: 0 auto;
      }

      .genres__ul__li__container{
        flex-direction: row;
        flex-flow: row wrap;
        justify-content: center;
      }

      .genre__link{
        width: fit-content;
      }
    }
  }
}

.genres__ul {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .genres__ul__li__container{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .genres__ul__title {
    @include makeTitle($textsColor, 600, $h3Size);
  }
  .genre__link {
    width: 100%;
    text-decoration: none;
  }
  .selected {
    background-color: $primaryColor;
    * {
      color: white !important;
    }
  }
  .genres__ul__li {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5em;
    text-transform: uppercase;
    letter-spacing: $letterSpacing;
    height: 1.7rem;
    list-style: none;
    cursor: pointer;
    padding: 0rem 0.7rem;
    i {
      font-size: $clickableTextSize;
      color: $textsColor;
    }
    &:hover {
      background-color: $primaryColorHover;
      .genres__ul__li__a,
      i {
        color: white;
      }
    }
  }
  .genres__ul__li__a {
    font-size: $clickableTextSize;
    text-decoration: none;
    color: $textsColor;
  }
}
</style>
