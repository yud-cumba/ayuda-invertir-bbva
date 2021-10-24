<template>
    <div>
        cargando machine learning...
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

</style>
