<script setup lang="ts">
import type { TimelineTag } from '@/types/types'
defineProps<TimelineTag>()
</script>
<template>
  <header class="timeline-header">
    <span class="tag is-link is-uppercase">{{ title }}</span>
  </header>
</template>
