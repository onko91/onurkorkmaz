<script setup lang="ts">
import type { TimelineEntry } from '@/types/types'
defineProps<TimelineEntry>()
</script>
<template>
  <div class="timeline-item">
    <div v-if="active" class="timeline-marker is-link"></div>
    <div v-if="icon" class="timeline-marker is-icon is32x32">
      <i class="fa" :class="icon"></i>
    </div>
    <div class="timeline-content">
      <div class="is-flex is-flex-direction-column">
        <div class="timeline-content__header has-text-weight-light">{{ range }}</div>
        <div class="timeline-content__text is-uppercase">{{ title }}</div>
      </div>
      <p class="is-size-7">{{ location }}</p>
    </div>
  </div>
</template>
