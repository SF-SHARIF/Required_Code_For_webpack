const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/script/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devServer: {
    port: 8080,
    open: true,
    compress: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-class-properties']
          }
        }
      },
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ]
}

