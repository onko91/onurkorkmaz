<script setup lang="ts">
import NavbarView from '@/components/layouts/NavbarView.vue'
import IndexView from './views/IndexView.vue'
import CvView from './views/CvView.vue'
import SkillsView from './views/SkillsView.vue'
import FooterView from '@/components/layouts/FooterView.vue'
import { useSectionIsInViewport } from '@/composables/nav'
useSectionIsInViewport()
</script>

<template>
    <NavbarView />
    <IndexView />
    <CvView />
    <SkillsView />
    <FooterView />
</template>
