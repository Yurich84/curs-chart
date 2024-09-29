<template>
    <div class="example">
        <VueApexCharts
            v-if="!loading"
            width="300%"
            height="550"
            type="bar"
            :options="chartOptions"
            :series="series"
        ></VueApexCharts>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import VueApexCharts from "vue3-apexcharts";
import axios from 'axios'

const loading = ref(true)
const cursData = ref([])

fetchData()

async function fetchData () {
    loading .value= this
    const { data } = await axios.get('https://dugduzloyits74s2s5xjyng3wi0hayvw.lambda-url.eu-west-3.on.aws/')
    cursData.value = data.sort((a, b) => a.timestamp - b.timestamp)
    loading.value = false
}

const chartOptions = computed(() => ({
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
        enabledOnSeries: [0,1,2]
    },
    labels: cursData.value.map(_ => _.time.split(' ')[0]),
    yaxis: [{
        title: {
            text: 'Differenses %',
        },

    }, {
        opposite: true,
        min: 39,
        seriesName: 'Buy',
        title: {
            text: 'Amount'
        }
    }, {
        opposite: true,
        seriesName: 'Buy',
        min: 39,
        show: false,
    }]
}))

const series = computed(() => [
    {
        name: 'Differences %',
        type: 'column',
        data: cursData.value.map(_ => _.koeficient.toFixed(2))
    },
    {
        name: 'Buy',
        type: 'line',
        data: cursData.value.map(_ => _.buy.toFixed(2))
    },
    {
        name: 'Sell',
        type: 'line',
        data: cursData.value.map(_ => _.sell.toFixed(2))
    },
])

</script>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
