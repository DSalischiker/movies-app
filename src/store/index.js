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
    selectedMovieId: null,
    selectedMovieData: {},
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setGenres(state, genres) {
      state.genres = genres;
    },
    setSelectedMovieId(state, id) {
      state.selectedMovieId = id;
    },
    setSelectedGenreId(state, id){
      state.selectedGenreId = id;
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
    /* getGenreListFromAPI({commit, state}){
      return new Promise((resolve, reject) => {
        API.get(``)
      })
    }, */
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
  },
  modules: {},
});

export default store;
