const path = require('path')
const WebpackDashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new WebpackDashboardPlugin()
  ],
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  }
}
