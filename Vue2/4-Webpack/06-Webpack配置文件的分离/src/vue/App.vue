<template>
  <div>
    <h2 id="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>

    <Cpn></Cpn>
  </div>
</template>

<script>

import Cpn from './AppSon.vue'

export default {
  name: 'app',
  components: {
    Cpn
  },
  data() {
    return {
      message: 'hello, webpack',
      name: 'Jim'
    }
  },
  methods: {
    btnClick() {
       
    }
  }
}
</script>

<style>
  #title {
    color: yellow
  }
</style>