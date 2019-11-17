<template>
  <div>
    <el-row  v-for="(o, index) in 7" :key="o" type="flex" justify="center">
      <el-col v-if="index%2 !== 0" :span="20">
        <div class="grid-content bg-purple">
          <el-card class="box-card" shadow="hover">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-image
                  class="ck-image-radius"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  fit="scale-down">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </el-col>
              <el-col :span="16">
                <div class="ck-card-title">Mybatis-Plus的使用（一）：初识Mybatis-Plus</div>
                <p class="ck-card-outline">Element（元素）是MUGEN游戏中的核心剧情人物与最终BOSS，最有辨识性的八神庵克隆个体，与Gustab.m和Psyqhical同为早期拳皇MUGEN作品里著名的原创魔改人</p>
                <div class="ck-card-tag">
                  <el-tag size="small" type="warning" effect="dark">栗子生活</el-tag>
                  <el-tag size="small" type="warning">栗子厨房</el-tag>
                  <el-tag size="small" type="info" effect="plain">阅读 99</el-tag>
                  <el-tag size="small" type="info" effect="plain">喜欢 9</el-tag>
                  <el-tag size="small" type="info" effect="plain">作者 橙子</el-tag>
                  <el-tag size="small" type="info" effect="plain">2019-11-15 11:18:22</el-tag>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
      <el-col v-if="index%2 === 0" :span="20">
        <div class="grid-content bg-purple">
          <el-card class="box-card" shadow="hover">
            <el-row :gutter="20">
              <el-col :span="16">
                <div class="ck-card-title">Mybatis-Plus的使用（一）：初识Mybatis-Plus</div>
                <p class="ck-card-outline">Element（元素）是MUGEN游戏中的核心剧情人物与最终BOSS，最有辨识性的八神庵克隆个体，与Gustab.m和Psyqhical同为早期拳皇MUGEN作品里著名的原创魔改人</p>
                <div class="ck-card-tag">
                  <el-tag size="small" type="warning" effect="dark">栗子生活</el-tag>
                  <el-tag size="small" type="warning">栗子厨房</el-tag>
                  <el-tag size="small" type="info" effect="plain">阅读 99</el-tag>
                  <el-tag size="small" type="info" effect="plain">喜欢 9</el-tag>
                  <el-tag size="small" type="info" effect="plain">作者 橙子</el-tag>
                  <el-tag size="small" type="info" effect="plain">2019-11-15 11:18:22</el-tag>
                </div>
              </el-col>
              <el-col :span="8">
                <el-image
                  class="ck-image-radius"
                  src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
                  fit="scale-down">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  },
  data () {
    return {
      footerText: 'Kang Chen`s Header!',
      show: true,
      show2: true
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
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  margin-bottom: 10px;
}
// .ck-card-tag .el-tag {
//   &:last-child {
//     margin-right: 0;
//   }
// }
</style>
