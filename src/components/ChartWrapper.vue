<template>
    <h2>{{ currentBank }} ({{ currentCurrency }})</h2>
    <Chart
        v-if="!loading"
        :key="chartComponentKey"
        :data="currentData"
    />
    <div class="chart-links">
        <a href="#" @click="goToData(BANK_PRIVAT, 'USD')">Privat USD</a>
        <a href="#" @click="goToData(BANK_PRIVAT, 'EUR')">Privat EUR</a>
        <a href="#" @click="goToData(BANK_MONO, 'USD')">Mono USD</a>
    </div>
</template>

<script setup>
import Chart from '@/App.vue'
import { ref } from 'vue'
import { BANK_MONO, BANK_PRIVAT } from '@/constants/constants.js'
import { getCursData } from '@/services/api.js'

const chartComponentKey = ref(0)

const currentBank = ref('')
const currentCurrency = ref('')
const currentData = ref([])

const goToData = (bank, currency) => {
    currentBank.value = bank
    currentCurrency.value = currency
    chartComponentKey.value++

    fetchData()
}

const loading = ref(true)

async function fetchData () {
    loading .value= this
    const { data } = getCursData()
    currentData.value = data.sort((a, b) => a.timestamp - b.timestamp)
    loading.value = false
}
</script>

<style scoped>

</style>
