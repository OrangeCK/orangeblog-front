<template>
  <div id="markdown" v-html="compiledMarkdown"></div>
</template>

<script>
var rendererMD = new marked.Renderer()
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value
    } else {
      return hljs.highlightAuto(code).value
    }
  }
})
export default {
  name: 'BlogText',
  props: {
    blog: {
      markdownContent: String,
      id: String
    }
  },
  computed: {
    compiledMarkdown: function () {
      let html = marked(this.blog.markdownContent || '', { sanitize: true })
      html = html.replace(/<code>/g, '<code class=\'hljs\'>')
      html = html.replace(/<img/g, '<img preview=' + this.blog.id + '')
      return html
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import '../../common/css/markdown.css';
</style>
