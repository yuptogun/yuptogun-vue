import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons"
import './style.css'

library.add(fab, fas)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
