import { createStore } from "vuex";

export default createStore({
  state: {
    menuList: [
      {
        path: "/quran",
        title: "Al-Quran",
        src: "quran.webp"
      },
      {
        path: "/hadith",
        title: "Hadith",
        src: "hadits.webp"
      },
      {
        path: "/kisah-nabi",
        title: "Kisah Nabi",
        src: "lighter.webp"
      },
      {
        path: "/asmaul-husna",
        title: "Asmaul Husna",
        src: "allah.webp"
      },
      {
        path: "/doa-harian",
        title: "Doa Harian",
        src: "praying.webp"
      },
      {
        path: "/iqra",
        title: "Iqra",
        src: "iqra.png"
      }
    ],
    asmaulPath:
      "https://islamic-api-indonesia.herokuapp.com/api/data/json/asmaulhusna",
    hadithPath:
      "https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/",
    doaPath:
      "https://islamic-api-indonesia.herokuapp.com/api/data/json/doaharian",
    kisahPath:
      "https://islamic-api-indonesia.herokuapp.com/api/data/json/kisahnabi",
    quranPath: "https://islamic-api-indonesia.herokuapp.com/api/data/json/quran"
  }
});
