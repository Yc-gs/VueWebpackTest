import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import VueRouter from 'vue-router'
import 'mint-ui/lib/style.css'
import routerConfig from './router.config.js'
Vue.use(VueRouter);
Vue.use(Mint);
const router = new VueRouter(routerConfig);
new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
