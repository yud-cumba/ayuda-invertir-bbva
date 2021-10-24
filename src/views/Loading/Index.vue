<template>
   <div class="flex-column view d-flex justify-center align-center">
      <v-img  class="orbit" max-height="150" src="@/assets/img/Loading.png"></v-img>
      <v-img  max-height="225" src="@/assets/img/Orbit.png"></v-img>
      <p class="px-12 mt-3 text-center">Estamos buscando los mejores portafolios de inversión para tí...</p>
   </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
    setTimeout(() => {
      this.$router.push({ name: 'PortfolioAuto' });
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
.view{
  height: 60vh;
  width: 100vw;
}
.orbit{
  position: relative;
  top: 200px;
}
</style>
