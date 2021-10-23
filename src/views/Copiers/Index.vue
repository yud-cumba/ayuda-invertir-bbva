<template>
  <div>
    <CardCopiers/>
  </div>

</template>

<script>
import CardCopiers from './CardCopiers.vue';

export default {
  name: 'Copiers',
  components: {
    CardCopiers,
  },
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
};
</script>

<style lang='scss' scoped></style>
