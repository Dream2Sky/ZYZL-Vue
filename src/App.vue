<template>
  <div id="app">
    <transition>
      <router-view v-wechat-title='$route.meta.title'/>
    </transition>
    <div class="navbar">
      <ul>
        <li v-for="(item, index) in navList" v-bind:key="item" @click="changeNav(index,item.page)" :class="{'active':ind===index}">
          <i :class="['icon-nav',item.class,{'i-active':ind===index}]"></i>
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
          'page': 'FlowDetail'
        },
        {
          'name': '个人中心',
          'class': 'icon-user',
          'page': 'Register'
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
.i-active{
  color:#0099FF!important;
}
body {
  background-color: rgba(238, 238, 238, .4);
}
.navbar {
  width: 100%;
  height: 3.1rem;
  position: fixed !important;
  bottom: 0;
  border-top: 1px solid #bbb;
  background-color: #eee;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    li {
      width: 33.33%;
      height: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.5rem 0;
      i {
        font-size: 1.1rem;
        color:#999999;
      }
    }
  }
}
</style>
<style>
button,html input[type="button"],input[type="reset"],input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer
}
</style>
