import './assets/main.scss'

import { createAuth0 } from '@auth0/auth0-vue';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { useI18n } from '@/plugins/i18n'

const app = createApp(App)

app.use(
    createAuth0({
      domain: "onur-korkmaz.eu.auth0.com",
      clientId: "26nJ4gVsHDKE0AOXT1upNRnf0IqENJSN",
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  );

app.use(createPinia())

useI18n(app)
app.mount('#app')
