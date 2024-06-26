import './assets/main.scss'
import './assets/fonts/Rubik/Rubik-Regular.ttf'
import 'primevue/resources/themes/aura-light-green/theme.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
// @ts-ignore
import App from './App.vue' ;
import router from './router'

const app = createApp(App)
app.use(PrimeVue);
app.use(createPinia())
app.use(router)

app.mount('#app')
