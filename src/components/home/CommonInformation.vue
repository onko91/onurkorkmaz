<script setup lang="ts">
import type { Common } from '@/types/types'
import SubInformation from './SubInformation.vue'
const store = defineProps<Common>()
</script>
<template>
  <h1 class="title has-text-link">{{ store.title }}</h1>
  <p class="mb-4 has-text-justified">{{ store.description }}</p>
  <SubInformation :items="store.subInfo" />
</template>
