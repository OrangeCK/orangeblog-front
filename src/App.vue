<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition name="el-zoom-in-center" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  created: function () {
    // console.log('clientWidth', document.documentElement.clientWidth)
    if (document.documentElement.clientWidth > 768) {
      require('./common/css/pc.css')
    } else {
      require('./common/css/mobile.css')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft Yahei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  margin-top: 0px;
  max-width: 1366px;
  min-width: 1000px;
}
.el-drawer__header {
  margin-bottom: 0px !important;
  padding: 0px !important;
}
.el-drawer__body {
  overflow:auto;
}
</style>
