import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/me",
    name: "me",
    component: () => import("../views/Me.vue"),
  },
  {
    path: "",
    name: "toolbar",
    component: () => import("../views/Toolbar.vue"),
    children: [
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "/Simple",
        name: "simple",
        component: () => import("../views/Simple.vue"),
      },
      {
        path: "/Apicon",
        name: "Apicon",
        component: () => import("../views/Apicon.vue"),
      },
      {
        path: "/calculate",
        name: "calculate",
        component: () => import("../views/calculate.vue"),
      },
      // {
      //   path: "/calculate",
      //   name: "calculate",
      //   component: () => import("../views/calculate.vue"),
      // },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router