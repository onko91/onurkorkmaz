<script setup lang="ts">
import { useCvStore } from '@/stores/cv'
import TimelineItemList from '@/components/cv/TimelineItemList.vue'
const store = useCvStore()
</script>
<template>
  <section id="cv" class="hero is-fullheight is-align-items-center">
    <div class="hero-body">
      <div class="columns">
        <div class="column">
          <TimelineItemList
            :headline="$t('cv.work')"
            :initial-year="2015"
            :items="store.entries.work"
          />
        </div>
        <div class="column">
          <TimelineItemList
            :headline="$t('cv.education')"
            :initial-year="2008"
            :items="store.entries.education"
          />
        </div>
        <div class="column">
          <TimelineItemList
            :headline="$t('cv.further')"
            :initial-year="2019"
            :items="store.entries.further"
          />
        </div>
      </div>
    </div>
  </section>
</template>
