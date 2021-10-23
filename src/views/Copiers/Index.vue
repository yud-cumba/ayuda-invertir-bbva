<template>
  <div>
    <h5 class="mb-4 mt-1">Tus especialistas de inversión</h5>
    <CardCopier/>
    <ListCopiers/>
  </div>

</template>

<script>
import CardCopier from '@/components/CardCopier.vue';
import ListCopiers from './ListCopiers.vue';

export default {
  name: 'Copiers',
  components: {
    CardCopier,
    ListCopiers,
  },
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
};
</script>

<style lang='scss' scoped></style>
