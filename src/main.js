// Initialization
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/scss/global.scss";

// Global Components
import Loading from "./components/Loading.vue";
import routeLink from "./components/Router.vue";

createApp(App)
  .use(store)
  .component("Loading", Loading)
  .component("back-router", routeLink)
  .use(router)
  .mount("#app");
