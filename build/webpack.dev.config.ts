const path = require('path');
const webpack = require('webpack');

const devConfig = {
  mode: 'development',
  optimization: {
    usedExports: true
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    open: true, // 开启服务器时，自动打开页面
    compress: true, // 开启 gzip 压缩
    port: 9000, // 自定义端口号
    hot: 'only', // 开启热更新
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = devConfig;