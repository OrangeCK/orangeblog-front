<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai.css'
import '../../common/css/markdown.css'
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
    markdownContent: String
  },
  computed: {
    compiledMarkdown: function () {
      let html = marked(this.markdownContent || '', { sanitize: true })
      return html.replace(/<code>/g, '<code class=\'hljs\'>')
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
/* @import '../../common/css/markdown.css' */
</style>
