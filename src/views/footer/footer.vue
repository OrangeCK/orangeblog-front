<template>
    <div>
        <el-button type="info">{{msg}}</el-button> Footer need Fight
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
