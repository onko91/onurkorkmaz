<script setup lang="ts">
import type { TimelineEntry as TimelineEntryType } from '@/types/types'
import TimelineItem from './TimelineItem.vue'
import TimelineTag from './TimelineTag.vue'
defineProps<{
  headline: string
  items: TimelineEntryType[]
  initialYear: Number
}>()
</script>

<template>
  <div class="timeline">
    <TimelineTag :title="headline" />
    <div v-for="(item, index) in items" :key="index">
      <TimelineItem
        :active="item.active"
        :icon="item.icon"
        :range="item.range"
        :title="item.title"
        :location="item.location"
      />
    </div>
    <TimelineTag :title="initialYear.toString()" />
  </div>
</template>
