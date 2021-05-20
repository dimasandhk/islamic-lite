<template>
  <div class="hadith">
    <div class="header-hadits text-center py-5 text-light">
      <div class="container">
        <h3 class="judul-api mb-3">Kumpulan Hadith</h3>
        <back-router></back-router>
        <div class="row justify-content-center mt-3">
          <div class="col-12 col-md-12 col-lg-7">
            <select
              v-show="result.length > 0"
              class="form-control select-nama shadow-none"
              @change="changeSelected"
            >
              <option value="abu-daud">Abu Daud</option>
              <option value="bukhari">Bukhari</option>
              <option value="muslim">Muslim</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="isi-hadits py-5">
      <div class="container">
        <div class="row justify-content-center">
          <Loading v-show="result.length == 0" />
          <div
            v-show="selected == 'abu-daud'"
            class="col-12 col-md-12 col-lg-12 mt-4"
            v-for="list of result[0]"
            :key="list"
          >
            <Card>
              <h3 class="card-title text-right">
                {{ list.arab }}
              </h3>
              <h6 class="card-subtitle mt-lg-3 text-left">
                <span style="font-weight: 700">Arti ({{ list.number }}):</span
                ><br />{{ list.id }}
              </h6>
            </Card>
          </div>
          <div
            class="col-12 col-md-12 col-lg-12 mt-4"
            v-show="selected == 'bukhari'"
            v-for="list of result[1]"
            :key="list"
          >
            <Card>
              <h3 class="card-title text-right">
                {{ list.arab }}
              </h3>
              <h6 class="card-subtitle mt-lg-3 text-left">
                <span style="font-weight: 700">Arti ({{ list.number }}):</span
                ><br />{{ list.id }}
              </h6>
            </Card>
          </div>
          <div
            class="col-12 col-md-12 col-lg-12 mt-4"
            v-show="selected == 'muslim'"
            v-for="list of result[2]"
            :key="list"
          >
            <Card>
              <h3 class="card-title text-right">
                {{ list.arab }}
              </h3>
              <h6 class="card-subtitle mt-lg-3 text-left">
                <span style="font-weight: 700">Arti ({{ list.number }}):</span
                ><br />{{ list.id }}
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
    selected: "abu-daud",
    availableName: ["abu-daud", "bukhari", "muslim"],
    result: []
  }),
  created() {
    this.availableName.forEach(async (name) => {
      const hadith = await this.getAllHadith(name);
      const filtered = hadith.filter((list) => list.number <= 20);

      this.result.push(filtered);
    });
  },
  methods: {
    getAllHadith(name) {
      return fetch(this.$store.state.hadithPath + name)
        .then((res) => res.json())
        .then((res) => res);
    },
    changeSelected() {
      const selectBox = document.querySelector(".select-nama");
      this.selected = selectBox.options[selectBox.selectedIndex].value;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
.hadith {
  .header-hadits {
    background-color: $tua;
  }
  .btn-primary {
    @include main;
  }
  padding: 71px 0 0 0;
}
@media only screen and (max-width: 768px) {
  .card-title {
    font-size: 24px;
  }
  .card-subtitle {
    font-size: 14px;
  }
}
</style>
