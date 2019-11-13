<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  created: function () {
    if (document.documentElement.clientWidth > 640) {
      console.log('clientWidth', document.documentElement.clientWidth)
      require('./common/css/pc.css')
    } else {
      console.log('clientWidth', document.documentElement.clientWidth)
      require('./common/css/mobile.css')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 0px;
}
.el-drawer__header {
  margin-bottom: 0px !important;
  padding: 0px !important;
}
</style>
