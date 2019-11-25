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
        title: '发布版本 V1.0.0',
        content: '王小虎 提交于 2018/4/2 20:46',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more'
      }, {
        title: '发布版本 V1.2.0',
        content: '王小虎 提交于 2018/4/2 20:46',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87'
      }, {
        title: '发布版本 V2.1.0',
        content: '王小虎 提交于 2018/4/2 20:46',
        timestamp: '2018-04-03 20:46',
        size: 'large'
      }, {
        title: '发布版本 V2.0.0',
        content: '王小虎 提交于 2018/4/2 20:46',
        timestamp: '2018-04-03 20:46'
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
