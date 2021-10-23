<script>
import { Doughnut } from 'vue-chartjs';

export default {
  name: 'doughnut-chart',
  extends: Doughnut,
  props: ['names', 'chartdata'],
  data: () => ({
    options: {
      cutoutPercentage: 80,
      maintainAspectRatio: false,
      scales: {
        display: false,
      },
      legend: {
        horizontalAlign: 'right',
        verticalAlign: 'top',
      },
    },
  }),
  mounted() {
    const chartData = {
      datasets: this.chartdata.map((c) => ({
        borderWidth: 1,
        weight: 10,
        ...c,
      })),
    };

    this.renderChart(chartData, this.options);
  },
};
</script>

<style>
</style>
