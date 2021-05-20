<template>
  <div class="kisah-detail">
    <div class="container">
      <div class="row justify-content-center mt-3">
        <div class="col-12 col-md-12 col-lg-6">
          <router-link
            to="/kisah-nabi"
            class="btn btn-primary shadow-none btn-block"
          >
            Kembali
          </router-link>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <Loading v-show="!showCard" />
        <div v-show="showCard" class="col-12 col-md-12 col-lg-12">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title text-left"></h3>
              <h6 class="card-subtitle text-left mt-3"></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    filtered: [],
    showCard: false
  }),
  async created() {
    const kisahFiltered = await this.getKisahByIndex();
    this.filtered.push(kisahFiltered);
    document.querySelector(
      ".card-title"
    ).innerHTML = `${this.filtered[0].name}<br>(${this.filtered[0].tmp})`;
    document.querySelector(
      ".card-subtitle"
    ).innerHTML = this.filtered[0].description.replace(
      /(?:\r\n|\r|\n)/g,
      "<br>"
    );
    this.showCard = true;
  },
  methods: {
    getKisahByIndex() {
      let id = this.$route.query.id;
      if (id) {
        if (id >= 28) {
          alert("Id Tidak Dapat Ditemukan!");
          id = 0;
        }
      } else {
        id = 0;
      }

      return fetch(this.$store.state.kisahPath)
        .then((res) => res.json())
        .then((res) => res.result[id]);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins.scss";
.kisah-detail {
  .card {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 24px 0px;
    text-align: center;
    height: 100%;
    border: 2px solid $tua;
  }
  .card-title {
    font-weight: 700;
  }
  .btn-primary {
    border: none !important;
    @include main;
  }
  padding: 71px 0 70px 0;
}
</style>
