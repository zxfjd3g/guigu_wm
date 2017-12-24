import Vue from 'vue'

import App from './App.vue'
import svgImage from './components/svg/svg_image.vue'
import router from './router'
import store from './store'
import 'common/utils/rem'

Vue.component('svgImage', svgImage)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
