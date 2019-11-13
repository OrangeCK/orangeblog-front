<template>
    <div>
        <div>
          <el-row :gutter="20">
            <el-col :span="11" v-for="i in 7" :key="i">
              <div class="grid-content bg-purple">
                <el-card class="box-card" shadow="hover">
                  <el-row :gutter="20">
                    <el-col :span="10">
                      <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" class="ck-image">
                    </el-col>
                    <el-col :span="12">
                      Element（元素）是MUGEN游戏中的核心剧情人物与最终BOSS，是上届游戏以 八神庵 与 庵9号 为蓝本所制造出来的改造克隆人。
                      也是MUGEN系列中设定实力最强与最有辨识性的八神庵克隆个体，与Gustab.m和Psyqhical同为早期拳皇MUGEN作品里著名的原创魔改人
                    </el-col>
                  </el-row>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </div>
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
// @media screen and (max-width: 538px){
//   .el-col-11 {
//     width: 98%;
//   }
// }
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
</style>
