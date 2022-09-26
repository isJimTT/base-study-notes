<template>
    <div>
      <h2>我是home</h2>
      <p>我是home嘿嘿嘿嘿嘿嘿嘿</p>

<!-- 路由嵌套 -->
      <router-link to="/home/news">新闻</router-link>
      <router-link to="/home/message">消息</router-link>

      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  created() {
    console.log('home created')
  },
  destroyed() {
    console.log('home destroyed')
  }
}
</script>

<style>

</style>
