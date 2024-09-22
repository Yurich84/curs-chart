<script setup>
import { ref } from 'vue'
import VueApexCharts from "vue3-apexcharts";

const chartOptions = {
  theme: {
      mode: 'dark',
      palette: 'palette1', 
      monochrome: {
          enabled: false,
          color: '#255aee',
          shadeTo: 'light',
          shadeIntensity: 0.65
      },
  },
  chart: {
    height: 550,
    type: 'line',
  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'Curs'
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  yaxis: [{
    title: {
      text: 'Differenses %',
    },
  
  }, {
    opposite: true,
    title: {
      text: 'Amoint'
    }
  }]
}

const series = [
  {
    name: 'Defferenses %',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, 
  {
    name: 'Buy',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  },
  {
    name: 'Sell',
    type: 'line',
    data: [26, 48, 38, 29, 49, 25, 19, 39, 26, 28, 18, 19]
  },
]

</script>

<template>
  <div class="example">
    <VueApexCharts 
      width="300%" 
      height="550" 
      type="bar" 
      :options="chartOptions" 
      :series="series"
    ></VueApexCharts>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
