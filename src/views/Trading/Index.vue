<template>
  <div>
    <v-row class="mx-3">
      <v-select
        class="my-0 py-0 rounded-lg"
        :items="items"
        :value="items[0]"
        color="indigo darken-2"
        solo
        dense
        prepend-inner-icon="mdi-currency-usd"
        outlined
      ></v-select>
      <v-card flat class="d-flex px-8 mb-5">
        <v-img width="200px" src="../../assets/img/trading1.png"></v-img>
      </v-card>
      <v-card>
        <v-img src="../../assets/img/trading.png"></v-img>
      </v-card>
      <v-card width="100%" flat class="d-flex px-8 my-5">
        <v-img src="../../assets/img/trading2.png"></v-img>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  data() {
    return {
      items: ['Bitcoin', 'ETH', 'FTT'],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
