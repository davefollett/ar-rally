import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LoadScript from 'vue-plugin-load-script'

Vue.use(LoadScript)

Vue.config.productionTip = false

Vue.config.ignoredElements = [
  'a-scene',
  'a-entity',
  'a-camera',
  'a-box',
  'a-text'
]

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
