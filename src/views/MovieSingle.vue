<template>
  <div class="single__container">
    <img
      class="movie-card__img"
      :src="`https://image.tmdb.org/t/p/w500${this.movieData.poster_path}`"
      alt=""
    />
    <div class="single__data">
      <h1 class="single__data__title">{{ this.movieData.title }}</h1>
      <p class="single__data__subtitle">{{ this.movieData.tagline }}</p>
      <div class="single__data__info">
        <StarRating
          class="stars"
          :rating="rating"
          :increment="SRConfig.increment"
          :star-size="SRConfig.starSize"
          :read-only="SRConfig.readOnly"
          :fixed-points="SRConfig.fixedPoints"
          :round-start-rating="SRConfig.roundStartRating"
          :active-color="SRConfig.activeColor"
          :animate="SRConfig.animate"
          :text-class="SRConfig.textClass"
          :padding="SRConfig.padding / 2"
        />
        <div class="single__data__meta">
          <span
            class="single__data__meta__item"
            v-for="(language, $index) in this.movieData.spoken_languages"
            :key="$index"
            >{{ language.english_name }}</span
          >
          <span class="single__data__meta__item">|</span>
          <span class="single__data__meta__item"
            >{{ this.movieData.runtime }} MIN</span
          >
          <span class="single__data__meta__item">|</span>
          <span class="single__data__meta__item">{{
            this.getReleaseYear()
          }}</span>
        </div>
      </div>
      <h4 class="single__data__titles">Synopsis</h4>
      <p class="single__data__synopsis">{{ this.movieData.overview }}</p>
      <h4 class="single__data__titles">Genres</h4>
      <ul class="single__data__genre__ul">
        <RouterLink
          class="single__data__genre__ul__li__link"
          v-for="(genre, $index) in this.movieData.genres"
          :key="$index"
          :to="{
            name: 'Genre',
            params: { id: genre.id },
          }"
        >
          <li class="single__data__genre__ul__li">
            <i class="ri-movie-2-line"></i>
            {{ genre.name }}
          </li>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import "remixicon/fonts/remixicon.css";

export default {
  name: "MovieSingle",
  props: ["id"],
  components: {
    StarRating,
  },
  created() {
    this.$store.commit("setSelectedMovieId", this.movieId);
    this.$store.dispatch("getMovieDataFromAPI");
  },
  methods: {
    getReleaseYear() {
      if (this.movieData.release_date) {
        const releaseYear = this.movieData.release_date.substring(0, 4);
        return releaseYear;
      }
    },
  },
  computed: {
    movieId() {
      return this.$route.params.id;
    },
    movieData() {
      return this.$store.state.selectedMovieData;
    },
    rating() {
      return this.movieData.vote_average / 2;
    },
    SRConfig() {
      return this.$store.getters.getStarRatingConfig;
    },
  },
};
</script>

<style lang="scss" scoped>
.single__container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 65%;
  margin: 10vh auto 0 auto;

  .movie-card__img {
    width: 30%;
    border-radius: 8px;
    height: auto;
    box-shadow: $cardShadow;
  }
  .single__data {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    margin-left: 2em;

    .single__data__titles {
      margin: 1em 0 0.5em 0;
      font-size: 16px;
      font-weight: 500;
    }

    .single__data__synopsis {
      font-size: 14px;
      letter-spacing: 0.5px;
      line-height: 1.3em;
    }
    .single__data__title {
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 400;
      margin: 0;
      padding: 0;
    }

    .single__data__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 0;
      width: 80%;

      /* No funciona */
      .rating_text {
        font-size: 8px !important;
        background-color: chartreuse;
      }
    }

    .single__data__subtitle {
      font-size: 12px;
      margin-top: 0.2em;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }

    .single__data__meta {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1em;
      .single__data__meta__item {
        color: #b8b8b8;
      }
    }
    .single__data__synopsis {
      margin: 0;
      width: 80%;
    }

    .single__data__genre__ul {
      display: flex;
      gap: 1em;
      margin: 0;
      padding: 0;
      justify-content: flex-start;
      align-items: center;
      text-decoration: none;
      padding-bottom: 2em;
      .single__data__genre__ul__li__link {
        text-decoration: none;

        .single__data__genre__ul__li {
          list-style-type: none;
          margin: 0;
          background-color: white;
          padding: 0.5em 1em;
          color: $primaryColor;
          font-size: 14px;
          font-weight: 500;

          .ri-movie-2-line{
            margin-right: .5em;
            font-size: 12px;
          }

          &:hover {
            background-color: $primaryColorHover;
              color: white;
              .ri-movie-2-line{
                color: white;
              }
          }
        }
      }
    }
  }

  @media (max-width: $breakpointLaptop) {
    .single__data__info {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start !important;
      gap: 0.5em;
    }
  }
  @media (max-width: $breakpointTablet) {
    flex-direction: column;
    .movie-card__img {
      min-width: 50%;
      height: auto;
    }

    .single__data {
      margin: 1em 0 0 0;
    }
  }
}
</style>
