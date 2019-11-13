<template>
    <div class="ck-aside-div-pd10">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="ck-avatar-img">
              <el-avatar shape="square" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="never">
            <div v-for="o in 2" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="never">
            <div v-for="o in 6" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="never">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'Aside',
  props: {
    msg: String
  },
  data () {
    return {
      footerText: 'Kang Chen`s Header!'
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    // clickButton () {
    //   this.$store.commit('SET_ActiveName', this.msg)
    // }
  }
}
</script>

<style lang="less" scoped>
.ck-avatar-img {
  max-height: 100px;
  text-align: center;
}
.ck-aside-div-pd10 {
  padding: 10px;
}
.ck-card-border0 {
  border: 0;
}
.el-col {
  border-radius: 4px;
  margin-bottom: 10px;
}
</style>
