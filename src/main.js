// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
// import Home from './components/HelloFromVux'
import {Tabbar, TabbarItem} from 'vux'
// import '@/style/index.scss'
import router from './router/index'
import store from './store/store'
import axios from 'axios'
Vue.use(VueRouter)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabbarItem.name, TabbarItem)

/* const router = new VueRouter({
  routes
}) */

// FastClick.attach(document.body)
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
