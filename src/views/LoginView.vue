<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
const { loginWithRedirect } = useAuth0()
function login() {
  return loginWithRedirect()
}
</script>

<template>
  <section id="index" class="hero is-fullheight-with-navbar">
    <div class="hero-body is-justify-content-center">
      <div class="columns">
        <div class="column is-12 has-text-centered">
          <p>Please proceed to</p>
          <button class="button is-link" @click="login">Login</button>
        </div>
      </div>
    </div>
  </section>
</template>
