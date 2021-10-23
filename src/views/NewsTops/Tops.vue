<template>
    <div>
      <v-col class="py-2 px-0" v-for="product in products" :key="product.productId">
        <CardProduct :product="product"/>
      </v-col>
    </div>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue';
import products from '@/mocks/products.json';

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
