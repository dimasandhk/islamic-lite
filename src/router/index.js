import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
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
  },
  {
    path: "/kisah-nabi",
    name: "Kisah Nabi",
    component: () => import("../views/Kisah.vue")
  },
  {
    path: "/kisah-nabi/detail",
    component: () => import("../views/KisahDetail.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
