<template>
    <div>
           <v-select
        class="mt-2 mb-0 py-1 rounded-lg text"
        :items="items"
        v-model="selected"
        color="indigo darken-2"
        solo
        dense
        outlined
      ></v-select>
      <v-text-field
        class="py-0 my-0 rounded-lg text"
        label="Buscar"
        v-model="search"
        placeholder="Buscar"
        color="indigo"
        solo
        dense
        outlined
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      <v-col class="py-2 px-0" v-for="product in products" :key="product.productId">
        <CardProduct :product="product"/>
      </v-col>
    </div>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue';
import productsMocks from '@/mocks/products.json';

export default {
  data: () => ({
    selected: 'Todos',
    products: productsMocks,
    items: ['Todos', 'Fondos', 'Criptos', 'Acciones'],
    search: '',
  }),
  components: {
    CardProduct,
  },
  watch: {
    selected() {
      this.products = this.selected === 'Todos' ? productsMocks : productsMocks.filter((e) => e.type === this.selected);
    },
    search() {
      this.products = this.search === '' ? productsMocks : productsMocks.filter((e) => e.name.includes(this.search));
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
