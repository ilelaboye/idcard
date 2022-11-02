<template>
  <div id="chart">
    <VueApexCharts
      type="area"
      height="350"
      :options="chartOptions"
      :series="series"
    ></VueApexCharts>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  components: { VueApexCharts },
  props: { chartData: {} },
  data() {
    return {
      series: [
        {
          name: "Amount",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        // {
        //   name: "series2",
        //   data: [11, 32, 45, 32, 34, 52, 41],
        // },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "area",
        },
        title: {
          text: this.chartData.title,
        },
        legend: {
          show: true,
          position: "bottom",
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "category",
          categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        tooltip: {
          // x: {
          //   format: "dd/MM/yy HH:mm",
          // },
        },
      },
    };
  },
};
</script>

<style></style>
