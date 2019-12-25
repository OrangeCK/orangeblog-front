const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/lmorange/' : '/',
  assetsDir: 'static',
  outputDir: 'lmorange',
  lintOnSave: false,
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  configureWebpack: {
    plugins: [
      // 引入第三方js插件
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      }),
      new CompressionPlugin({
        // 匹配文件名
        test: /\.js$|\.html$|\.css/,
        // 对超过10k的数据进行压缩
        threshold: 10240,
        // 是否删除源文件
        deleteOriginalAssets: false
      })
    ],
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'element-ui': 'Element',
      'axios': 'axios',
      'marked': 'marked',
      'hljs': 'hljs',
      'nprogress': 'NProgress'
    }
  }
}

