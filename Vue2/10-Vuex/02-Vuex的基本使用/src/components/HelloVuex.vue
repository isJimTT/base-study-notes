<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
