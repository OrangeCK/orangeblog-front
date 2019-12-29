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
        title: '版本 V2.2.0',
        content: '使用cdn加速、gzip压缩、路由懒加载来优化首页的加载速度',
        timestamp: '2019-12-25',
        size: 'large',
        type: 'warning',
        icon: 'el-icon-s-data'
      }, {
        title: '版本 V2.1.0',
        content: '添加图片查看插件，使前端图片查看更方便',
        timestamp: '2019-12-14',
        size: 'large',
        type: 'warning',
        icon: 'el-icon-s-data'
      }, {
        title: '版本 V2.0.0',
        content: '重构前端，采用vue + Element替换原来的thymeleaf模板形式，并单独部署',
        timestamp: '2019-11-16',
        size: 'large',
        type: 'warning',
        icon: 'el-icon-s-data'
      }, {
        title: '版本 V1.2.0',
        content: '增加blog的简易评论、点赞等功能，优化排版样式',
        timestamp: '2019-06-30',
        size: 'large',
        type: 'warning',
        icon: 'el-icon-s-data'
      }, {
        title: '版本 V1.0.0',
        content: '项目上线，前端主页等主要采用thymeleaf模板，后台管理系统采用vue + iView，后端使用java实现',
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
