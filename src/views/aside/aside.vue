<template>
    <div class="ck-aside-div-pd10 ck-idx-head-aside">
      <el-row>
        <el-col :span="24">
          <div class="ck-avatar-img">
              <el-avatar shape="square" fit="scale-down"  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <div class="sub-title">栗子味橙子</div>
          </div>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="always">
            <div class="sub-title" style="text-align: center;">自我介绍</div>
            <p>XX，目前就职于顺丰速运，热爱编码、喜欢运动，爱足球、爱生活；喜欢交友如果你也和我一样，那就互粉吧</p>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="always">
            <div style="text-align: center;">最新发表</div>
            <div style="font-size:12px;margin: 15px 0;">
              <el-link v-for="d in lastBlogs.data" :key="d.id" :href="'/index/blogDetail/' + d.id" icon="el-icon-magic-stick">{{d.title}}</el-link>
            </div>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="always">
            <div style="text-align: center;">人气排行</div>
            <ol style="font-size:12px;">
              <li v-for="d in popularBlogs.data" :key="d.id"><el-link :href="'/index/blogDetail/' + d.id">{{d.title}}</el-link></li>
            </ol>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="always">
            <el-row :gutter="10">
              <el-col style="width: 50%">
                <div style="text-align: center;">微信</div>
                <el-image
                  :src="weixin"
                  fit="scale-down">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </el-col>
              <el-col style="width: 50%">
                <div style="text-align: center;">支付宝</div>
                <el-image
                  :src="weixin"
                  fit="scale-down">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'Aside',
  props: {
    msg: String
  },
  data () {
    return {
      footerText: 'Kang Chen`s Header!',
      dateValue: new Date(),
      weixin: require('@/assets/zanshangma.png'),
      lastBlogs: {
        data: []
      },
      popularBlogs: {
        data: []
      }
    }
  },
  computed: {
  },
  mounted () {
    this.lastPublishBlogs()
    this.popularPublishBlogs()
  },
  methods: {
    lastPublishBlogs () {
      this.service({
        url: this.API.lastPublishBlogs,
        method: 'post'
      }).then(res => {
        let data = res.data.data
        this.lastBlogs.data = data
      }).catch(() => {
      })
    },
    popularPublishBlogs () {
      this.service({
        url: this.API.popularPublishBlogs,
        method: 'post'
      }).then(res => {
        let data = res.data.data
        this.popularBlogs.data = data
      }).catch(() => {
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ck-avatar-img {
  text-align: center;
  // background-image: url(../../assets/touxiang2-1.png);
  // background-repeat:no-repeat;
}
.ck-aside-div-pd10 {
  padding: 10px;
}
// .ck-card-border0 {
//   border: 0;
// }
.el-col {
  border-radius: 4px;
  margin-bottom: 10px;
}
</style>
