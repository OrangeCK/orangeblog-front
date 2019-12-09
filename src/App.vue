<template>
  <div id="app" class="ck-back-top">
    <template>
      <el-backtop target=".ck-back-top">
        <!-- <div
          style="{
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0,0,0, .12);
            text-align: center;
            line-height: 40px;
            border-radius: 30px
            color: #1989fa;
          }"
        >
           <i class="el-icon-arrow-up"></i>
        </div> -->
      </el-backtop>
    </template>
    <!-- <img src="./assets/logo.png"> -->
    <transition name="el-zoom-in-center" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  created: function () {
    require('@/common/css/common.css')
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
  background-color: #efe3e3;
  height: 100vh;
  overflow: auto;
}
.el-drawer__header {
  margin-bottom: 0px !important;
  padding: 0px !important;
}
.el-drawer__body {
  overflow:auto;
}
</style>
