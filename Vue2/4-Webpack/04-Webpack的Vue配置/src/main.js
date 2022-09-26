import { name, height } from "./js/aaaaa.js"
console.log(name,height)

// 依赖CSS文件
require('./css/normal.css')

// 依赖Less文件
require('./css/special.less')

document.writeln('你好，李焕英！')

import Vue from '../node_modules/vue/dist/vue.esm.js'

import App from './vue/App.vue'

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})