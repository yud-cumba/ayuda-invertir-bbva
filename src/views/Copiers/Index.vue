<template>
  <div>
    <h3 class="mt-1">Tus especialistas de inversión</h3>
    <h5 class="grey--text">Tops en rentabilidad</h5>
    <ListTopCopiers/>
    <ListCopiers/>
  </div>

</template>

<script>
import ListTopCopiers from './ListTopCopiers.vue';
import ListCopiers from './ListCopiers.vue';

export default {
  name: 'Copiers',
  components: {
    ListTopCopiers,
    ListCopiers,
  },
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
};
</script>

<style lang='scss' scoped></style>
