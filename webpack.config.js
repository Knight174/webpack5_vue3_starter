const { merge } = require('webpack-merge')
const commonConfig = require('./build/webpack.base.config.js')
const productionConfig = require('./build/webpack.prod.config.js')
const developmentConfig = require('./build/webpack.dev.config.js')

module.exports = (env) => {
  const isProduction = env && env.WEBPACK_BUILD
  const config = isProduction ? productionConfig : developmentConfig
  return merge(commonConfig, config)
}
