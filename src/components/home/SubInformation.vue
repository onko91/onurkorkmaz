<script setup lang="ts">
import type { SubInfo } from '@/types/types'
defineProps<{ items: SubInfo[] }>()
</script>
<template>
  <div v-for="(item, index) in items" :key="index">
    <p>{{ $t('home.' + item.title) }}</p>
    <p class="has-text-weight-medium has-text-link is-uppercase">
      {{ $t('home.' + item.text) }}
    </p>
  </div>
</template>
