import axios from "axios";

const API = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    Authorization: process.env.VUE_APP_API_KEY,
  },
});

export { API };