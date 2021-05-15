<template>
  <div class="home">
    <Jumbotron />
    <Menu />
    <div class="quotes-random">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-12 col-md-12 col-lg-12">
            <h3 class="h-quotes">Quotes Untuk Memulai Hari</h3>
          </div>
          <div class="col-12 col-md-12 col-lg-8 mt-4">
            <div
              class="quote-container"
              v-for="quote of quoteContainer"
              :key="quote.id"
            >
              <h3 class="arabic">{{ quote.arabic }}</h3>
              <p class="arti">" {{ quote.arti }} "</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="kata-penutup">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-12 col-md-12 col-lg-12">
            <h2 class="kata">
              بَلِّغُوا عَنِّى وَلَوْ آيَة
            </h2>
            <h5>
              "Sampaikanlah dariku walau hanya satu ayat"
            </h5>
          </div>
        </div>
      </div>
    </div>
    <footer class="text-center text-muted py-3">
      <hr />
      Islamic Lite by Dimas Andhika
    </footer>
  </div>
</template>

<script>
import Jumbotron from "@/components/home/Jumbotron";
import Quote from "../assets/json/quotes.min.js";
import Menu from "../components/home/Menu";

export default {
  data: () => ({
    quoteContainer: []
  }),
  name: "Home",
  components: {
    Jumbotron,
    Menu
  },
  async created() {
    const index = Math.floor(Math.random() * 24);
    this.quoteContainer.push(await this.showQuote(index));
  },
  methods: {
    async showQuote(index) {
      return Quote[index];
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/mixins.scss";
.home {
  padding-top: 71px;
  .quotes-random {
    background-color: $muda;
    color: #fff;
    padding: 50px 0;
    margin-top: 70px;
    .h-quotes {
      font-weight: 700;
    }
  }

  .kata-penutup {
    padding: 60px 0;
    .kata {
      font-weight: 500;
    }
  }
}
@media only screen and (max-width: 768px) {
  .arabic {
    font-size: 22px;
  }
  .arti {
    font-size: 12px;
  }
}
</style>
