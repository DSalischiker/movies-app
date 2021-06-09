import Vue from "vue";
import Vuex from "vuex";
import { API } from "../api";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movies: [],
    genres: [],
    selectedGenreId: null,
    moviesByGenre: [],
    selectedMovieId: null,
    selectedMovieData: {},
    isLoading: false,
    starRatingConfig: {
      increment: 0.1,
      starSize: 13,
      readOnly: true,
      fixedPoints: 1,
      roundStartRating: false,
      activeColor: "#744081",
      animate: true,
      textClass: "rating_text",
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
    setLoadingState(state, loadingState){
      state.isLoading = loadingState;
    }
  },
  actions: {
    getMovies({ commit }) {
      return new Promise((resolve, reject) => {
        commit("setLoadingState", true);
        API.get(`movie/popular?api_key=${process.env.VUE_APP_API_KEY}`)
          .then((response) => {
            commit("setMovies", response.data.results);
            commit("setLoadingState", false);
            resolve(response);
          })
          .catch((error) => {
            console.error(error);
            commit("setLoadingState", false);
            reject(error);
          });
      });
    },
    getGenres({ commit }) {
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
    getMoviesByGenre({commit}, id){
      return new Promise((resolve, reject) => {
        commit("setLoadingState", true);
        API.get(`/discover/movie?api_key=${process.env.VUE_APP_API_KEY}`, {
          params: {
            with_genres: id,
          }
        })
        .then((response) => {
          commit("setMoviesByGenre", response.data.results);
          commit("setLoadingState", false);
          resolve(response);
        })
        .catch((error) => {
          console.error(error);
          commit("setLoadingState", false);
          reject(error);
        })
      })
    },
    getMovieData({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit("setLoadingState", true);
        API.get(`movie/${state.selectedMovieId}?api_key=${process.env.VUE_APP_API_KEY}`)
          .then((response) => {
            commit("setMovieData", response.data);
            commit("setLoadingState", false);
            resolve(response);
          })
          .catch((error) => {
            console.error(error);
            commit("setLoadingState", false);
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
