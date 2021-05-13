<template>
  <div class="home">
    <Jumbotron />
    <Menu />
    <div class="quotes-random">
      <div class="container"></div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "@/components/home/Jumbotron";
import Menu from "../components/home/Menu";
export default {
  name: "Home",
  components: {
    Jumbotron,
    Menu
  }
};
</script>

<style lang="scss">
.home {
  margin-top: 70px;
}
</style>
