<template>
  <div>
    <h2>我是user</h2>
    <p>我是user窝窝窝窝窝窝窝窝窝</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.aaa}}</h2>
  </div>
</template>

<script>
export default {
  name: 'user',
  computed: {
    userId() {
      return this.$route.params.aaa
    }
  }
}

// router： 路由器的调度器！！！！！！！！！！！
// route:  当前活跃的路由！！！！！！！！！！！

</script>

<style>

</style>
