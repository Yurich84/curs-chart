<template>
    <h2>{{ currentBank }} ({{ currentCurrency }})</h2>
    <div class="chart-links">
        <span @click="goToData(BANK_PRIVAT, 'USD')">Privat USD</span>
        <span @click="goToData(BANK_PRIVAT, 'EUR')">Privat EUR</span>
        <span @click="goToData(BANK_MONO, 'EUR')">Mono EUR</span>
    </div>
    <Chart
        v-if="!loading"
        :key="chartComponentKey"
        :data="currentData"
    />
    <IconLoader v-else-if="loading" />
</template>

<script setup>
import Chart from '@/components/Chart.vue'
import { ref } from 'vue'
import { BANK_MONO, BANK_PRIVAT } from '@/constants/constants.js'
import { getCursData } from '@/services/api.js'
import IconLoader from '@/components/IconLoader.vue'

const chartComponentKey = ref(0)

const currentBank = ref(BANK_PRIVAT)
const currentCurrency = ref('USD')
const currentData = ref([])

const goToData = (bank, currency) => {
    currentBank.value = bank
    currentCurrency.value = currency
    chartComponentKey.value++

    fetchData()
}

const loading = ref(true)

fetchData()

async function fetchData () {
    loading.value= true
    const cacheVariable = `${currentBank.value}-${currentCurrency.value}`
    if (sessionStorage.getItem(cacheVariable)) {
        currentData.value = JSON.parse(sessionStorage.getItem(cacheVariable))
    } else {
        const { data } = await getCursData(currentBank.value, currentCurrency.value)
        currentData.value = data.sort((a, b) => a.timestamp - b.timestamp)
        sessionStorage.setItem(cacheVariable, JSON.stringify(currentData.value))
    }

    loading.value = false
}
</script>

<style scoped lang="scss">
.chart-links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 20px;

    span {
        color: var(--color-primary);
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
