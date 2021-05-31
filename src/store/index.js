import Vue from "vue";
import Vuex from "vuex";
import { API } from "../api";
/* import { reject, resolve } from "core-js/fn/promise"; */

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movies: [],
    genres: [],
    selectedGenreId: null,
    moviesByGenre: [],
    selectedMovieId: null,
    selectedMovieData: {},
    starRatingConfig: {
      increment: 0.1,
      starSize: 13,
      readOnly: true,
      fixedPoints: 1,
      roundStartRating: false,
      activeColor: "#744081",
      animate: true,
      textClass: 'rating_text',
      padding: 10,
    }
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setGenres(state, genres) {
      state.genres = genres;
    },
    setSelectedGenreId(state, id){
      state.selectedGenreId = id;
    },
    setMoviesByGenre(state, movies){
      state.moviesByGenre = movies;
    },
    setSelectedMovieId(state, id) {
      state.selectedMovieId = id;
    },
    setMovieData(state, movie) {
      state.selectedMovieData = movie;
    },
  },
  actions: {
    getMoviesFromAPI({ commit }) {
      return new Promise((resolve, reject) => {
        API.get(`movie/popular?api_key=${process.env.VUE_APP_API_KEY}`)
          .then((response) => {
            commit("setMovies", response.data.results);
            resolve(response);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
    getGenresFromAPI({ commit }) {
      return new Promise((resolve, reject) => {
        API.get(`genre/movie/list?api_key=${process.env.VUE_APP_API_KEY}`)
          .then((response) => {
            commit("setGenres", response.data.genres);
            resolve(response);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
    //COMPLETAR LLAMADO A API /discover enviando el id del género por params
    getMoviesByGenreFromAPI({commit, state}){
      return new Promise((resolve, reject) => {
        API.get(`/discover/movie?api_key=${process.env.VUE_APP_API_KEY}`, {
          params: {
            with_genres: state.selectedGenreId,
          }
        })
        .then((response) => {
          commit("setMoviesByGenre", response.data.results);
          resolve(response);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        })
      })
    },
    getMovieDataFromAPI({ commit, state }) {
      return new Promise((resolve, reject) => {
        API.get(`movie/${state.selectedMovieId}?api_key=${process.env.VUE_APP_API_KEY}`)
          .then((response) => {
            commit("setMovieData", response.data);
            resolve(response);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
  },
  getters: {
    getStarRatingConfig: state => {
      return state.starRatingConfig;
    }
  },
  modules: {},
});

export default store;
