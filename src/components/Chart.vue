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

<script setup>
import { computed } from 'vue'
import VueApexCharts from "vue3-apexcharts";

const props = defineProps({
    data: {
        type: Array,
        required: true
    }
})

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
    labels: props.data.map(_ => _.time.split(' ')[0]),
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
        data: props.data.map(_ => _.koeficient.toFixed(2))
    },
    {
        name: 'Buy',
        type: 'line',
        data: props.data.map(_ => _.buy.toFixed(2))
    },
    {
        name: 'Sell',
        type: 'line',
        data: props.data.map(_ => _.sell.toFixed(2))
    },
])

</script>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
