<template>
    <div class="ck-aside-div-pd10 ck-idx-head-aside">
      <el-row>
        <el-col :span="24">
          <div class="ck-avatar-img">
              <el-avatar shape="square" fit="scale-down"  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <div class="sub-title">栗子味橙子</div>
          </div>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="always">
            <div class="sub-title" style="text-align: center;">自我介绍</div>
            <p>杨暘，目前就职于昆明达内科技有限公司，热爱IT行业喜欢多种运动：篮球、羽毛球，喜欢交友如果你也和我一样，那就互粉吧</p>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="always">
            <div style="text-align: center;">最新发表</div>
            <div>
              <el-link type="primary">Mybatis-Plus的使用（一）：初识Mybatis-Plus</el-link>
              <el-link type="primary">栗子厨房第3期——凉拌花甲</el-link>
              <el-link type="primary">Mybatis-plus的使用（四）：CRUD与条件构造器</el-link>
              <el-link type="primary">栗子厨房第2期——栗子的大盘鸡</el-link>
            </div>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="always">
            <el-row :gutter="10">
              <el-col :span="12">
                <div style="text-align: center;">微信</div>
                <el-image
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  fit="scale-down">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </el-col>
              <el-col :span="12">
                <div style="text-align: center;">支付宝</div>
                <el-image
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  fit="scale-down">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </el-col>
            </el-row>
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
      footerText: 'Kang Chen`s Header!',
      dateValue: new Date()
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
  text-align: center;
  // background-image: url(../../assets/touxiang2-1.png);
  // background-repeat:no-repeat;
}
.ck-aside-div-pd10 {
  padding: 10px;
}
// .ck-card-border0 {
//   border: 0;
// }
.el-col {
  border-radius: 4px;
  margin-bottom: 10px;
}
</style>
