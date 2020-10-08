const TerserPlugin = require('terser-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { buildPath } = require('../utils')
const { prefix } = require('../env')

const publicPath = prefix === '/' ? '/static/' : `${prefix}/static/`

module.exports = () => ({
  output: {
    filename: "bundle.js",
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader" ]
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlPlugin({
      filename: 'index.html',
      inject: false,
      template: './src/index_dev.html',
      prefix: buildPath('static'),
    })
  ]
})