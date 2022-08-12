import { createApp } from 'vue'
import SmartyUI from './entry'
import App from './app.vue'

createApp(App)
.use(SmartyUI)
.mount("#app")
