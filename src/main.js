import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/scss/global.scss";
import Loading from "./components/Loading.vue";

createApp(App)
  .use(store)
  .component("Loading", Loading)
  .use(router)
  .mount("#app");
