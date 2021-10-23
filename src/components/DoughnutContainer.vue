<template>
<div class="pb-7" >
  <doughnut
    height="200"
    v-if="data.labels.length > 0"
    :names="data.labels"
    :chartdata="[{
      data: data.values
    }]"
  />
</div>
</template>

<script>
import Doughnut from './Doughnut.vue';

export default {
  name: 'doughnut-container',
  props: ['dataField', 'aggregations'],
  computed: {
    data() {
      const { dataField, aggregations } = this;
      const labels = [];
      const values = [];
      if (
        aggregations
        && aggregations[dataField]
        && aggregations[dataField].buckets
      ) {
        aggregations[dataField].buckets.forEach(
          // eslint-disable-next-line camelcase
          ({ key: itemKey, doc_count }) => {
            labels.push(itemKey);
            values.push(doc_count);
          },
        );
      }
      return {
        labels,
        values,
      };
    },
  },
  components: {
    Doughnut,
  },
};
</script>
<style lang="scss" scoped>
.chartjs-render-monitor{
  height: 200 !important;
}
</style>
