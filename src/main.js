import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'

import router from '@/router'

createApp(App)
  .use(router)
  .use(BounceLoader)
  .use(VueChartkick)
  .mount('#app')
