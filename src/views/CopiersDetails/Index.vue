<template>
  <div>
    <v-card class="rounded-lg" min-width="282">
      <v-list color="primary" class="d-flex pa-2">
        <v-list-item-avatar
          class="mx-1 rounded-lg"
          height="80"
          width="135"
          tile
          color="grey"
        >
          <v-img cover :src="`https://randomuser.me/api/portraits/${copier.img_profile}`"></v-img>
        </v-list-item-avatar>
        <v-row class="d-flex py-6 pr-2 pl-4">
          <h3 class="name ma-1 white--text">{{copier.name}} {{copier.lastname}}</h3>
          <h5 class="caption ml-1 mr-8 white--text">{{copier.follower}} copias</h5>
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
    <Performance :copier="copier" />
    <Profit :copier="copier" />
    <FrecuencyTrading :copier="copier" />
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
  props: {
    copier: {
      type: Object,
    },
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
.card {
  background: blue;
}
</style>
