<template>
  <div class="doa-harian">
    <div class="doa-header py-5 text-center text-light">
      <div class="container">
        <h3 class="judul-api mb-3">Doa Harian</h3>
        <router-link to="/" class="btn btn-primary shadow-none">
          Kembali
        </router-link>
        <div class="row justify-content-center mt-3">
          <div class="col-12 col-md-12 col-lg-7">
            <input
              @keyup="searchDoaByTitle"
              v-model="qDoa"
              v-if="listDoa.length"
              type="text"
              placeholder="Judul Doa"
              class="form-control shadow-none"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="isi-doa py-5">
      <div class="container">
        <div class="row justify-content-center" v-if="!qDoa">
          <Loading v-show="listDoa.length == 0" />
          <div
            class="col-12 col-md-12 col-lg-12 mt-4"
            v-for="doa of listDoa"
            :key="doa"
          >
            <Card>
              <h5 class="card-title text-left" style="font-weight: 700">
                {{ doa.title }}
              </h5>
              <h3 class="card-title text-right">
                {{ doa.arabic }}
              </h3>
              <h6 class="card-title text-right">
                {{ doa.latin }}
              </h6>
              <h6 class="card-subtitle text-left">
                <span style="font-weight: 700">Arti:</span><br />{{
                  doa.translation
                }}
              </h6>
            </Card>
          </div>
        </div>
        <div class="row justify-content-center" v-else>
          <div
            class="col-12 col-md-12 col-lg-12 mt-4"
            v-for="doa of searchRes"
            :key="doa"
          >
            <Card>
              <h5 class="card-title text-left" style="font-weight: 700">
                {{ doa.title }}
              </h5>
              <h3 class="card-title text-right">
                {{ doa.arabic }}
              </h3>
              <h6 class="card-title text-right">
                {{ doa.latin }}
              </h6>
              <h6 class="card-subtitle text-left">
                <span style="font-weight: 700">Arti:</span><br />{{
                  doa.translation
                }}
              </h6>
            </Card>
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
    listDoa: [],
    qDoa: "",
    searchRes: []
  }),
  async created() {
    const {
      result: { data }
    } = await this.getListDoa(this.$store.state.doaPath);

    data.forEach((doa) => this.listDoa.push(doa));
  },
  methods: {
    getListDoa(path) {
      return fetch(path)
        .then((res) => res.json())
        .then((res) => res);
    },
    searchDoaByTitle() {
      this.searchRes = [];
      const result = this.listDoa.filter(({ title }) =>
        title.toLowerCase().includes(this.qDoa.toLowerCase())
      );

      result.forEach((list) => this.searchRes.push(list));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
.doa-harian {
  .doa-header {
    .btn-primary {
      @include main;
    }
    background-color: $tua;
  }
  padding: 71px 0 0 0;
}
@media only screen and (max-width: 768px) {
  .card-title:nth-child(1) {
    margin-bottom: 20px;
  }
  .card-subtitle {
    margin-top: 30px;
  }
}
</style>
