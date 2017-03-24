'use strict'

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    // overlay: true will show only errors
    overlay: {
      errors: true,
      warnings: true,
    },
  },
})