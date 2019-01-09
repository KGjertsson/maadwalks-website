import Vue from 'vue'
import './plugins/vuetify'
import Maadsite from './Maadsite.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Maadsite),
}).$mount('#app')
