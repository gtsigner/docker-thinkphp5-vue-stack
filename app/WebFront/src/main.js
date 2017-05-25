//Author:Godtoy
import Vue from 'vue'
import App from './App'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import router from './router'

Vue.config.productionTip = false

Vue.use(MuseUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
