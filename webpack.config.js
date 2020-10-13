/*
 * @LastEditors: 七大大
 * @Date: 2020-10-13
 * @LastEditTime: 2020-10-13
 * @FilePath: \myantdd:\products\webpack_demo\webpack.config.js
 * @Description: webpack配置文件
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 入口文件
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  // 插件
  plugins: [
    // 清理所有打包的文件
    new CleanWebpackPlugin(),
    // 输出管理-默认生成index.html
    new HtmlWebpackPlugin({
      title: 'webpack学习-七大大' // index.html的title
    }),
  ],
  // 出口文件
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 模块
  module: {
    rules: [
      // 样式
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // 图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};