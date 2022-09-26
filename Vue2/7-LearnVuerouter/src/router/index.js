import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
const home = () => import('../components/home')
const homeMessage = () => import('../components/homeMessage')
const homeNews = () => import('../components/homeNews')
const about = () => import('../components/about')
const user = () => import('../components/user')
const profile = () =>import('../components/profile')
// 路由懒加载

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: './home'
  },
  // 将首页设为打开网页时的默认网页
  {
    path: '/home',
    component: home,
    meta: {
      title: '首页'
    },
    // 路由嵌套
    children: [
      {
        path: '/',
        redirect: 'news',
      },
      {
        path: 'news',
        component: homeNews
      },
      {
        path: 'message',
        component: homeMessage
      }
    ]
  },
  {
    path: '/about',
    component: about,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:aaa',
    component: user,
    meta: {
      title: '用户'
    }
    // 动态路由，再拼接一些内容
  },
  {
    path: '/profile',
    component: profile,
    meta: {
      title: '档案'
    }
  }
]
const router = new VueRouter({
  // 配置路由和组件间的应用关系
  routes,
  mode: 'history',
// 将网页默认的hash该为history
  linkActiveClass: 'active'
// 统一设置，更改活跃Class名
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  // console.log(to)
  next()
})

export default router
// 3.将router对象传入到Vue实例

