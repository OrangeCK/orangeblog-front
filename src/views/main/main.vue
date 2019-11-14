<template>
    <div>
        <div>
          <el-row :gutter="20">
            <el-col :span="12" v-for="(o, index) in 7" :key="o" >
              <div v-if="index%2 === 0" class="grid-content bg-purple">
                <el-card class="box-card" shadow="hover">
                  <el-row :gutter="20">
                    <el-col :span="10">
                      <img src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg" class="ck-image">
                    </el-col>
                    <el-col :span="14">
                      Element（元素）是MUGEN游戏中的核心剧情人物与最终BOSS，最有辨识性的八神庵克隆个体，与Gustab.m和Psyqhical同为早期拳皇MUGEN作品里著名的原创魔改人
                    </el-col>
                  </el-row>
                </el-card>
              </div>
              <div v-if="index%2 !== 0" class="grid-content bg-purple">
                <el-card class="box-card" shadow="hover">
                  <el-row :gutter="20">
                    <el-col :span="10">
                      <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" class="ck-image">
                    </el-col>
                    <el-col :span="14">
                      Element（元素）是MUGEN游戏中的核心剧情人物与最终BOSS，最有辨识性的八神庵克隆个体，与Gustab.m和Psyqhical同为早期拳皇MUGEN作品里著名的原创魔改人
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
