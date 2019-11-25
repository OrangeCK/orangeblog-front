<template>
  <div style="margin-right: -10px;margin-left: -10px;">
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
      <div>
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
             留言板<i class="header-icon el-icon-info"></i>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="历史留言">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
        </el-collapse>
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
      // this.service({
      //   url: this.API.testServer,
      //   method: 'post'
      // }).then(res => {
      //   console.log(res)
      // })
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
