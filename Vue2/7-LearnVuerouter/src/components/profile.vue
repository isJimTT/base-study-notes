<template>
  <div>
    <h2>我是Profile</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
export default {
  name: "profile",
  created() {
    console.log('profile created')
  },
  destroyed() {
    console.log('profile destroyed')
  }
}
</script>

<style>

</style>
