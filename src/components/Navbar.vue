<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">☪ Islamic Lite</router-link>
      <toggle-button></toggle-button>
      <navbar-container>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/">About</router-link>
        <a class="btn btn-primary shadow-none" :href="urlDocs" target="_blank"
          >API Docs</a
        >
      </navbar-container>
    </div>
  </nav>
</template>

<script>
import button from "./navbar/button.vue";
import container from "./navbar/container.vue";

export default {
  data: () => ({
    urlDocs: "https://github.com/Zhirrr/islamic-rest-api-indonesian-v2"
  }),
  components: {
    "toggle-button": button,
    "navbar-container": container
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
.navbar {
  .nav-link {
    @extend .navbar-brand;
    &:hover {
      text-decoration: underline;
    }
    color: #fff !important;
    margin-right: 25px;
  }
  .navbar-brand {
    font-weight: 700;
  }
  .btn-primary {
    @include main;
  }
  border-bottom: 1px solid $muda;
  padding: 15px;
  background-color: #129169;
}
</style>
