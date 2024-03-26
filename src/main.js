import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import App from './App.vue'
import ko from "./data/locales/ko.json"
import en from "./data/locales/en.json"
import './style.css'

const i18n = createI18n({
    legacy: false,
    locale: window.localStorage.getItem('locale') || 'ko',
    messages: {
        ko: ko,
        en: en
    }
})

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(i18n)
    .mount('#app')
