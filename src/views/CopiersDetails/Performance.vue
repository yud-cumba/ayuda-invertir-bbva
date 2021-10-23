<template>
    <div>
      <h4 class="my-3">Performance</h4>
      <v-select
          class="my-0 py-0 rounded-xl"
          :items="items"
          :value="items[0]"
          color="indigo darken-2"
          solo
          dense
          outlined
        ></v-select>
      <Barchart class="chart my-0 py-0"/>
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
};
</script>

<style lang="scss" scoped>
.chart {
  height: 100px;
  width: '100%';
  position: 'relative';
}
</style>
