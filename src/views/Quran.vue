<template>
  <div class="quran">
    <div class="quran-header py-5 text-center text-light">
      <div class="container">
        <h3 class="judul-api mb-3">Alquran</h3>
        <back-router></back-router>
        <div class="row justify-content-center mt-3">
          <div class="col-12 col-md-12 col-lg-7">
            <input
              v-model="qSurat"
              @keydown="searchSurat"
              v-show="listSurat.length > 0"
              type="text"
              placeholder="Nama Surat"
              class="form-control shadow-none"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="isi-quran py-5">
      <div class="container">
        <div class="row justify-content-center" v-if="!qSurat">
          <Loading v-show="listSurat.length == 0" />
          <div
            class="col-12 col-md-12 col-lg-6 mt-4"
            v-for="(surat, i) of listSurat"
            :key="surat"
          >
            <Card>
              <div class="row">
                <div class="col-6 col-md-6 col-lg-6">
                  <h6 class="card-title font-weight-bold text-left">
                    {{ surat.name.transliteration.id }} ({{ i + 1 }})
                    <br />
                    {{ surat.name.translation.id }} ({{ surat.numberOfVerses }})
                  </h6>
                </div>
                <div class="col-6 col-md-6 col-lg-6">
                  <h3 class="card-title arab-title font-weight-bold text-right">
                    {{ surat.name.short }}
                  </h3>
                </div>
              </div>
              <router-link
                :to="'/quran/baca?id=' + (i + 1)"
                class="btn btn-primary btn-block btn-sm mt-3 shadow-none"
              >
                Baca
              </router-link>
            </Card>
          </div>
        </div>
        <div class="row justify-content-center" v-else>
          <div
            class="col-12 col-md-12 col-lg-6 mt-4"
            v-for="surat of searchRes"
            :key="surat"
          >
            <Card>
              <div class="row">
                <div class="col-6 col-md-6 col-lg-6">
                  <h6 class="card-title font-weight-bold text-left">
                    {{ surat.name.transliteration.id }} ({{ surat.number }})
                    <br />
                    {{ surat.name.translation.id }} ({{ surat.numberOfVerses }})
                  </h6>
                </div>
                <div class="col-6 col-md-6 col-lg-6">
                  <h3 class="card-title arab-title font-weight-bold text-right">
                    {{ surat.name.short }}
                  </h3>
                </div>
              </div>
              <router-link
                :to="'/quran/baca?id=' + surat.number"
                class="btn btn-primary btn-block btn-sm mt-3 shadow-none"
              >
                Baca
              </router-link>
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
  data() {
    return {
      listSurat: [],
      qSurat: "",
      searchRes: []
    };
  },
  async created() {
    const {
      result: { data }
    } = await this.getQuran();

    data.forEach((list) => {
      this.listSurat.push(list);
    });
  },
  methods: {
    getQuran() {
      return fetch(this.$store.state.quranPath)
        .then((res) => res.json())
        .then((res) => res);
    },
    searchSurat() {
      this.searchRes.length = 0;
      const result = this.listSurat.filter((surat) =>
        surat.name.transliteration.id
          .toLowerCase()
          .includes(this.qSurat.toLowerCase())
      );

      result.forEach((surat) => {
        this.searchRes.push(surat);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
.quran {
  .quran-header {
    background-color: $tua;
  }

  .isi-quran {
    .btn-primary {
      border: 1.5px solid $tua !important;
      @include main;
    }
  }

  padding: 71px 0 0 0;

  @media only screen and (max-width: 768px) {
    .isi-quran {
      h6 {
        font-size: 12px;
      }
      .arab-title {
        font-size: 20px;
      }
    }
  }
}
</style>
