import { createStore } from "vuex";

export default createStore({
  state: {
    menuList: [
      {
        path: "/",
        title: "Al-Quran",
        src: "quran.webp"
      },
      {
        path: "/",
        title: "Hadith",
        src: "hadits.webp"
      },
      {
        path: "/",
        title: "Kisah Nabi",
        src: "lighter.webp"
      },
      {
        path: "/",
        title: "Asmaul Husna",
        src: "allah.webp"
      },
      {
        path: "/",
        title: "Doa Harian",
        src: "praying.webp"
      },
      {
        path: "/",
        title: "Iqra",
        src: "quran.webp"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
