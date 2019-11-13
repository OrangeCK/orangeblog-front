<template>
    <div>
        <div>
            <el-row :gutter="20">
                <el-col :span="11" v-for="i in 7" :key="i">
                    <div class="grid-content bg-purple">
                        <el-card class="box-card" shadow="hover">
                            <div v-for="o in 3" :key="o" class="text item">
                                {{'测试tab2页面 ' + o }}
                            </div>
                        </el-card>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MainTest2',
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
