<template>
    <div>
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :timestamp="activity.timestamp"
              placement="top">
              <el-card>
                <h4>{{activity.title}}</h4>
                <p>{{activity.content}}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-col>
      </el-row>
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
      activities: [{
        title: '版本 V2.0.0',
        content: '前端大改版，采用vue + element替换原来的thymeleaf模板形式，并单独部署',
        timestamp: '2019-12-07',
        size: 'large',
        type: 'warning',
        icon: 'el-icon-s-data'
      }, {
        title: '版本 V1.2.0',
        content: '增加blog页面的评论功能，并且优化markdown的样式，比如：在代码前加上行号等',
        timestamp: '2019-12-07',
        size: 'large',
        type: 'warning',
        icon: 'el-icon-s-data'
      }, {
        title: '版本 V1.0.0',
        content: '项目上线，前端主页主要采用thymeleaf模板，因为想到如果是blog形式，就主要以markdown形式的内容套模板',
        timestamp: '2019-05-30',
        size: 'large',
        type: 'warning',
        icon: 'el-icon-s-data'
      }]
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
