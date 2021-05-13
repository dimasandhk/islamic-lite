<template>
  <div class="jumbotron text-center text-light jumbotron-fluid">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-12 col-lg-8">
          <h1 class="display-4">☪ Islamic Lite</h1>
          <p class="lead">
            Fulfill Your Islamic Needs Every Day Here. Access Anytime Anywhere,
            all easier with islamic lite
          </p>
          <a href="#menu-list" class="btn btn-lg btn-primary shadow-none">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins.scss";
.jumbotron {
  background-color: #129169;
  .display-4,
  .lead {
    font-weight: 500;
  }
  .btn-primary {
    @include main;
  }
}
@media only screen and (max-width: 768px) {
  .home {
    .jumbotron {
      .lead {
        font-size: 16px;
      }
    }
  }
}
</style>
