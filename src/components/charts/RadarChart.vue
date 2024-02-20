<script setup lang="ts">
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
} from 'chart.js'

ChartJS.register(Title, Tooltip, RadialLinearScale, PointElement, LineElement, Filler)

defineProps(['chartOptions', 'chartData'])
</script>
<template>
  <Radar :options="chartOptions" :data="chartData" />
</template>
