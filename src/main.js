import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader';
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'


loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueCollapsiblePanel)
  .mount('#app')
