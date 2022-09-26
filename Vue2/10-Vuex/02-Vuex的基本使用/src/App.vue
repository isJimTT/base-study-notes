<template>
  <div id="app">

    <h3>----------APP的内容：modules的内容-------------</h3>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullName}}</h2>
    <button @click="updateName">修改名字</button>
    <button @click="aUpdateName">异步修改名字</button>

    <h3>----------APP的内容：info验证响应式-------------</h3>

    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h3>----------APP的内容-------------</h3>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>


    <h3>----------APP的内容：Getters的相关信息-------------</h3>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(20)}}</h2>

    <h3>----------HelloVuex的内容-------------</h3>
    <hello-vuex></hello-vuex>-
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  methods: {
    add() {
      this.$store.commit('increment')
    },
    sub() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // 1.普通的封装
      // this.$store.commit('incrementCount',count)
      // 2.特殊的提交封装
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    updateInfo() {
      // 用回调函数实现Action异步
      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是里面的信息',
      //   success: () => {
      //     console.log('里面已经完成了')
      //   }
      // })

      // 用Promise实现
      this.$store.dispatch('aUpdateInfo','我是携带的信息')
      .then(res => {
        console.log('里面已经完成了提交')
        console.log(res)
      })
    },
    updateName() {
      this.$store.commit('updateName','lisi')
    },
    aUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>

</style>
