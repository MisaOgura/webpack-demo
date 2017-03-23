'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const commonConfig = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    // [name] will be replaced by the name of the entry - 'app'
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Demo'
    }),
  ],
}

const productionConfig = () => commonConfig

const devConfig = () => {
  const config = {
    devServer: {
      historyApiFallback: true,
      stats: "errors-only",
      host: process.env.HOST,
      port: process.env.PORT,
    }
  }

  // appended devConfig to commonConfig
  return Object.assign({}, commonConfig, config)
}

module.exports = env => {
  if (env === 'production') {
    return productionConfig()
  }

  return devConfig()
}