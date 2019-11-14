<template>
    <div>
        <el-row type="flex" justify="center">
        <el-col :span="6">
          <div>
            <span>&copy; 2019 lmorange 蜀ICP备19015312号</span>
          </div>
          <div>
            <span>川公网安备 51010502010903号</span>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'Footer',
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
</style>
