<template>
  <div class="single__container">
    <div v-if="!loadingState" class="single__container__movie">
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
              >{{ this.movieData.runtime }}min</span
            >
            <span class="single__data__meta__item">|</span>
            <span class="single__data__meta__item">{{
              this.getReleaseYear()
            }}</span>
          </div>
        </div>
        <h4 class="single__data__secondary__titles">Synopsis</h4>
        <p class="single__data__synopsis">{{ this.movieData.overview }}</p>
        <h4 class="single__data__secondary__titles">Genres</h4>
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
    <Loading v-else />
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import "remixicon/fonts/remixicon.css";
import Loading from "../components/Loading.vue";
import { mapState,  mapActions , mapMutations, mapGetters } from "vuex";
export default {
  name: "MovieSingle",
  props: ["id"],
  components: {
    StarRating,
    Loading,
  },
  created() {
    this.setSelectedMovieId(this.movieId);
    this.getMovieDataFromAPI();
  },
  methods: {
    ...mapMutations({
    setSelectedMovieId: "setSelectedMovieId",
  }),
  ...mapActions({
    getMovieDataFromAPI: "getMovieDataFromAPI",
  }),
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
    ...mapState({
      movieData: "selectedMovieData",
      loadingState: 'isLoading',
    }),
    rating() {
      return this.movieData.vote_average / 2;
    },
    ...mapGetters({
      SRConfig: "getStarRatingConfig",
    })
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

  .single__container__movie {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .movie-card__img {
      width: 30%;
      border-radius: $movieCardBorder;
      height: auto;
      box-shadow: $cardShadow;
    }
    .single__data {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      height: 100%;
      margin-left: 2em;

      .single__data__title {
        font-size: $h2Size;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 400;
        margin: 0;
        padding: 0;
      }

      .single__data__secondary__titles {
        margin: 1em 0 0.5em 0;
        font-size: $h5Size;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: $letterSpacing;
      }

      .single__data__synopsis {
        font-size: 14px;
        letter-spacing: 0.5px;
        line-height: 1.3em;
      }

      .single__data__info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        width: 80%;
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
          color: $secondaryText;
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
            display: flex;
            align-items: center;
            list-style-type: none;
            margin: 0;
            background-color: white;
            padding: 0.5em 1em;
            color: $primaryColor;
            font-size: $clickableTextSize;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: $letterSpacing;

            .ri-movie-2-line {
              margin-right: 0.5em;
              font-size: $clickableTextSize;
            }

            &:hover {
              background-color: $primaryColorHover;
              color: white;
              .ri-movie-2-line {
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
}
</style>
