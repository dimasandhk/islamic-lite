<template>
  <div id="menu-list" class="pilihan-menu  mb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-12 col-lg-12">
          <h2 class="judul-menu text-center">Pilih Kebutuhan Islamimu</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-6 col-md-4 col-lg-3"
          v-for="(list, i) of listItem"
          :key="i"
        >
          <router-link :to="list.path">
            <div class="card-menu cd-menu-1 text-center">
              <img
                :src="require(`@/assets/img/${list.src}`)"
                alt=""
                class="w-50"
              />
              <h5 class="mt-2">{{ list.title }}</h5>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    listItem: undefined
  }),
  created() {
    this.listItem = this.$store.state.menuList;
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins.scss";
.col-6 {
  a {
    text-decoration: none !important;
    color: #000;
  }
}
.pilihan-menu {
  padding-top: 5rem;
  .judul-menu {
    font-weight: 700;
    color: $muda;
  }
  .card-menu {
    margin-top: 25px;
    border: 3px solid #129169;
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    &:hover {
      background-color: #129169;
      color: #fff !important;
      box-shadow: rgba(0, 0, 0, 0.75) 0px 7px 14px 0px;
    }
    transition: 0.4s all;
  }
}
@media only screen and (max-width: 768px) {
  .card-menu {
    h5 {
      font-size: 16px;
    }
  }
}
</style>
