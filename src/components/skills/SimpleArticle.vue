<script setup lang="ts">
import type { Article } from '@/types/types'
defineProps<Article>()
</script>
<template>
  <p>
    <strong>{{ title }}</strong>
  </p>
  <p class="has-text-justified">{{ text }}</p>
</template>
