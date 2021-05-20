<template>
  <div class="iqra">
    <div class="iqra-header text-center py-5 text-light">
      <div class="container">
        <h3 class="judul-api mb-3">PDF Iqra 1 - 6</h3>
        <back-router></back-router>
      </div>
    </div>
    <div class="isi-iqra py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-4 mt-4" v-for="i of 6" :key="i">
            <a :href="url + i" target="_blank">
              <Card>
                <img src="../assets/img/iqra.png" alt="" />
                <h5 class="card-title mt-3">Iqra {{ i }}</h5>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  components: {
    Card
  },
  data: () => ({
    url: "https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra"
  })
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
.iqra {
  .iqra-header {
    background-color: $tua;
  }
  .isi-iqra {
    a {
      &:hover {
        text-decoration: none;
      }
      color: #000;
    }
    .card {
      img {
        width: 30%;
      }
      transition: 0.3s all;
      &:hover {
        color: #fff;
        background-color: $tua;
      }
    }
  }

  padding: 71px 0 0 0;
}
</style>
