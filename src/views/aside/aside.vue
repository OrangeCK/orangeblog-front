<template>
    <div class="ck-aside-div-pd10 ck-idx-head-aside">
      <el-row>
        <el-col :span="24">
          <div class="ck-avatar-img">
              <el-avatar shape="square" fit="scale-down" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <div class="sub-title">栗子味橙子</div>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="sub-title">自我介绍</div>
          <p>杨暘，目前就职于昆明达内科技有限公司，热爱IT行业喜欢多种运动：篮球、羽毛球，喜欢交友如果你也和我一样，那就互粉吧</p>
        </el-col>
        <el-col :span="24">
          <div>最新发表:</div>
          <ol>
            <li>Mybatis-Plus的使用（一）—— 初识Mybatis-Plus</li>
            <li>栗子厨房第3期——凉拌花甲</li>
            <li>Mybatis-plus的使用（四）——CRUD与条件构造器</li>
            <li>栗子厨房第2期——栗子的大盘鸡</li>
          </ol>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="never">
            <el-image
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              fit="scale-down">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="never">
            <el-image
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              fit="scale-down">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="never">
            <el-image
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              fit="scale-down">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="never">
            <el-image
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              fit="scale-down">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="never">
            <el-image
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              fit="scale-down">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="never">
            <el-image
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              fit="scale-down">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
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
