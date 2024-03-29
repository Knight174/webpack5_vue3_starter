const path = require('path')

const devConfig = {
  mode: 'development',
  cache: {
    type: 'filesystem'
  },
  optimization: {
    usedExports: true // 消除未使用的导出（exports）代码
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    open: true, // 开启服务器时，自动打开页面
    compress: true, // 开启 gzip 压缩
    port: 8080, // 自定义端口号
    hot: true, // 开启热更新
    proxy: {
      '/api': {
        target: 'https://res.abeim.cn', // 匹配到 '/api' 时，代理为 'https://res.abeim.cn/api'
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 将 'https://res.abeim.cn/api' 中的 '/api' 替换为空
        }
      }
    }
  }
}

module.exports = devConfig
