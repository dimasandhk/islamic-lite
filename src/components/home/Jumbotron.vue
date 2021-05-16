<template>
  <div class="jumbotron text-center text-light jumbotron-fluid">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-12 col-lg-8">
          <h1 class="display-4">☪ Islamic Lite</h1>
          <p class="lead">
            Penuhi Kebutuhan Islami Harian Anda Di Sini. Akses Kapan Saja Di
            Mana Saja, semuanya lebih mudah dengan islamic lite
          </p>
          <a href="#menu-list" class="btn btn-lg btn-primary shadow-none">
            Ayo Mulai
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
svg {
  margin-top: -100px !important;
}
.jumbotron {
  background-color: #129169;
  .display-4,
  .lead {
    &:not(.lead) {
      font-weight: 600;
    }
    font-weight: 500;
    text-transform: capitalize;
  }
  .btn-primary {
    @include main;
  }
}
@media only screen and (max-width: 768px) {
  .jumbotron {
    .display-4 {
      font-size: 42px;
    }
    .lead {
      font-size: 16px;
    }
  }
}
</style>
