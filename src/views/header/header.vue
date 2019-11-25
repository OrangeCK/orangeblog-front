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
                <el-menu-item index="/index/main1">处理中心</el-menu-item>
                <el-menu-item index="/index/main2">数据设置</el-menu-item>
                <el-menu-item index="/index/main3">发布历史</el-menu-item>
                <el-menu-item index="/index/blogDetail/123456789">关于本站</el-menu-item>
              </el-menu>
          </div>
          </el-col>
          <el-col style="width: 30%;">
            <div class="ck-search-inp">
                <el-input
                  placeholder="请输入内容"
                  suffix-icon="el-icon-search"
                  v-model="headerText">
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
          <el-col style="width: 55%;">
            <div class="ck-search-inp">
                <el-input
                  placeholder="请输入内容"
                  suffix-icon="el-icon-search"
                  v-model="headerText">
                </el-input>
            </div>
          </el-col>
          <el-col style="width: 25%;">
            <div class="ck-avatar-drawer">
              <el-dropdown trigger="click" @command="handleCommand">
                <el-button icon="el-icon-s-fold" plain style="padding: 5px 8px; font-size: 24px;"></el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="/index/main1">黄金糕</el-dropdown-item>
                  <el-dropdown-item command="/index/main2">狮子头</el-dropdown-item>
                  <el-dropdown-item command="/index/main3">螺蛳粉</el-dropdown-item>
                  <el-dropdown-item command="/index/blogDetail/123456789">螺蛳粉</el-dropdown-item>
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
          :direction="direction"
          >
          <Aside msg='mainMenun'></Aside>
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
      headerText: 'Search'
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
