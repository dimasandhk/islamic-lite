<template>
  <div class="home">
    <Jumbotron />
    <div id="menu-list" class="pilihan-menu mt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-12 col-lg-12">
            <h3 class="judul-menu text-center">Choose Your Islamic Needs</h3>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-6 col-md-4 col-lg-3">
            <router-link to="/">
              <div class="card-menu text-center">
                <img src="../assets/img/quran.webp" alt="" class="w-50" />
                <h5 class="mt-2">Al-Quran</h5>
              </div>
            </router-link>
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <router-link to="/">
              <div class="card-menu text-center">
                <img src="../assets/img/hadits.webp" alt="" class="w-50" />
                <h5 class="mt-2">Hadith</h5>
              </div>
            </router-link>
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <router-link to="/">
              <div class="card-menu text-center">
                <img src="../assets/img/lighter.webp" alt="" class="w-50" />
                <h5 class="mt-2">Islamic Story</h5>
              </div>
            </router-link>
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <router-link to="/">
              <div class="card-menu text-center">
                <img src="../assets/img/allah.webp" alt="" class="w-50" />
                <h5 class="mt-2">Asmaul Husna</h5>
              </div>
            </router-link>
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <router-link to="/">
              <div class="card-menu text-center">
                <img src="../assets/img/praying.webp" alt="" class="w-50" />
                <h5 class="mt-2">Daily Prayer</h5>
              </div>
            </router-link>
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <router-link to="/">
              <div class="card-menu text-center">
                <img src="../assets/img/quran.webp" alt="" class="w-50" />
                <h5 class="mt-2">Iqra</h5>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "@/components/home/Jumbotron";
export default {
  name: "Home",
  components: {
    Jumbotron
  }
};
</script>

<style lang="scss">
@import "../assets/scss/mixins.scss";
.home {
  margin-top: 70px;

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

  .pilihan-menu {
    .judul-menu {
      font-weight: 700;
      color: $muda;
    }
    .card-menu {
      h5 {
        color: #000;
        &:hover {
          text-decoration: none !important;
        }
      }
      margin-top: 35px;
      border: 2px solid #129169;
      border-radius: 10px;
      padding: 15px;
      cursor: pointer;
      &:hover {
        text-decoration: none !important;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 8px 0px;
      }
      transition: 0.5s all;
    }
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
