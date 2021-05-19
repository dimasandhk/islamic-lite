<template>
  <div class="quran-baca">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-7">
          <router-link
            to="/quran"
            class="btn btn-primary btn-block shadow-none"
          >
            Kembali
          </router-link>
        </div>
      </div>
      <div class="row justify-content-center">
        <Loading v-show="isiSurat.length == 0" class="mt-4" />
        <div
          class="col-12 col-md-12 col-lg-12 mt-4"
          v-for="ayat of isiSurat"
          :key="ayat"
        >
          <Card>
            <h3 class="card-title font-weight-bold">
              {{ ayat.name.transliteration.id }} ({{ ayat.revelation.id }})
            </h3>
            <div class="row justify-content-center">
              <div class="col-12 col-md-12 col-lg-10">
                <p class="tafsir">
                  {{ ayat.tafsir.id }}
                </p>
              </div>
            </div>
            <div class="row justify-content-center">
              <div
                class="col-12 col-md-12 col-lg-12 mt-4"
                v-for="ayatD of ayatFull[0]"
                :key="ayatD"
              >
                <Card>
                  <div class="row justify-content-end ">
                    <div class="col-2 col-md-6 col-lg-6 text-left">
                      <h3>
                        {{ ayatD.number.inSurah }}
                      </h3>
                    </div>
                    <div class="col-10 col-md-6 col-lg-6 text-right">
                      <audio controls>
                        <source :src="ayatD.audio.primary" />
                      </audio>
                    </div>
                  </div>
                  <h3 class="card-title mt-3 text-right">
                    {{ ayatD.text.arab }}
                  </h3>
                  <h6 class="card-title text-right">
                    {{ ayatD.text.transliteration.en }}
                  </h6>
                  <hr />
                  <h6 class="card-subtitle mt-3 text-left">
                    <span class="font-weight-bold">Arti:</span><br />
                    {{ ayatD.translation.id }}
                  </h6>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  components: {
    Card
  },
  data() {
    return {
      isiSurat: [],
      ayatFull: []
    };
  },
  async created() {
    const index = this.$route.query.id;
    const quran = await this.getSuratById(index - 1);

    this.ayatFull.push(quran.verses);
    this.isiSurat.push(quran);
  },
  methods: {
    getSuratById(index) {
      return fetch(this.$store.state.quranPath)
        .then((res) => res.json())
        .then((res) => res.result.data[index]);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
.quran-baca {
  .tafsir {
    font-weight: 500;
  }
  .btn-primary {
    border: none !important;
    @include main;
  }
  padding: 71px 0 0 0;
  @media only screen and (max-width: 768px) {
    .tafsir {
      font-size: 12px;
    }
    audio {
      width: 100%;
    }
  }
}
</style>
