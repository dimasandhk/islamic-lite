<template>
  <div class="kisah-nabi">
    <div class="kisah-header text-center text-light py-5">
      <div class="container">
        <h3 class="judul-api mb-3">Kisah Nabi</h3>
        <back-router></back-router>
        <div class="row justify-content-center mt-3">
          <div class="col-12 col-md-12 col-lg-7">
            <input
              v-show="listKisah.length > 0"
              @keydown="searchKisah"
              v-model="qKisah"
              type="text"
              placeholder="Nama Nabi"
              class="form-control shadow-none"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="isi-kisah py-5">
      <div class="container">
        <div class="row justify-content-center" v-if="!qKisah">
          <Loading v-show="listKisah.length == 0" />
          <div
            class="col-12 col-md-12 col-lg-6 mt-4"
            v-for="(kisah, i) of listKisah"
            :key="kisah"
          >
            <Card>
              <h4 class="card-title text-left">
                {{ kisah.name }}<br />({{ kisah.tmp }})
              </h4>
              <p class="card-subtitle mt-2 text-left">
                {{ kisah.description.substring(0, 250) }} ...<br />
                <router-link
                  :to="'/kisah-nabi/detail?id=' + i"
                  class="mt-3 text-left"
                  >Detail</router-link
                >
              </p>
            </Card>
          </div>
        </div>
        <div class="row justify-content-center" v-else>
          <div
            class="col-12 col-md-12 col-lg-6 mt-4"
            v-for="kisah of searchRes"
            :key="kisah"
          >
            <Card>
              <h4 class="card-title text-left">
                {{ kisah.name }}<br />({{ kisah.tmp }})
              </h4>
              <p class="card-subtitle mt-2 text-left">
                {{ kisah.description.substring(0, 250) }} ...<br />
                <router-link
                  :to="'/kisah-nabi/detail?id=' + kisah.id"
                  class="mt-3 text-left"
                  >Detail</router-link
                >
              </p>
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
    listKisah: [],
    qKisah: "",
    searchRes: []
  }),
  async created() {
    let i = -1;
    const kisah = await this.getKisah();
    kisah.forEach((list) =>
      this.listKisah.push({
        id: ++i,
        name: list.name,
        description: list.description,
        tmp: list.tmp
      })
    );
  },
  methods: {
    getKisah() {
      return fetch(this.$store.state.kisahPath)
        .then((res) => res.json())
        .then((res) => res.result);
    },
    searchKisah() {
      this.searchRes.length = 0;
      const result = this.listKisah.filter(({ name }) =>
        name.toLowerCase().includes(this.qKisah.toLowerCase())
      );

      result.forEach((kisah) => this.searchRes.push(kisah));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
.kisah-nabi {
  .kisah-header {
    background-color: $tua;
  }

  .isi-kisah {
    .card-title {
      font-weight: 700;
    }
    a {
      color: #333;
      font-weight: 700;
    }
  }
  padding: 71px 0 0 0;
}
</style>
