<template>
  <div class="asmaul">
    <div class="header-asmaul py-5">
      <div class="container text-center">
        <h3 class="judul-api mb-3">99 Nama Allah</h3>
        <back-router></back-router>
        <div class="row justify-content-center mt-3">
          <div class="col-12 col-md-12 col-lg-7">
            <input
              v-if="arrAsmaul.length > 0"
              v-model="asmaulQuery"
              @keyup="searchAsmaul"
              type="text"
              class="form-control shadow-none"
              placeholder="Cari Asmaul Husna"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="isi-asmaul py-5">
      <div class="container">
        <div class="row justify-content-center" v-if="asmaulQuery == ''">
          <Loading v-show="arrAsmaul.length == 0" />
          <div
            v-show="arrAsmaul.length > 0 && !asmaulQuery"
            class="col-6 col-md-4 col-lg-3 col-asmaul"
            v-for="asmaul of arrAsmaul"
            :key="asmaul.id"
          >
            <asmaul-card>
              <h3 class="card-title">{{ asmaul.arabic }}</h3>
              <h5 class="card-subtitle mb-2">{{ asmaul.latin }}</h5>
              <h6 class="card-text">
                {{ asmaul.translation_id }}
              </h6>
            </asmaul-card>
          </div>
        </div>
        <div class="row justify-content-center" v-else>
          <div
            class="col-6 col-md-4 col-lg-3 col-asmaul"
            v-for="asmaul of searchResults"
            :key="asmaul"
          >
            <asmaul-card>
              <h3 class="card-title">{{ asmaul.arabic }}</h3>
              <h5 class="card-subtitle mb-2">{{ asmaul.latin }}</h5>
              <h6 class="card-text">
                {{ asmaul.translation_id }}
              </h6>
            </asmaul-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  data: () => ({
    arrAsmaul: [],
    asmaulQuery: "",
    searchResults: []
  }),
  components: {
    "asmaul-card": Card
  },
  async created() {
    const {
      result: { data }
    } = await this.getAsmaul();

    data.forEach((asmaul) => {
      this.arrAsmaul.push(asmaul);
    });
  },
  methods: {
    getAsmaul() {
      return fetch(this.$store.state.asmaulPath)
        .then((res) => res.json())
        .then((res) => res);
    },
    searchAsmaul() {
      this.searchResults.length = 0;
      const result = this.arrAsmaul.filter(({ latin }) =>
        latin.toLowerCase().includes(this.asmaulQuery.toLowerCase())
      );

      result.forEach((selected) => {
        this.searchResults.push(selected);
      });

      console.log(this.searchResults, this.searchResults.length);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
.asmaul {
  .col-asmaul {
    margin-top: 30px;
  }
  .header-asmaul {
    background-color: $tua;
  }

  padding-top: 71px;
}
@media only screen and (max-width: 768px) {
  .card-text {
    font-size: 12px;
  }
  .card-title {
    font-size: 22px;
  }
}
</style>
