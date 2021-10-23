<template>
  <div>
    <v-card class="mx-auto px-0 rounded-lg card my-0" max-width="100%">
      <v-list class="d-flex px-1 py-1 px-2">
        <v-list-item-avatar
          class="mx-1 rounded-lg"
          height="50"
          width="50"
          tile
          color="grey"
        >
          <v-img cover src="https://randomuser.me/api/portraits/men/47.jpg"></v-img>
        </v-list-item-avatar>
        <v-row class="d-flex py-6 pr-2 pl-4">
          <h5 class="name ma-1">Jeff Madrid</h5>
          <v-spacer></v-spacer>
          <v-btn
            width="55px"
            class="caption text-capitalize mx-0 mx-2"
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
    <Performance />
    <Profit />
    <FrecuencyTrading />
  </div>
</template>

<script>
import Performance from './Performance.vue';
import FrecuencyTrading from './FrecuencyTrading.vue';
import Profit from './Profit.vue';

export default {
  components: {
    Performance,
    Profit,
    FrecuencyTrading,
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
  width: "100%";
  position: "relative";
}
.name {
  width: 125px;
}
</style>
