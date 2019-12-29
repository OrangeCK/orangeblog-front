<template>
  <div id="site-landing">
    <el-row type="flex" justify="center" style="position:fixed;top:50%;width:100%;z-index:1;">
      <el-col :span="12" >
        <div class="letter" @click="jumpToIndex"></div>
        <!-- <el-button type="text" style="color:#fff;" @click="jumpToIndex"><h2>进入主页</h2></el-button> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import '../../common/js/polygonizr.min.js';
export default {
  name: 'Guide',
  data () {
    return {
      mainMenun: 'Kang Chen'
    }
  },
  computed: {
  },
  mounted () {
    $('#site-landing').polygonizr();
  },
  methods: {
    jumpToIndex () {
      this.$router.push({ path: '/index' })
    },
  }
}
</script>

<style lang="less" scoped>
@import '../../common/css/normalize.css';
#site-landing {
  position:relative;
  height: 100%;
  width: 100%;
  // background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  // background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  // background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  background-image: linear-gradient(to top, #ffecd2 0%, #fcb69f 100%);
}
.letter {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background: transparent;
  height: 0px;
  width: 0px;
  border-top: 80px solid transparent;
  border-bottom: 50px solid #fcb69f;
  border-left: 100px solid #fdceb6;
  border-right: 100px solid #fdceb6;
}
.letter:before {
  z-index: -2;
  content: '';
  position: absolute;
  height: 140px;
  width: 140px;
  background: #ffecd2;
  transform: rotate(45deg) translate(-50%, -50%);
  left: -70px;
  top: -50px;
}
.letter:after {
  font-family: 'Microsoft Yahei','Avenir', Helvetica, Arial, sans-serif;
  z-index: -1;
  content: '进入主页';
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffd04b;
  position: absolute;
  height: 100px;
  width: 140px;
  background: white;
  left: -70px;
  animation: pop 3500ms infinite ease-in-out;
}

@keyframes pop {
  0% {
    top: -140px;
  }
  40% {
    top: -140px;
    transform: rotate(0deg);
  }
  70% {
    top: -60px;
    transform: rotate(8deg);
  }
  100% {
    top: -140px;
  }
}
</style>
