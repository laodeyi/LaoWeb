<!-- @format -->

<script>
import { Doughnut } from "vue-chartjs";
export default {
  name: "DoughnutChart",
  data() {
    return {
      defaultColor: ["#DD1B16", "#ddd119", "#7f43dd", "#62ff20", "#41B883", "#E46651", "#00D8FF"]
    };
  },
  extends: Doughnut,
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    let len = this.chartData.labels.length;
    this.chartData.datasets[0].backgroundColor = this.defaultColor.slice(0, len);
    this.renderChart(this.chartData, this.options);
  }
};
</script>

<style scoped></style>
