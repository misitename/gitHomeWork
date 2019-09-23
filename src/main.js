import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VeLine from 'v-charts/lib/line'
import VeHistogram from 'v-charts/lib/histogram'
import VePie from 'v-charts/lib/pie'
import 'default-passive-events'
Vue.use(ElementUI)
Vue.component(VeLine.name,VeLine)
Vue.component(VeHistogram.name,VeHistogram)
Vue.component(VePie.name,VePie)

router.beforeEach((to, from, next) => {
 if(to.meta && to.meta.title) document.title = to.meta.title + "-州艺商城"
 next()
});

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
