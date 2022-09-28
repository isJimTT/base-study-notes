import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)


const modulesA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, playLoad) {
      state.name = playLoad
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName','finalName')
      }, 1000);
    }
  },
  getters: {
    fullName(state) {
      return state.name +'我是getters加上的内容'
    }
  },
}

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'Jim', age: 19},
      {id: 111, name: 'Aurora', age: 21},
      {id: 112, name: 'why', age: 8},
      {id: 113, name: 'coder', age: 25}
    ],
    info: {
      id: 114, name: 'ttt', age: 35
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state,playLoad) {
      state.counter += playLoad.count
    },
    updateInfo(state) {
      state.info.name = 'coderwhy'
      // state.info['address'] = '成都' ———不可以响应式
      // Vue.set(state.info, 'address', '成都')  ——可以响应式

      // delete state.info.age ——不可以响应式
      // Vue.delete(state.info, 'age')
    }
  },
  actions: {
    // context: 上下文
    aUpdateInfo(context, playLoad) {
      // 用回调函数实现Action异步
      // setTimeout(() => {
      //   context.commit('updateInfo')
      //   console.log(playLoad.message)
      //   playLoad.success()
      // }, 1000);

      // 用Promise实现
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(playLoad)
        }, 1000);
        resolve('我是resolve传进来的')
      })
    }
  },
  getters: {
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return num => {
        return state.students.filter(s => s.age > num)
      }
    }
  },
  modules: {
    a: modulesA
  }
})

// 3.导出
export default store
