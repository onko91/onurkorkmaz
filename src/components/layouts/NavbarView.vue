<script setup lang="ts">
import { ref } from 'vue'
import { i18n } from '@/plugins/i18n'
const isActive = ref(false)

function toggleNavbar() {
  isActive.value = !isActive.value
}

const langs = ['de', 'en']

function switchLanguage(lang: any){
  i18n.locale.value = lang
}

import { useAuth0 } from '@auth0/auth0-vue';
const auth0 = useAuth0();
function logout(){
  auth0.logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  })
}
</script>
<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isActive }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="toggleNavbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu is-justify-content-end" :class="{ 'is-active': isActive }">

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          {{$i18n.locale}}
        </a>
        <div class="navbar-dropdown">
          <a v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" class="navbar-item" @click="switchLanguage(lang)">
            {{ lang }}
          </a>
        </div>
      </div>
      <a class="navbar-item active-link" href="#index">{{ $t('navbar.home') }}</a>
      <a class="navbar-item" href="#cv">{{ $t('navbar.cv') }}</a>
      <a class="navbar-item" href="#skills">{{ $t('navbar.skills') }}</a>
      <a class="navbar-item" href="#contact">{{ $t('navbar.contact') }}</a>
      <a class="navbar-item" @click="logout">Logout</a>
    </div>
  </nav>
</template>
