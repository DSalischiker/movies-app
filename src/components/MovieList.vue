<template>
  <div class="movie__list">
    <div class="movie__list__top__container">
      <h3 v-if="this.genreName" class="movie__list__title">
        Most popular {{ this.genreName }} movies
      </h3>
      <h3 v-else class="movie__list__title">Most popular movies</h3>
      <div class="movie__list__buttons__container">
        <button
          class="button"
          :class="{ selected: this.sortRating }"
          @click="sortByRating"
        >
          <i class="ri-star-line"></i>
          Rating
        </button>
        <button
          class="button"
          :class="{ selected: this.sortLaunch }"
          @click="sortByPremiere"
        >
          <i class="ri-calendar-line"></i>
          Lanzamiento
        </button>
        <button class="button" @click="reverseOrder">
          <i :class="{ selected: this.order }" class="ri-arrow-up-line"></i>
          <i :class="{ selected: !this.order }" class="ri-arrow-down-line"></i>
        </button>
      </div>
    </div>
    <span class="movie__list__order__text"
      >Order by: {{ this.selectedFilter ? this.selectedFilter : "none" }},
      {{ this.getOrderString() ? this.getOrderString() : "" }}</span
    >
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
    genreName: {
      type: String,
      required: false,
    },
  },
  components: {
    MovieCard,
  },
  data() {
    return {
      selectedFilter: "none",
      sortRating: false,
      sortLaunch: false,
      order: null, //false ==> ascendent, true ==> descendent
    };
  },
  methods: {
    sortByRating() {
      this.selectedFilter = "rating";
      this.sortRating = !this.sortRating;
      this.sortLaunch = false;
      this.movies.sort((a, b) => b.vote_average - a.vote_average);
    },
    sortByPremiere() {
      this.selectedFilter = "release Year";
      this.sortLaunch = !this.sortLaunch;
      this.sortRating = false;
      this.movies.sort((a, b) => {
        if (
          this.getReleaseYear(a.release_date) >
          this.getReleaseYear(b.release_date)
        ) {
          return -1;
        } else if (
          this.getReleaseYear(a.release_date) <
          this.getReleaseYear(b.release_date)
        ) {
          return 1;
        }
        return 0;
      });
    },
    getReleaseYear(releaseDate) {
      const releaseYear = releaseDate.substring(0, 4);
      return releaseYear;
    },
    reverseOrder() {
      this.order = !this.order;
      return this.movies.reverse();
    },
    getOrderString() {
      if (this.order) {
        return "ascendant";
      } else {
        return "descendant";
      }
    },
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
  flex-direction: column;
}

.movie__list__top__container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 5vh;
  margin: 2em 4em 0 4em;
  padding: 0;
  .movie__list__title{
    width: 100%;
    text-transform: uppercase;
    letter-spacing: $letterSpacing;
  }

  @media(max-width: $breakpointTablet){
    flex-direction: column;
    height: fit-content;
    justify-content: flex-start;
    .movie__list__buttons__container{
      margin: 0;
      justify-content: flex-start;
      width: 100%;
    }
  }
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
    font-size: $clickableTextSize;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0.5em 1em;
    border-bottom: 2px solid white;

    &.selected {
      border-bottom: 2px solid $primaryColor;
    }

    &:hover {
      background-color: $primaryColorHover;
      color: white;
    }

    &:last-of-type {
      color: $secondaryText;
      i.selected {
        color: $primaryColor !important;
      }
    }
  }
}

.movie__list__order__text{
  color: $secondaryText;
  display: flex;
  justify-content: flex-end;
  margin: 0 4em 1em 0;
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
    max-width: 60%;
  }
}
</style>
