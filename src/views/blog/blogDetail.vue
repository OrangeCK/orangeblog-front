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
             留言板<i class="el-icon-s-comment"></i>
            </template>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
              <el-form-item label="昵称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="Email" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item>
                <el-switch
                  v-model="ruleForm.sex"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-text="靓仔"
                  inactive-text="淑女">
                </el-switch>
              </el-form-item>
              <el-form-item label="您的留言" prop="message">
                <el-input type="textarea" v-model="ruleForm.message"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button size="small" @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
             历史留言<i class="el-icon-s-operation"></i>
            </template>
            <div v-for="o in 3" :key="o">
              <el-row>
                <el-col style="width:25%;">
                  <el-avatar shape="square" fit="scale-down" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </el-col>
                <el-col style="width:75%;">
                  <p>这条评论是非常的额棒的</p>
                </el-col>
              </el-row>
              <el-divider></el-divider>
            </div>
            <div>
              <el-pagination
                :page-size="20"
                :pager-count="4"
                layout="prev, pager, next"
                :total="268">
              </el-pagination>
            </div>
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
      input: '',
      ruleForm: {
        name: '',
        email: '',
        sex: true,
        message: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 7, message: '长度在 2 到 7 个字符', trigger: 'blur' }
        ],
        email: [
          { required: false, message: '请输入邮箱地址', trigger: 'blur' }
        ],
        message: [
          { required: true, message: '请留下你想说的话', trigger: 'blur' }
        ]
      }
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
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
