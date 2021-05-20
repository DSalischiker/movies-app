import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=",
    movies: [],
  },
  mutations: {
    setMovies(state, movies){
      state.movies = movies;
    },
  },
  actions: {
    getAPIData({ commit, getters }) {
      axios
        .get(getters.getURL)
        .then((response) => {
          commit("setMovies", response.data.results);
        })
        .catch((error) => console.error(error));
    },
  },
  getters: {
    getURL: (state, getters) => {
      return `${state.baseURL}${getters.getApiKey}&language=en-US&page=1`;
    },
    getApiKey: () => {
      return process.env.VUE_APP_API_KEY;
    },
  },
  modules: {},
});

export default store;
