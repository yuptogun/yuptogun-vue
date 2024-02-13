import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
    faTwitter, faFacebookF, faYoutube, faInstagram, faMastodon, faGithub,faStackOverflow, faCodepen, faTumblr, faWikipediaW, faThreads, faRedditAlien, faLastfm, faPhp, faLinkedinIn, faSoundcloud, faFlickr, faWeibo, faEllo, faPatreon, faKickstarterK, faBandcamp, faPaypal, faTelegram, faKeybase, faSkype, faGoogle
} from '@fortawesome/free-brands-svg-icons';
import {
    faBookBible
} from '@fortawesome/free-solid-svg-icons';

import App from './App.vue'
import ko from "./data/locales/ko.json"
import en from "./data/locales/en.json"
import './style.css'

library.add(
    faTwitter, faFacebookF, faYoutube, faInstagram, faMastodon, faGithub,faStackOverflow, faCodepen, faTumblr, faWikipediaW, faThreads, faRedditAlien, faLastfm, faPhp, faLinkedinIn, faSoundcloud, faFlickr, faWeibo, faEllo, faPatreon, faKickstarterK, faBandcamp, faPaypal, faTelegram, faKeybase, faSkype, faGoogle,
    faBookBible
)

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
