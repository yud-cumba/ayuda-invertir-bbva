<template>
<div>
    <h1>HACKATON BBVA :v</h1>
    <!-- <CardProduct/> -->
</div>
</template>

<script>
// import CardProduct from '@/components/CardProduct.vue';

export default {
  name: 'Home',
  async created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  // components: {
  //   CardProduct,
  // },
};
</script>
