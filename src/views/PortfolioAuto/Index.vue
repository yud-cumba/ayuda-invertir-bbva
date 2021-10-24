<template>
    <div>
        <CardLearn/>
        <ListProducts class="pa-3"/>
    </div>
</template>

<script>
import CardLearn from '../../components/CardLearn.vue';
import ListProducts from './ListProducts.vue';

export default {
  components: { ListProducts, CardLearn },
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
};

</script>

<style lang, ListProducts="scss" scoped>

</style>
