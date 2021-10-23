<template>
  <div>
    <v-card flat class="mx-auto rounded-lg card my-0" max-width="100%">
      <v-list class="d-flex px-2 py-1">
        <v-list-item-avatar
          class="mx-1 rounded-lg"
          height="50"
          width="50"
          tile
          color="grey"
        >
          <v-img cover src="https://randomuser.me/api/portraits/men/47.jpg"></v-img>
        </v-list-item-avatar>
        <v-row
          class="d-flex py-6 pr-2 pl-4"
        >
          <h5 class="name ma-1">Jeff Madrid</h5>
          <v-spacer></v-spacer>
          <v-btn
            width="55px"
            class="caption text-capitalize mx-0 px-0"
            color="secondary"
            @click="
              $router.push({
                name: 'CopiersDetails',
                params: { id: copier.copy_bankingId },
              })
            "
            >Copiar
          </v-btn>
        </v-row>
      </v-list>
      </v-card>
      <h5 class="my-3">Performance</h5>
      <v-select
          :items="items"
          :value="items[0]"
          solo
          dense
        ></v-select>
     <Barchart class="chart"/>
     <v-row class="d-flex justify-space-between mx-1 my-2">
        <h5 class="my-3">Rentabilidad</h5>
        <h3 class="teal--text mt-2">76.58%</h3>
     </v-row>
     <v-row class="d-flex justify-space-between ma-1">
       <h5>Trading</h5>
       <v-icon color="primary">mdi-information</v-icon>
     </v-row>
     <h5 class="mx-1">125</h5>
     <p class="grey--text mx-1">Total Traders</p>
    <v-progress-linear
        height="25"
        value="90"
      >
        <strong>10%</strong>
      </v-progress-linear>
    </div>
</template>

<script>
import Barchart from '@/components/BarChart.vue';

export default {
  components: {
    Barchart,
  },
  data() {
    return {
      items: ['2021', '2020'],
    };
  },
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
};
</script>

<style lang="scss" scoped>
.chart {
  height: 100px;
  width: '100%';
  position: 'relative';
}
.name {
  width: 125px;
}
</style>
