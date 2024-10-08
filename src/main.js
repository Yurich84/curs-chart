import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App)
app.mount('#app')
app.use(VueApexCharts);