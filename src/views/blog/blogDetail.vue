<template>
  <div style="margin-right: -10px;margin-left: -10px;">
    <el-card class="ck-card-blogDetail">
      <div slot="header">
        <div class="ck-card-title">
          <span>{{blog.title}}</span>
        </div>
        <div class="ck-card-tag2">
          <el-tag size="mini" type="warning" effect="dark">{{blog.parentCategoryName}}</el-tag>
          <el-tag size="mini" type="warning">{{blog.categoryName}}</el-tag>
          <el-tag size="mini" type="info" effect="plain">阅读 {{blog.blogView}}</el-tag>
          <el-tag size="mini" type="info" effect="plain">喜欢 {{blog.praiseNum}}</el-tag>
          <el-tag size="mini" type="info" effect="plain">作者 {{blog.authorName}}</el-tag>
          <el-tag size="mini" type="info" effect="plain">{{blog.sCt}}</el-tag>
        </div>
      </div>
      <el-row>
        <el-col :span="24">
          <BlogText :blog="blogText"></BlogText>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" >
          <div style="text-align:center; padding: 10px 0;">
            <el-button type="danger" :plain="praise.plain" size="small" @click="givePraise" round icon="el-icon-star-off">{{praise.text}}</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-collapse accordion @change="changeCollapse">
            <el-collapse-item name="liuyanban">
              <template slot="title">
              留言板<i class="el-icon-s-comment"></i>
              </template>
              <el-form :model="blogDiscussant" :rules="rules" ref="blogDiscussant" label-width="80px" class="demo-ruleForm">
                <el-form-item label="昵称" prop="discussant">
                  <el-input v-model="blogDiscussant.discussant" placeholder="请输入昵称"></el-input>
                </el-form-item>
                <el-form-item label="Email" prop="discussantEmail">
                  <el-input v-model="blogDiscussant.discussantEmail" placeholder="请输入Email"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-switch
                    v-model="blogDiscussant.discussantSex"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="靓仔"
                    inactive-text="淑女">
                  </el-switch>
                </el-form-item>
                <el-form-item label="留言" prop="discussantOpinion">
                  <el-input type="textarea" v-model="blogDiscussant.discussantOpinion" placeholder="请输入你想说的话"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button size="small" type="warning" :loading="loading.submitLoading" @click="submitForm('blogDiscussant')">提交</el-button>
                  <el-button size="small" circle @click="resetForm('blogDiscussant')">重置</el-button>
                </el-form-item>
              </el-form>
            </el-collapse-item>
            <el-collapse-item name="lishiliuyan" >
              <template slot="title">
              历史留言<i class="el-icon-s-operation"></i>
              </template>
              <div v-for="o in blogDiscussant.data" :key="o.id" >
                <el-row>
                  <el-col style="width:20%;">
                    <div class="discussant-bg"></div>
                  </el-col>
                  <el-col style="width:80%;">
                    <div class="discussant">
                      <span class="bot"></span>
                      {{o.discussantOpinion}}
                    </div>
                  </el-col>
                </el-row>
                <el-divider></el-divider>
              </div>
              <div>
                <el-pagination
                  layout="prev, pager, next"
                  @current-change="blogDiscussantPage"
                  :page-size="blogDiscussant.pageSize"
                  :total="blogDiscussant.total">
                </el-pagination>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import BlogText from './blogText'
import Global from '../../common/vue/global'
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
      blog: {
        id: '',
        blogView: '',
        categoryId: '',
        categoryName: '',
        parentCategoryId: '',
        parentCategoryName: '',
        sCt: '',
        praiseNum: '',
        authorName: '',
        title: ''
      },
      praise: {
        text: '点个赞',
        plain: true
      },
      blogDiscussant: {
        data: [],
        pageIndex: 1,
        total: 0,
        pageSize: 5,
        discussant: '',
        discussantSex: '',
        discussantEmail: '',
        discussantOpinion: '',
        blogId: ''
      },
      // discussantBgImge: require('@/assets/ck-ck.png'),
      blogText: {
        markdownContent: '',
        blogId: ''
      },
      loading: {
        submitLoading: false
      },
      options: {
        body: true,
        lock: true,
        target: '.lishiliuyan',
        background: '#efe3e3'
      },
      rules: {
        discussant: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 7, message: '长度在 2 到 7 个字符', trigger: 'blur' }
        ],
        discussantEmail: [
          { required: false, message: '请输入邮箱地址', trigger: 'blur' }
        ],
        discussantOpinion: [
          { required: true, message: '请留下你想说的话', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
  },
  watch: {
    '$route' (newUrl, oldUrl) {
      if (newUrl.params.id !== oldUrl.params.id) {
        this.getMarkdownContent()
      }
    }
  },
  mounted () {
    this.getMarkdownContent()
  },
  methods: {
    getMarkdownContent () {
      let loadingInstance = this.$loading(Global.options)
      this.service({
        url: this.API.blogDetail + this.$route.params.id,
        method: 'post'
      }).then(res => {
        let data = res.data.data
        this.blogText.markdownContent = data.markdownText
        this.blogText.blogId = data.id
        this.blog = data
        this.blogDiscussant.blogId = this.blog.id
        loadingInstance.close()
      }).catch(() => {
        loadingInstance.close()
      })
      // this.$axios.get('/markdown.md').then((res) => {
      //   // let markdown = res.data
      //   this.input = res.data
      // })
    },
    givePraise () {
      if (this.praise.text === '已赞') {
        this.$notify({
          title: '提醒',
          message: '你已经点过赞了',
          type: 'warning'
        })
        return;
      }
      this.service({
        url: this.API.praiseBlog + this.$route.params.id,
        method: 'post'
      }).then(res => {
        let data = res.data
        if (data.success) {
          this.$notify({
            title: '成功',
            message: '谢谢点赞',
            type: 'success'
          })
        } else {
          this.$notify({
            title: '提醒',
            message: data.msg,
            type: 'warning'
          })
        }
        this.praise.text = '已赞'
        this.praise.plain = false
      }).catch(() => {
      })
      
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.saveBlogDiscussant()
        } else {
          this.$notify.error({
            title: '失败',
            message: '留言失败'
          })
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    saveBlogDiscussant () {
      this.loading.submitLoading = true
      let reqData = this.blogDiscussant
      if (this.blogDiscussant.discussantSex === '靓仔') {
        reqData.discussantSex = '1'
      } else {
        reqData.discussantSex = '0'
      }
      this.service({
        url: this.API.saveBlogDiscussant,
        method: 'post',
        data: reqData
      }).then(res => {
        let data = res.data
        if (data.success) {
          this.$notify({
            title: '成功',
            message: '你的留言已成功提交',
            type: 'success'
          })
        }
        this.loading.submitLoading = false
      }).catch(() => {
        this.loading.submitLoading = false
      })
    },
    blogDiscussantPage (index) {
      this.service({
        url: this.API.blogDiscussantPage,
        method: 'post',
        data: {
          'pageIndex': index,
          'pageSize': this.blogDiscussant.pageSize,
          'blogId': this.blog.id
        }
      }).then(res => {
        let data = res.data.data
        this.blogDiscussant.data = data.records
        this.blogDiscussant.total = data.total
      }).catch(() => {
      })
    },
    changeCollapse (activeNames) {
      if (activeNames === 'lishiliuyan') {
        this.blogDiscussantPage(1)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.discussant-bg {
  width: 47px;
  height: 47px;
  margin-left: auto;
  margin-right: auto;
  background: url('../../assets/shangwuportrait200.png') -52px -23px no-repeat;
}
.discussant{padding:10px; margin-left:10px; background:#fbf6e4; position:relative;border-radius: 10px;}
.discussant span{width:0; height:0; font-size:0; overflow:hidden; position:absolute;}
.discussant span.bot{
    border-width:10px; 
    border-style:solid; 
    border-color:#ffffff #fbf6e4 #fbf6e4 #ffffff; 
    left:-20px; 
    top:10px;
}
</style>
