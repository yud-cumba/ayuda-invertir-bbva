<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        type: 'horizontalBar',
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#00E291',
            data: [5, 2, 3, 4, 2, 5],
          },
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [-2, -1, -2, -3, -1, -1],
          },
        ],
      },
      {
        diplay: false,
        scales: {
          xAxes: [{
            display: false,
          }],
          yAxes: [{
            display: false,
          }],
        },
        responsive: true,
        legend: false,
        maintainAspectRatio: false,
      },
    );
  },
};
</script>

<style lang="scss" scoped></style>
