<template>
  <div style="margin: -10px;">
    <el-card class="ck-card-blogDetail">
      <div slot="header">
        <div class="ck-card-title">
          <span>Mybatis-Plus的使用（一）：初识Mybatis-Plus</span>
        </div>
        <div class="ck-card-tag2">
          <el-tag size="mini" type="warning" effect="dark">栗子生活</el-tag>
          <el-tag size="mini" type="warning">栗子厨房</el-tag>
          <el-tag size="mini" type="info" effect="plain">阅读 99</el-tag>
          <el-tag size="mini" type="info" effect="plain">喜欢 9</el-tag>
          <el-tag size="mini" type="info" effect="plain">作者 橙子</el-tag>
          <el-tag size="mini" type="info" effect="plain">2019-11-15 11:18:22</el-tag>
        </div>
      </div>
      <div>
        <BlogText :markdownContent="input"></BlogText>
      </div>
    </el-card>
  </div>
</template>

<script>
import BlogText from './blogText'
export default {
  name: 'BlogDetail',
  props: {
    msg: String
  },
  components: {
    BlogText
  },
  data () {
    return {
      input: ''
    }
  },
  computed: {
  },
  mounted () {
    this.getMarkdownContent()
  },
  methods: {
    getMarkdownContent () {
      this.$axios.get('/markdown.md').then((res) => {
        // let markdown = res.data
        this.input = res.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
