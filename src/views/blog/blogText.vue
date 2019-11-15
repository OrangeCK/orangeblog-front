<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script>
import marked from 'marked'
var rendererMD = new marked.Renderer()
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})
export default {
  name: 'BlogText',
  props: {
    markdownContent: String
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.markdownContent, { sanitize: true })
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>
