<template>
  <div>
    <el-row  v-for="(b, index) in this.blogCard.data" :key="b.id" type="flex" justify="center">
      <el-col v-if="index%2 !== 0" :span="20">
        <div class="grid-content bg-purple">
          <el-card class="box-card" shadow="hover">
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="el-image ck-image-radius">
                  <img :preview="b.id" :src="b.imageUrl" class="el-image__inner" style="object-fit: scale-down;">
                </div>
              </el-col>
              <el-col :span="16">
                <el-link type="warning"><div class="ck-card-title" @click="jumpToDetail(b.id)">{{b.title}}</div></el-link>
                <p class="ck-card-outline">{{b.outline}}...</p>
                <div class="ck-card-tag">
                  <el-tag size="small" type="warning" effect="dark">{{b.parentCategoryName}}</el-tag>
                  <el-tag size="small" type="warning">{{b.parentCategoryName}}</el-tag>
                  <el-tag size="small" type="info" effect="plain">阅读 {{b.blogView}}</el-tag>
                  <el-tag size="small" type="info" effect="plain">喜欢 {{b.praiseNum}}</el-tag>
                  <el-tag size="small" type="info" effect="plain">作者 {{b.authorName}}</el-tag>
                  <el-tag size="small" type="info" effect="plain">{{b.sCt}}</el-tag>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
      <el-col v-if="index%2 === 0" :span="20">
        <div class="grid-content bg-purple" >
          <el-card class="box-card" shadow="hover" >
            <el-row :gutter="20">
              <el-col :span="16">
                <el-link type="warning"><div class="ck-card-title" @click="jumpToDetail(b.id)">{{b.title}}</div></el-link>
                <p class="ck-card-outline">{{b.outline}}...</p>
                <div class="ck-card-tag">
                  <el-tag size="small" type="warning" effect="dark">{{b.parentCategoryName}}</el-tag>
                  <el-tag size="small" type="warning">{{b.parentCategoryName}}</el-tag>
                  <el-tag size="small" type="info" effect="plain">阅读 {{b.blogView}}</el-tag>
                  <el-tag size="small" type="info" effect="plain">喜欢 {{b.praiseNum}}</el-tag>
                  <el-tag size="small" type="info" effect="plain">作者 {{b.authorName}}</el-tag>
                  <el-tag size="small" type="info" effect="plain">{{b.sCt}}</el-tag>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="el-image ck-image-radius">
                  <img :preview="b.id" :src="b.imageUrl" class="el-image__inner" style="object-fit: scale-down;">
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="20" style="text-align:right;">
        <el-pagination
          small
          background
          @current-change="getBlogCards"
          layout="prev, pager, next"
          :page-size="blogCard.pageSize"
          :total="blogCard.total">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Global from '../../common/vue/global'
export default {
  name: 'Main',
  props: {
    msg: String
  },
  data () {
    return {
      fullscreenLoading: true,
      index: {
        title: '主页'
      },
      blogCard: {
        data: [],
        pageIndex: 1,
        total: 0,
        pageSize: 5
      }
    }
  },
  computed: {
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.getBlogCards(this.blogCard.pageIndex)
      }, 100)
    })
  },
  methods: {
    jumpToDetail (id) {
      this.$router.push({ path: '/index/blogDetail/' + id })
    },
    getBlogCards (index) {
      let loadingInstance = this.$loading(Global.options)
      this.service({
        url: this.API.listBlogCardPage,
        method: 'post',
        data: {
          'pageIndex': index,
          'pageSize': this.blogCard.pageSize
        }
      }).then(res => {
        let data = res.data.data
        this.blogCard.data = data.records
        this.blogCard.total = data.total
        loadingInstance.close()
      }).catch(() => {
        loadingInstance.close()
      })
    }
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
