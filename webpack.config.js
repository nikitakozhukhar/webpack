const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExstractPlugin = require('mini-css-extract-plugin');


module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCSSExstractPlugin.loader,
          'css-loader'
        ]
      }

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    new MiniCSSExstractPlugin()
  ],
}