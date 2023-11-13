<script setup lang="ts">
import RadarChart from '../components/charts/RadarChart.vue'
import SimpleArticle from '../components/skills/SimpleArticle.vue'
import { useSkillsStore } from '@/stores/skills'
const store = useSkillsStore()

</script>
<template>
  <section id="skills" class="hero is-fullheight">
    <div class="hero-body is-justify-content-center">
      <div class="columns container">
        <div class="column" v-for="(item, index) in ['frontend', 'backend', 'devops']" :key="index">
          <RadarChart
            :chart-data="store['skills'][item].chartData"
            :chart-options="store.skills.options"
          />
          <SimpleArticle :title="$t('skills.'+ item +'-title')" :text="$t('skills.'+ item +'-text')" />
        </div>
      </div>
    </div>
  </section>
</template>
