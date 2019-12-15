<template>
    <div>
      <div class="ck-display-none-app">
        <el-row type="flex" justify="space-between">
          <el-col style="width: 70%;">
            <div class="ck-header-tabs">
              <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                router
                @select="handleSelect"
                background-color="#efe3e3"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="/index/main"><i class="el-icon-house"></i>首页</el-menu-item>
                <el-menu-item index="/index/liZiMain"><i class="el-icon-guide"></i>栗子生活</el-menu-item>
                <el-menu-item index="/index/javaMain"><i class="el-icon-monitor"></i>Java</el-menu-item>
                <el-menu-item index="/index/aboutHistory"><i class="el-icon-time"></i>版本</el-menu-item>
                <!-- <el-menu-item index="/index/blogDetail/123456789">关于本站</el-menu-item> -->
              </el-menu>
          </div>
          </el-col>
          <el-col style="width: 30%;">
            <div class="ck-search-inp">
                <el-input
                  placeholder="请输入内容"
                  v-model="searchStr">
                  <i slot="suffix" @click="searchBlog" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="ck-display-none-pc">
        <el-row>
          <el-col style="width: 20%;">
            <div class="ck-avatar-drawer" @click="drawer = true">
              <el-avatar shape="square" fit="scale-down" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
          </el-col>
          <el-col style="width: 60%;">
            <div class="ck-search-inp">
              <el-input placeholder="请输入内容" v-model="searchStr">
                <el-button @click="searchBlog" slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </el-col>
          <el-col style="width: 20%;">
            <div class="ck-avatar-drawer">
              <el-dropdown trigger="click" @command="handleCommand">
                <el-button icon="el-icon-s-fold" plain style="padding: 5px 8px; font-size: 24px;"></el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-house" command="/index/main">首页</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-guide" command="/index/liZiMain">栗子生活</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-monitor" command="/index/javaMain">Java</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-time" command="/index/aboutHistory">版本</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              </div>
          </el-col>
        </el-row>
      </div>
      <el-drawer
          :visible.sync="drawer"
          :size='size'
          :show-close="showClose"
          :direction="direction">
          <Aside msg='mainMenun' v-on:listenToChildEvent="closeDrawer"></Aside>
      </el-drawer>
    </div>
</template>

<script>
import Aside from '../aside/aside'
export default {
  name: 'Header',
  props: {
    msg: String
  },
  components: {
    Aside
  },
  data () {
    return {
      drawer: false,
      size: '70%',
      showClose: false,
      direction: 'ltr',
      activeIndex2: this.$store.state.activeMenu,
      searchStr: ''
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    handleSelect (index, indexPath) {
      this.$store.commit('SET_ActiveMenu', index)
    },
    handleCommand (command) {
      this.$router.push({ path: command })
    },
    searchBlog () {
      // window.location.href = '/dist/index/searchMain/' + this.searchStr
      this.$router.push({ path: '/index/searchMain/' + this.searchStr })
    },
    closeDrawer (data) {
      this.drawer = data
    }
  }
}
</script>

<style lang="less" scoped>
.ck-header-tabs {
  width: 100%;
}
.ck-avatar-drawer {
  text-align: center;
  padding-top: 15px;
}
.ck-search-inp {
  padding: 15px 5px;
}
</style>
