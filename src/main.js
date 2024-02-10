import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import App from './App.vue'
import ko from "./data/locales/ko.json"
import en from "./data/locales/en.json"
import './style.css'

library.add(fab, fas)

const i18n = createI18n({
    legacy: false,
    locale: window.localStorage.locale || 'ko',
    messages: {
        ko: ko,
        en: en
    }
})

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(i18n)
    .mount('#app')
