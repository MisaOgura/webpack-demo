'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const parts = require('./webpack.parts')

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const commonConfig = merge([
  {
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
  },
])

const productionConfig = merge([])

const devConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
])

module.exports = env => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig)
  }

  return merge(commonConfig, devConfig)
}