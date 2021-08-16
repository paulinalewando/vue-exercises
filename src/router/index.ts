import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/1",
    name: "Exercise1",
    component: () =>
      import(/* webpackChunkName: "exercises" */ "../views/Exercise1.vue"),
  },
  {
    path: "/2",
    name: "Exercise2",
    component: () =>
      import(/* webpackChunkName: "exercises" */ "../views/Exercise2.vue"),
  },
  {
    path: "/3",
    name: "Exercise3",
    component: () =>
      import(/* webpackChunkName: "exercises" */ "../views/Exercise3.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
