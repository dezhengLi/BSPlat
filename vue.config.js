const path = require('path')

const resolve = (_dir) => path.resolve(__dirname, _dir)

module.exports = {
  devServer: {
    proxy: {
      '/AgentPlat/gateway': {
        target: 'http://192.168.11.111:8080'
        // target: 'http://www.bisrec.com'
      }
    },
    port: '3030'
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    // 添加要替换的 loader
    svgRule
      .include
        .add(resolve('src/common//icons'))
        .end()
      .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })

    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
        .loader('pug-plain-loader')

    config.resolve.alias
      .set('src', resolve('src'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('types', resolve('src/types'))
      .set('views', resolve('src/views'))
      .set('store', resolve('src/store'))
  },
  configureWebpack: {}
}
