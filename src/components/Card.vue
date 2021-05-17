<template>
  <div class="card">
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
.card {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 24px 0px;
  text-align: center;
  height: 100%;
  border: 2px solid $tua;
}
</style>
