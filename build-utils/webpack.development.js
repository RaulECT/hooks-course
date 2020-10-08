const HtmlPlugin = require('html-webpack-plugin')

module.exports = () => ({
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      inject: false,
      template: './src/index_dev.html',
    })
  ]
})