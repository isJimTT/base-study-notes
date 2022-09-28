<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>
    <router-view></router-view> -->


    <!-- <router-link to="/home" tag="button" replace>首页</router-link> -->
    <!-- tag标签可以将router-link标签渲染成指定标签 -->
    <!-- replace可以将pushState变成replaceState -->
    <!-- <router-link to="/about" tag="button" replace>关于</router-link> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="home">首页</router-link>
    <router-link to="about">关于</router-link>
    <!-- <router-link :to="'/user/'+userId">用户</router-link> -->
    <!-- <router-link :to="{path:'/profile', query: {name: 'why', age: '19'}}">档案</router-link> -->
    <!-- 动态路由，再拼接一些内容-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <keep-alive exclude="profile">
      <router-view></router-view>
    </keep-alive>
    <!-- KEEP-ALIVE可以使被包含的组件保留状态，避免被重新渲染 -->

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'coderwhy',
          age: 18
        }
      })
    }

  //   }
  //   // homeClick() {
  //   // //   this.$router.push('/home').catch(err=>{})
  //   // //   console.log('homeClick');
  //   // // },
  //   // // aboutClick() {
  //   // //   this.$router.push('/about').catch(err=>{})
  //   // //   console.log('aboutClick');

  }
}

</script>

<style>
 .active {
   color:red
 }
</style>
