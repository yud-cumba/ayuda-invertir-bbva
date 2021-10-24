<template>
    <div>
      <v-col class="py-2 px-0" v-for="product in products" :key="product.productId">
        <CardProduct :product="product"/>
      </v-col>
    </div>
</template>

<script>
import CardProduct from '@/components/CardPorfolio.vue';
import products from '@/mocks/auto_portfolios.json';

export default {
  data: () => ({
    products,
  }),
  components: {
    CardProduct,
  },
};
</script>

<style lang="scss" scoped>

</style>
