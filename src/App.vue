<script setup lang="ts">
import LoginView from './views/LoginView.vue'
import NavbarView from '@/components/layouts/NavbarView.vue'
import IndexView from './views/IndexView.vue'
import CvView from './views/CvView.vue'
import SkillsView from './views/SkillsView.vue'
import FooterView from '@/components/layouts/FooterView.vue'
import { useSectionIsInViewport } from '@/composables/nav'
import { useAuth0 } from '@auth0/auth0-vue'
useSectionIsInViewport()
const { isAuthenticated, isLoading } = useAuth0()
</script>

<template>
  <div v-if="!isAuthenticated && !isLoading">
    <LoginView />
  </div>
  <div v-if="isAuthenticated && !isLoading">
    <NavbarView />
    <IndexView />
    <CvView />
    <SkillsView />
    <FooterView />
  </div>
</template>
