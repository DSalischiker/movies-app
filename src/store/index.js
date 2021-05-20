import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    baseURL: "https://api.themoviedb.org/3/",
    movies: [],
    genres: [],
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setGenres(state, genres){
      state.genres = genres;
    }
  },
  actions: {
    getMoviesFromAPI({ commit, getters }) {
      axios
        .get(getters.getMoviesURL)
        .then((response) => {
          commit("setMovies", response.data.results);
        })
        .catch((error) => console.error(error));
    },
    getGenresFromAPI({ commit, getters }) {
      axios
        .get(getters.getGenresURL)
        .then((response) => {
          commit("setGenres", response.data.genres);
        })
        .catch((error) => console.error(error));
    },
  },
  getters: {
    getApiKey: () => {
      return process.env.VUE_APP_API_KEY;
    },
    getMoviesURL: (state, getters) => {
      return `${state.baseURL}movie/popular?api_key=${getters.getApiKey}&language=en-US&page=1`;
    },
    getGenresURL: (state, getters) => {
      return `${state.baseURL}genre/movie/list?api_key=${getters.getApiKey}&language=en-US`;
    },
  },
  modules: {},
});

export default store;
