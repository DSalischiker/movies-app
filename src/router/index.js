import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/genre/:id",
    name: "Genre",
    props: true,
    component: () =>
      import(/* webpackChunkName: "GenreList" */ "../views/Genre.vue"),
  },
  {
    path: "/movie/:id",
    name: "MovieSingle",
    props: true,
    component: () =>
      import(/* webpackChunkName: "MovieSingle" */ "../views/MovieSingle.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
