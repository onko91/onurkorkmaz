<script setup lang="ts">
import CommonInformation from '@/components/home/CommonInformation.vue'
import MyPicture from '@/components/home/MyPicture.vue'

import { useCommonStore } from '@/stores/home'
const store = useCommonStore()
</script>

<template>
  <section id="index" class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="columns is-centered is-vcentered">
        <div class="column is-5 mr-4">
          <CommonInformation
            :title="$t('home.title')"
            :description="$t('home.description')"
            :sub-info="store.subInfo"
          />
        </div>
        <div class="column is-4">
          <MyPicture />
        </div>
      </div>
    </div>
  </section>
</template>
