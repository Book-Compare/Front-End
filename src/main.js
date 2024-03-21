import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './style.css'
import router from './router'
import buttonLocale from './lang/vi/button.json'
import titleLocale from './lang/vi/title.json'
import inputLocale from './lang/vi/input.json'

const i18n = createI18n({
    locale: 'vi', 
    messages: {
      vi: {
        button: buttonLocale,
        title: titleLocale,
        input: inputLocale,
      }
    }
  })

createApp(App).use(router).use(i18n).use(PrimeVue).mount('#app')
