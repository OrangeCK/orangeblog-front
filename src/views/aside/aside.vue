<template>
    <div class="ck-aside-div-pd10 ck-idx-head-aside">
      <el-row>
        <el-col :span="24">
          <div class="ck-avatar-img">
              <el-avatar shape="square" fit="scale-down" :size="40" src="https://www.lmorange.com/oss-image/lmsystem/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200101224205.jpg"></el-avatar>
              <div class="sub-title">栗子味橙子</div>
          </div>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="always">
            <div class="sub-title" style="text-align: center;">自我介绍</div>
            <p>橙子，目前就职于顺丰速运，喜欢优美的编码，热爱运动、擅长足球；喜欢充实有意义的生活，
              记录身边的点滴，让它不只存在于过去；喜欢了解探索未知的领域，在这看似规律的生活中增加一些悸动</p>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="always">
            <div style="text-align: center;">最新发表</div>
            <div style="margin: 15px 0;">
              <el-link v-for="d in lastBlogs.data" :key="d.id" @click="jumpToDetail(d.id)" icon="el-icon-magic-stick">{{d.title}}</el-link>
            </div>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="always">
            <div style="text-align: center;">人气排行</div>
            <ol>
              <li v-for="d in popularBlogs.data" :key="d.id"><el-link @click="jumpToDetail(d.id)">{{d.title}}</el-link></li>
            </ol>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card class="box-card ck-card-border0" shadow="always">
            <el-row :gutter="10">
              <el-col style="width: 50%">
                <div style="text-align: center;">微信</div>
                <div class="el-image">
                  <img preview="weixin" :src="weixin" class="el-image__inner" style="object-fit: scale-down;">
                </div>
              </el-col>
              <el-col style="width: 50%">
                <div style="text-align: center;">公众号</div>
                <div class="el-image">
                  <img preview="weixin" :src="zhifubao" class="el-image__inner" style="object-fit: scale-down;">
                </div>
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
      weixin: require('@/assets/weixin.png'),
      zhifubao: require('@/assets/weixin2.png'),
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
  mounted: function() {
    // setTimeout(() => {
    //   this.lastPublishBlogs()
    //   this.popularPublishBlogs()
    // }, 1000)
    this.$nextTick(() => {
      setTimeout(() => {
        this.lastPublishBlogs()
        this.popularPublishBlogs()
      }, 100)
    })
  },
  methods: {
    jumpToDetail (id) {
      this.$router.push({ path: '/index/blogDetail/' + id })
      this.$emit('listenToChildEvent', false);
    },
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
