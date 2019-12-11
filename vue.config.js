module.exports = {
    devServer:{
        host: '0.0.0.0',
        port: 8080
        // proxy: {}
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/lmorange/' : '/',
    // publicPath: '',
    assetsDir: 'static',
    outputDir: 'lmorange',
    lintOnSave: false,
    productionSourceMap: false // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
}
