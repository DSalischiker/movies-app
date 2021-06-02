<template>
  <div class="movie__list">
    <div class="movie__list__buttons__container">
      <button class="button" @click="sortByRating">
        <i class="ri-star-line"></i>
        Rating
      </button>
      <button class="button" @click="sortByPremiere">
        <i class="ri-calendar-line"></i>
        Lanzamiento
      </button>
      <button class="button" @click="reverseOrder">
        <i class="ri-arrow-up-line"></i>
        <i class="ri-arrow-down-line"></i>
      </button>
    </div>
    <ul v-if="moviesToShow != []" class="movie__list__grid">
      <MovieCard
        class="movie__list__ul__li"
        v-for="(movie, $index) in movies"
        :key="$index"
        :id="$index"
        :movieData="movie"
      />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from "../components/MovieCard.vue";
import "remixicon/fonts/remixicon.css";

export default {
  name: "MovieList",
  props: {
    moviesToShow: {
      type: Array,
      required: true,
    },
  },
  components: {
    MovieCard,
  },
  methods: {
    sortByRating() {
      this.movies.sort((a, b) => b.vote_average - a.vote_average);
    },
    //REVISAR
    /* sortByPremiere() {
      this.movies.sort(
        (a, b) => {
          if (this.getReleaseYear(b.release_date) - this.getReleaseYear(a.release_date)) {
            return -1;
          }else if(this.getReleaseYear(b.release_date) + this.getReleaseYear(a.release_date)){
            return 1;
          }
          return 0;
        }

      );
    }, */
    getReleaseYear(releaseDate) {
      const releaseYear = releaseDate.substring(0, 4);
      return releaseYear;
    },
    reverseOrder(){
      return this.movies.reverse();
    },
  },
  computed: {
    movies() {
      return this.moviesToShow;
    },
    /* moviesByRating() {
      return this.movies.sort((a, b) => a.vote_average + b.vote_average);

    }, */
  },
};
</script>

<style lang="scss" scoped>
.movie__list {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.movie__list__buttons__container {
  width: 95%;
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  margin: 5vh 0;

  .button {
    display: flex;
    gap: 0.5em;
    align-items: center;
    border: none;
    color: $primaryColor;
    background: none;
    cursor: pointer;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0.5em 1em;
    border-bottom: 2px solid white;
    &:hover {
      background-color: $primaryColorHover;
      color: white;
    }
  }
}
.movie__list__grid {
  margin: 0 auto;
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

  @media (max-width: $breakpointLaptop) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: $breakpointTablet) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: $breakpointMobile) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
