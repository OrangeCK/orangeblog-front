<template>
    <el-container>
        <el-container>
          <el-header height="70px" class="ck-idx-head-header">
            <Header :msg='mainMenun'></Header>
          </el-header>
          <el-main class="ck-idx-head-main">
            <div class="ck-main-div">
              <transition name="slide-fade" mode="out-in">
                <router-view />
              </transition>
            </div>
          </el-main>
          <el-footer class="ck-idx-head-footer">
              <Footer :msg='mainMenun'></Footer>
          </el-footer>
        </el-container>
        <el-aside class="ck-aside ck-idx-head-aside">
          <Aside :msg='mainMenun'></Aside>
        </el-aside>
    </el-container>
</template>

<script>
import $ from 'jquery'
import Header from '../header/header'
import Aside from '../aside/aside'
// import Main from '../main/main'
import Footer from '../footer/footer'
export default {
  name: 'Index',
  props: {
    msg: String
  },
  components: {
    Header,
    Aside,
    // Main,
    Footer
  },
  data () {
    return {
      mainMenun: 'Kang Chen'
    }
  },
  computed: {
    storageValue: function () {
      return this.$store.state.activeName
    }
  },
  mounted () {
    this.calculateScreenHeight()
  },
  methods: {
    calculateScreenHeight () {
      // 浏览器可用高度
      let availHeight = window.innerHeight - 170
      let setHeight = $('.ck-main-div').css('min-height')
      setHeight = parseInt(setHeight.substring(0, setHeight.length - 2))
      console.log('当前高度是', availHeight, setHeight)
      if (availHeight > setHeight) {
        let newHeight = availHeight + 'px'
        $('.ck-main-div').css('min-height', newHeight)
      }
    },
    clickButton () {
      this.$store.commit('SET_ActiveName', this.mainMenun)
    }
  }
}
</script>

<style lang="less" scoped>
// @media screen and (max-width: 768px){
  // .ck-aside {
  //   display: none;
  //   width: 200px !important;
  // }
  // .ck-idx-head-header {
  //   font-size: 14px !important;
  // }
  // .ck-idx-head-main {
  //   font-size: 14px !important;
  // }
  // .ck-idx-head-aside {
  //   font-size: 12px !important;
  // }
  // .ck-idx-head-footer {
  //   font-size: 14px !important;
  // }
// }
// .ck-aside {
//   width: 200px;
// }
// .ck-idx-head-header {
//   font-size: 16px;
// }
// .ck-idx-head-main {
//   font-size: 16px;
// }
// .ck-idx-head-aside {
//   font-size: 14px;
// }
// .ck-idx-head-footer {
//   font-size: 16px;
// }
// .ck-main-div {
//   min-height: 900px;
// }
// .el-footer {
//   padding: 10px 10px 10px 10px;
// }
// .el-header {
//   padding: 0px;
// }
// .el-aside {
//   color: #333;
// }
// .el-main {
//   color: #333;
//   text-align: center;
// }
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
