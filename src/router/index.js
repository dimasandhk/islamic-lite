import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: "/asmaul-husna",
    name: "Asmaul",
    component: () => import("../views/Asmaul.vue")
  },
  {
    path: "/hadith",
    name: "Hadith",
    component: () => import("../views/Hadits.vue")
  },
  {
    path: "/doa-harian",
    name: "Doa Harian",
    component: () => import("../views/Doa.vue")
  },
  {
    path: "/iqra",
    name: "Iqra",
    component: () => import("../views/Iqra.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
