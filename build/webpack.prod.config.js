const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const prodConfig = {
  mode: 'production',
  devtool: 'nosources-source-map',
  plugins: [
    // https://www.npmjs.com/package/webpack-bundle-analyzer
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled' // 不启动展示打包报告的http服务器
      // generateStatsFile: true // 是否生成stats.json文件
    })
  ],
  performance: {
    maxEntrypointSize: 10000000,
    maxAssetSize: 30000000
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // 同步或异步
      minSize: 0, // 最小分割大小
      // 缓存分割大小
      cacheGroups: {
        // 打包 node_modules 中引用的第三方库的模块（优先级更高）
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          enforce: true, // 最高级别缓存（无视其他缓存组的优先级）
          priority: -10,
          name: 'vendors'
          // name(module, chunks, cacheGroupKey) {
          //   const moduleFileName = module
          //     .identifier()
          //     .split('/')
          //     .reduceRight((item) => item)
          //   const allChunksNames = chunks.map((item) => item.name).join('~')
          //   return `${cacheGroupKey}/${allChunksNames}-${moduleFileName}`
          // }
        },
        // 共用模块
        commons: {
          minChunks: 2, // 至少在两个模块中引用的模块（将被分离到 common 代码中）
          priority: -20,
          reuseExistingChunk: true, // 模块缓存重用
          name: 'commons'
        }
      }
    }
  }
}

module.exports = prodConfig
