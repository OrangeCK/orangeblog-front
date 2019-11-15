<template>
    <div>
      <el-row>
        <el-col :span="5">
          <div class="ck-display-none-pc ck-avatar-drawer" @click="drawer = true">
            <el-avatar shape="square" fit="scale-down" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="ck-display-none-app ck-header-tabs">
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              router
              @select="handleSelect"
              background-color="#ffffff"
              text-color="#000"
              active-text-color="#ffd04b">
              <el-menu-item index="/index/main1">处理中心</el-menu-item>
              <el-menu-item index="/index/main2">数据设置</el-menu-item>
              <el-menu-item index="/index/main3">测试中台</el-menu-item>
              <el-menu-item index="/index/blogDetail">关于本站</el-menu-item>
            </el-menu>
        </div>
        </el-col>
        <el-col :span="6">
          <div class="ck-search-inp">
              <el-input
                placeholder="请输入内容"
                suffix-icon="el-icon-search"
                v-model="headerText">
              </el-input>
          </div>
        </el-col>
      </el-row>
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
      size: '50%',
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
  padding-top: 10px;
}
.ck-search-inp {
  padding: 15px 5px;
}
</style>
