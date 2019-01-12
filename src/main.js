import Vue from 'vue'
import './plugins/vuetify'
// import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'

// import About from './components/About.vue'
// import Home from './components/Home.vue'

Vue.config.productionTip = false
// Vue.use(VueRouter);

// const routes = [
//   { path: '/', component: Home, name: 'home' },
//   { path: '/about', component: About, name: 'about' }
// ]

// const router = new VueRouter({
//   routes
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
