const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const Copier = require('copy-webpack-plugin')

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)
const presetConfig = require('./build-utils/loadPresets')
const modesDictionary = {
  'development': 'development',
  'production': 'production',
  'electron': 'production'
}

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => merge(
  {
    mode: modesDictionary[mode],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(png|jpg|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.mp4$/,
          use: 'file-loader?name=videos/[name].[ext]',
        },
      ]
    },
    output: {
      filename: 'bundle.js',
      chunkFilename: '[name].lazy-chunk.js'
    },
    plugins: [
      new HTMLWebpackPlugin({
        filename: 'index.html',
        inject: false,
        template: './src/index.html'
      }),
      new webpack.ProgressPlugin(),
    ]
  },
  modeConfig(mode),
  presetConfig({ mode, presets })
)