<template>
  <div class="ck-index-layout">
    <el-container>
      <el-container>
        <el-header class="ck-idx-head-header">
          <Header></Header>
        </el-header>
        <el-main class="ck-idx-head-main">
          <div class="ck-main-div">
            <transition name="slide-fade" mode="out-in">
              <router-view />
            </transition>
          </div>
        </el-main>
        <el-footer class="ck-idx-head-footer">
          <Footer></Footer>
        </el-footer>
      </el-container>
      <el-aside class="ck-aside ck-idx-head-aside">
        <Aside></Aside>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import Header from '../header/header'
import Aside from '../aside/aside'
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
      // console.log('当前高度是', availHeight, setHeight)
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
