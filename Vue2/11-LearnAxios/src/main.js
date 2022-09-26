import Vue from 'vue'
import App from './App'

import axios from 'axios'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios 本身执行Promise 会返回一个then
axios({
  url:'http://123.207.32.32:8000/home/multidata',

  // // 专门针对Get请求的参数拼接
  // params: {
  //   type: 'pop',
  //   page: 1
  // }
}).then(res => {
  console.log(res)
})

// 2.axios的All方法 发送并发请求
// axios.all([axios( {
//   url:'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })
// ])

// 3. get请求可以用 params方法拼接
//    post请求需要用需求体，不可以params方法拼接


// 4.可以设置默认地址等（即拼接地址前面的公共地址）
// axios.defaults.baseURL = 'http://123.207.32.32:8000'


// // 5.axios的封装
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })


// 6.axios拦截器
// 和导航首位的区别：
//   导航首位是再页面发送切换时处理
//   axios拦截器是在异步时处理
