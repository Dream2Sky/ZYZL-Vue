<template>
  <div id="app">
    <transition name="fade">
      <router-view v-wechat-title='$route.meta.title'/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background-color: #eee;
}
/* 开始过渡阶段,动画出去阶段 */
.fade-enter-active{
  transition: all 0.3s;
}
/* 进入开始 */
.fade-enter{
  opacity: 0;
}
/* 出去终点 */
.fade-leave-active{
  opacity: 0;
}
</style>
