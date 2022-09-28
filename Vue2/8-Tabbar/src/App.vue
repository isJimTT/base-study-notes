<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/homeNoClick.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item  path="/category" activeColor="hotpink">
        <img slot="item-icon" src="./assets/img/tabbar/classNoClick.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/class.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item  path="/cart" activeColor="green">
        <img slot="item-icon" src="./assets/img/tabbar/shopCarNoClick.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/shopCar.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item  path="/profile" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/mineNoClick.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/mine.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem.vue'
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import "./assets/css/base.css";

</style>
