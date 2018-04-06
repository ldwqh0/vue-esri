// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VMapPlugin from './lib'

Vue.use(VMapPlugin, {
  url: '/arcgisAPI/3.22/init.js', // 指定js文件地址
  css: '/arcgisAPI/3.22/esri/css/esri.css', // 指定css文件地址
  dojoConfig: { }
})

// Vue.config.productionTip = false

console.log('Created By ldwqh0@outlook.com')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
