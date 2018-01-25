<template>
  <div id="app">
    <transition name="fade">
      <router-view v-wechat-title='$route.meta.title'/>
    </transition>
    <div class="navbar">
      <ul>
        <li v-for="(item, index) in navList" v-bind:key="item" @click="changeNav(index,item.page)" :class="{'active':ind===index}">
          <i :class="['icon-nav',item.class]"></i>
          {{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isActive: true,
      navList: [
        {
          'name': '首页',
          'class': 'icon-home',
          'page': 'Index'
        },
        {
          'name': '发现',
          'class': 'icon-yduifaxian',
          'page': 'Disconver'
        },
        {
          'name': '个人中心',
          'class': 'icon-user',
          'page': 'PersonalCenter'
        }
      ],
      ind: 0
    }
  },
  methods: {
    changeNav: function (index, page) {
      this.ind = index
      this.$router.push(page)
    }
  }
}
</script>

<style lang="less">
.active{
  background-color: #fff;
  color:#0099FF;
}
body {
  background-color: #fff;
}
.navbar {
  width: 100%;
  position: fixed !important;
  bottom: 0;
  border-top: 1px solid #bbb;
  background-color: #eee;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      width: 33.33%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.5rem 0;
      i {
        font-size: 1.3rem;
      }
    }
  }
}
/* 开始过渡阶段,动画出去阶段 */
.fade-enter-active {
  transition: all 0.3s;
}
/* 进入开始 */
.fade-enter {
  opacity: 0;
}
/* 出去终点 */
.fade-leave-active {
  opacity: 0;
}
</style>
